// src/admin/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { getUserDetails } from "./utils/localStorageKeys";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = getUserDetails();

  if (!isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;
