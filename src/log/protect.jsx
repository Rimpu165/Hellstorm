import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
    console.log("isAuthenticated",isAuthenticated);
    
  if (!isAuthenticated) {
    return <Navigate to="/Login" replace />;
  }

  return children;
};

export default ProtectedRoute;