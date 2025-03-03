import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useGlobalContext } from "../utils/GlobalContext";

const RechartsLineChartComp = ({ width }) => {
  const { all_transactions } = useGlobalContext();

  const sortedTransactions = [...all_transactions].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const groupedByDate = sortedTransactions.reduce((acc, t) => {
    const dateKey = new Date(t.date).toLocaleDateString();
    const delta =
      t.type === "income" ? t.amount : t.type === "expense" ? -t.amount : 0;
    if (acc[dateKey]) {
      acc[dateKey] += delta;
    } else {
      acc[dateKey] = delta;
    }
    return acc;
  }, {});

  //   console.log(groupedByDate)

  const uniqueDates = Object.keys(groupedByDate).sort(
    (a, b) => new Date(a) - new Date(b)
  );

  //   console.log(uniqueDates)

  let cumulativeBalance = 0;
  const chartData = uniqueDates.map((date) => {
    cumulativeBalance += groupedByDate[date];
    return { date, balance: cumulativeBalance.toFixed(2) };
  });

  return (
    <div style={{ width: width, height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="date" stroke="#38BDF8" />
          <YAxis stroke="#38BDF8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#3375ff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RechartsLineChartComp;
