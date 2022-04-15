import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

export const ReqireAuth = ({ children }) => {
  const location = useLocation();
  const { userData } = useSelector((state) => state);
  if (!userData) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
