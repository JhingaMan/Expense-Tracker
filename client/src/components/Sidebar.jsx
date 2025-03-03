import React from "react";
import { NavLink } from "react-router-dom";

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
      <nav className="flex flex-col pt-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "text-[#FFFFFF] m-2 p-3 rounded-xl " +
            (isActive ? "bg-[#1E293B]" : "")
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/transactionHistory"
          className={({ isActive }) =>
            "text-[#FFFFFF] m-2 p-3 rounded-xl " +
            (isActive ? "bg-[#1E293B]" : "")
          }
        >
          Transaction History
        </NavLink>
        <NavLink
          to="/income"
          className={({ isActive }) =>
            "text-[#FFFFFF] m-2 p-3 rounded-xl " +
            (isActive ? "bg-[#1E293B]" : "")
          }
        >
          Income
        </NavLink>
        <NavLink
          to="/expense"
          className={({ isActive }) =>
            "text-[#FFFFFF] m-2 p-3 rounded-xl " +
            (isActive ? "bg-[#1E293B]" : "")
          }
        >
          Expense
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
