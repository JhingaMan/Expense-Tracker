import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import Dashboard from "./components/Dashboard.jsx";
import TransactionHistory from "./components/TransactionHistory.jsx";
import { GlobalProvider } from "./utils/GlobalContext.jsx";

const App = () => {
  return (
      <div className="bg-[#1E293B] flex h-screen w-screen gap-5">
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<LandingPage />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route
                path="transactionHistory"
                element={<TransactionHistory />}
              />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
  );
};

export default App;
