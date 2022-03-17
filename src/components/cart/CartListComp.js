import React, { useState } from "react";
import CartItem from "./CartItem";
import { CartHeader, CartList, CartListWrapper } from "./CartComponents.style";
import { useSelector } from "react-redux";

export const CartListComp = () => {
  const reduxStore = useSelector((state) => state);
  const { productsCart } = reduxStore;
  console.log(productsCart);
  return (
    <CartListWrapper>
      <CartHeader>
        <div></div>
        <div>Product</div>
        <div>Name</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </CartHeader>
      <CartList>
        {productsCart.map((product) => (
          <CartItem product={product} />
        ))}
      </CartList>
    </CartListWrapper>
  );
};
