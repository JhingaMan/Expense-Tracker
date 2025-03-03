import React, { useReducer } from "react";
import { useState, useEffect, useRef } from "react";
import LineChartComp from "./LineChart";
import { useGlobalContext } from "../utils/GlobalContext";

const Dashboard = () => {
  const chartRef = useRef(null);
  const [width, setWidth] = useState(500);
  const [transactionLoaded, setTransactionLoaded] = useState();

  const { all_transactions, income, expense, balance, loadTransactionData } =
    useGlobalContext();

  useEffect(() => {
    loadTransactionData();
  }, []);
  
  useEffect(() => {
    const updateWidth = () => {
      if (chartRef.current) {
        setWidth(chartRef.current.offsetWidth);
        // loadTransactionData();
        console.log("hahahah");
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const sortedTransactions_income = [...all_transactions].sort((a, b) => {
    new Date(a) - new Date(b);
  });

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
          <LineChartComp width={width} />
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
          <div className="pt-6"></div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
