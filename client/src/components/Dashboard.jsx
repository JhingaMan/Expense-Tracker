import React, { useReducer } from "react";
import { useState, useEffect, useRef } from "react";
import LineChartComp from "./LineChart";

const initialState = {
  all_transactions: [],
  income: "",
  expense: "",
  balance: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setTransaction":
      const transactions = action.payload;

      const totals = transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === "income") acc.income += transaction.amount;
          else if (transaction.type === "expense")
            acc.expense += transaction.amount;

          return acc;
        },
        { income: 0, expense: 0 }
      );
      return {
        all_transactions: transactions,
        income: totals.income.toFixed(2),
        expense: totals.expense.toFixed(2),
        balance: (totals.income - totals.expense).toFixed(2),
      };

    default:
      return state;
  }
}

const Dashboard = () => {
  const chartRef = useRef(null);
  const [width, setWidth] = useState(500);
  const [state, dispatch] = useReducer(reducer, initialState);

  const { all_transactions, income, expense, balance } = state;

  const sortedTransactions_income = [...all_transactions].sort((a, b) => {
    new Date(a) - new Date(b);
  });

  useEffect(() => {
    async function loadTransactionData() {
      try {
        const response = await fetch(
          "http://localhost:5000/transaction/get-user-transaction",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        const data = await response.json();
        const { success, transaction } = data;
        console.log(transaction)
        dispatch({ type: "setTransaction", payload: transaction });
      } catch (error) {
        console.log(error);
      }
    }

    loadTransactionData();
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (chartRef.current) {
        setWidth(chartRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="bg-[#0F172A] text-white h-full w-full rounded-3xl flex flex-col">
      <header className="p-10 pb-6 text-5xl font-normal border-b-1 border-[#7C7C7C]">
        Dashboard
      </header>
      <div className="flex h-full">
        <section
          className="flex-[3] border-r-1 border-[#7C7C7C] w-full h-full flex flex-col"
          ref={chartRef}
        >
          <LineChartComp transaction={all_transactions} width={width} />
          <div className="flex flex-col justify-evenly p-2 gap-2">
            <div className="flex gap-2">
              <div className="flex-[1] flex flex-col bg-[#1E293B] gap-2 rounded-xl p-2 pb-3">
                <p className="font-light">Total Balance</p>
                <p className="text-5xl">$ {balance}</p>
              </div>
              <div className="flex-[1] flex flex-col bg-[#1E293B] gap-2 rounded-xl p-2 pb-3">
                <p className="font-light">Total Income</p>
                <p className="text-5xl">$ {income}</p>
              </div>
            </div>
            <div className="flex-[1] flex flex-col bg-[#1E293B] gap-2 rounded-xl p-2 pb-3">
              <p className="font-light">Total Expense</p>
              <p className="text-5xl">$ {expense}</p>
            </div>
          </div>
          <div></div>
        </section>
        <section className="flex-[2] flex flex-col">
          <div className="flex flex-col">
            <p className="text-2xl m-3 ml-6">Recent History</p>
            <div className="flex flex-col gap-2 p-4 pt-0">
              {all_transactions.slice(0, 3).map((transaction) => {
                let bgcolor =
                  transaction.type === "income"
                    ? "bg-green-900/20"
                    : "bg-red-900/20";

                return (
                  <div
                    className={`flex justify-between bg-[#1E293B] items-center p-4 rounded-xl ${bgcolor}`}
                  >
                    <p>{transaction.category}</p>
                    <p>{transaction.amount}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="flex justify-between p-6 pb-2">
              <p>Min</p>
              <p>Salary</p>
              <p>Max</p>
            </div>
            <div className="flex justify-between bg-[#1E293B] items-center p-4 rounded-xl ml-3 mr-3">
              <p>amount</p>
              <p>label</p>
              <p>amount</p>
            </div>
          </div>
          <div className="pt-6">
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
