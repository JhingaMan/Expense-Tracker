import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useState, useEffect, useRef } from "react";

const Dashboard = () => {
  const chartRef = useRef(null);
  const [width, setWidth] = useState(500);

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
          <div>
            <LineChart
              sx={{
                "& .css-1x2wln8-MuiChartsAxis-root-MuiChartsXAxis-root .MuiChartsAxis-line":
                  {
                    stroke: "#38BDF8",
                    strokeWidth: 2, // Change the color of the axis line
                  },
                "& .css-175e1i1-MuiChartsAxis-root-MuiChartsYAxis-root .MuiChartsAxis-line":
                  {
                    stroke: "#38BDF8",
                    strokeWidth: 2,
                  },
                "& .css-1x2wln8-MuiChartsAxis-root-MuiChartsXAxis-root .MuiChartsAxis-tick":
                  {
                    stroke: "#38BDF8",
                  },
              }}
              xAxis={[
                {
                  data: [1, 2, 3, 5, 8, 10],
                  tickLabelStyle: { fill: "#38BDF8" },
                },
              ]}
              yAxis={[
                {
                  tickLabelStyle: { fill: "#38BDF8" },
                },
              ]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  color: "#3375ff", // Line color
                },
              ]}
              width={width}
              height={300}
            />
          </div>
          <div className="flex flex-col justify-evenly p-2 gap-2">
            <div className="flex gap-2">
              <div className="flex-[1] flex flex-col bg-[#1E293B] gap-2 rounded-xl p-2 pb-3">
                <p className="font-light">Total Balance</p>
                <p className="text-5xl">$ 5000</p>
              </div>
              <div className="flex-[1] flex flex-col bg-[#1E293B] gap-2 rounded-xl p-2 pb-3">
                <p className="font-light">Total Income</p>
                <p className="text-5xl">$ 5000</p>
              </div>
            </div>
            <div className="flex-[1] flex flex-col bg-[#1E293B] gap-2 rounded-xl p-2 pb-3">
              <p className="font-light">Total Expense</p>
              <p className="text-5xl">$ 5000</p>
            </div>
          </div>
          <div></div>
        </section>
        <section className="flex-[2] flex flex-col">
          <div className="flex flex-col">
            <p className="text-2xl m-3 ml-6">Recent History</p>
            <div className="flex flex-col gap-2 p-4 pt-0">
              <div className="flex justify-between bg-[#1E293B] items-center p-4 rounded-xl">
                <p>label</p>
                <p>amount</p>
              </div>
              <div className="flex justify-between bg-[#1E293B] items-center p-4 rounded-xl">
                <p>label</p>
                <p>amount</p>
              </div>
              <div className="flex justify-between bg-[#1E293B] items-center p-4 rounded-xl">
                <p>label</p>
                <p>amount</p>
              </div>
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
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
