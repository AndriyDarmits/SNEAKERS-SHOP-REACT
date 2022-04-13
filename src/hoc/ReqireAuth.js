import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

export const ReqireAuth = ({ children }) => {
  const location = useLocation();
  const [auth] = useState(false);
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
