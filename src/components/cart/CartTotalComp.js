import React from "react";
import styled from "styled-components";

const CartTotal = styled.div`
  margin-bottom: 30px;
  h3 {
    color: #333;
    font-size: 20px;
    margin-bottom: 15px;
  }
  & > div {
    padding: 40px;
    display: flex;
    border: 1px solid #ebebeb;
    background-color: #fff;
    .totalPrice {
      font-size: 24px;
      color: #333333;
    }

    & > div {
      width: 50%;
      color: #666666;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
`;
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
