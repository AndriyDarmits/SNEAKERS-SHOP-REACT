import React from "react";
import { useSelector } from "react-redux";
import { CartTotal } from "./CartComponents.style";

export default function CartTotalComp() {
  const reduxStore = useSelector((state) => state);
  const { productsCart } = reduxStore;

  return (
    <CartTotal>
      <h3>CART TOTAL</h3>
      <div>
        <div>DISCOUNT</div>
        <div>-20%</div>
      </div>
      <div>
        <div>TOTAL</div>
        <div className="totalPrice">
          ${" "}
          {productsCart.reduce((prev, current) => {
            return prev + current.price * current.count;
          }, 0)}
        </div>
      </div>
    </CartTotal>
  );
}
