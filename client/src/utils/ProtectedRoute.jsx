import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const PortectedRoute = () => {
  const [isAuthenticated, setIsAuthenticate] = useState(null);
  const [cookies] = useCookies([]);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        setIsAuthenticate(false);
        return;
      }
      try {
        const response = await fetch("http://localhost:5000/credentials", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });
        const data = await response.json();
        setIsAuthenticate(data.status);
      } catch (error) {
        console.log("Error during verification: ", error);
        setIsAuthenticate(false);
      }
    };

    verifyUser();
  }, [cookies]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PortectedRoute
