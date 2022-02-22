import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "../../reusable-styles/reusableStyle";

export default function Cupon() {
  const CuponInput = styled(Input)`
    margin-right: 20px;
    input {
      color: #999999;
      padding: 20px;
      font-size: 14px;
      width: 20rem;
      &:placeholder {
        color: #999999;
        font-size: 14px;
      }
    }
  `;
  const CuponButton = styled(Button)`
    button {
      color: #fff;
      font-size: 14px;
    }
  `;

  return (
    <>
      <CuponInput>
        <input type="text" placeholder="Coupon Code" />
      </CuponInput>
      <CuponButton>
        <button>Apply coupon</button>
      </CuponButton>
    </>
  );
}
