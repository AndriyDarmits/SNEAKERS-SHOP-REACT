import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

export const RequireFilledCart = ({ children }) => {
  const { productsCart } = useSelector((state) => state);
  console.log(Boolean(productsCart));
  if (!productsCart.length) {
    return <Navigate to="/products" />;
  }
  return children;
};
