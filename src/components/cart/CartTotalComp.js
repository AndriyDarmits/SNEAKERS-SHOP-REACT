import React from "react";
import { CartTotal } from "./CartComponents.style";

export default function CartTotalComp() {
  return (
    <CartTotal>
      <h3>CART TOTAL</h3>
      <div>
        <div>DISCOUNT</div>
        <div>$ 130.00</div>
      </div>
      <div>
        <div>TOTAL</div>
        <div className="totalPrice">$ 130.00</div>
      </div>
    </CartTotal>
  );
}
