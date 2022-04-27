import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CartTotal } from "./CartComponents.style";

export default function CartTotalComp({ discountAmount }) {
  const reduxStore = useSelector((state) => state);
  const { productsCart, discount } = reduxStore;

  return (
    <CartTotal>
      <h3>CART TOTAL</h3>
      <div>
        <div>DISCOUNT</div>
        <div>{discount ? "-20%" : "0%"}</div>
      </div>
      <div>
        <div>TOTAL</div>
        <div className="totalPrice">
          <span>$ </span>
          {(
            productsCart.reduce((prev, current) => {
              return prev + current.price * current.count;
            }, 0) * (discount ? 0.8 : 1)
          ).toFixed(2)}
        </div>
      </div>
    </CartTotal>
  );
}
