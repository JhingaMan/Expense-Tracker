import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#0F172A] h-full flex flex-col ml-4 rounded-3xl ">
      <header className="flex gap-2 p-8 border-b-1 border-[#7C7C7C]">
        <img className="rounded-full h-12" src="vite.svg" />
        <div>
          <p className="text-sm font-semibold text-[#38BDF8] mt-1">Jhon Doe</p>
          <p className="text-sm text-gray-500">Your Money</p>
        </div>
      </header>
      <section className="flex flex-col pt-4">
        <div className="text-[#FFFFFF] m-2 p-3 bg-[#1E293B] rounded-xl">
          Dashboard
        </div>
        <div className="text-[#FFFFFF] m-2 p-3 bg-[#1E293B] rounded-xl">
          Transaction History
        </div>
        <div className="text-[#FFFFFF] m-2 p-3 bg-[#1E293B] rounded-xl">
          Income
        </div>
        <div className="text-[#FFFFFF] m-2 p-3 bg-[#1E293B] rounded-xl">
          Expense
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
