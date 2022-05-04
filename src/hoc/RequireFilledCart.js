import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RequireFilledCart = ({ children }) => {
  const { productsCart } = useSelector((state) => state);
  // if the cart is empty we will be able to go to checkout page
  if (!productsCart.length) {
    return <Navigate to="/products" />;
  }
  return children;
};
