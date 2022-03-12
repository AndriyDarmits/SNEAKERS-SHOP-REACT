import React, { useState } from "react";
import { CuponButton, CuponInput } from "./CartComponents.style";

export default function Cupon() {
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
