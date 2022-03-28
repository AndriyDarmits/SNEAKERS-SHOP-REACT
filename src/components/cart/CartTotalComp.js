import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CartTotal } from "./CartComponents.style";

export default function CartTotalComp() {
  const reduxStore = useSelector((state) => state);
  const { productsCart } = reduxStore;
  const promoCodes = ["summer2022", "winter2022", "spring2022", "autumn2022"];
  const [discount, setDiscount] = useState(false);
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
          {productsCart.reduce((prev, current) => {
            return prev + current.price * current.count;
          }, 0)}
        </div>
      </div>
    </CartTotal>
  );
}
