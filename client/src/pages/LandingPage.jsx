import React from "react";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import TransactionHistory from "../components/TransactionHistory";
import { Outlet, Route, Routes } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="h-full w-full pt-4 pb-4 flex-[1]">
        <Sidebar />
      </div>
      <div className="h-full w-full flex-[4] pt-4 pb-4 pr-4">
        <Outlet />
      </div>
    </>
  );
};

export default LandingPage;
