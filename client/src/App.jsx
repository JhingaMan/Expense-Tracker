import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="bg-[#1E293B] flex h-screen w-screen gap-5">
      <div className="h-full w-full pt-4 pb-4 flex-[1]">
        <Sidebar />
      </div>
      <div className="h-full w-full flex-[4] pt-4 pb-4 pr-4">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
