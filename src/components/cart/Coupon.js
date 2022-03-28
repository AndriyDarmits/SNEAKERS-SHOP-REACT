import styled from "@emotion/styled";
import React, { useState } from "react";
import { CuponButton, CuponInput } from "./CartComponents.style";

const ValidationMessage = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  color: #fff;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
`;
export default function Cupon() {
  const [couponeValue, setCouponValue] = useState("");
  const [validationMessage, setValidationMessage] = useState(false);
  const promoCodes = ["summer2022", "winter2022", "spring2022", "autumn2022"];
  // TODO: доробити
  const applyCoupon = () => {
    if (promoCodes.includes(couponeValue.toLowerCase())) {
    } else {
      setValidationMessage(true);
      setTimeout(() => {
        setValidationMessage(false);
      }, 2000);
    }
  };
  return (
    <>
      <CuponInput>
        <input
          value={couponeValue}
          type="text"
          placeholder="Coupon Code"
          onChange={(e) => setCouponValue(e.target.value)}
        />
      </CuponInput>
      <CuponButton>
        <button onClick={() => applyCoupon()}>Apply coupon</button>
      </CuponButton>
      {validationMessage ? (
        <ValidationMessage>incorrert promocode...</ValidationMessage>
      ) : (
        ""
      )}
    </>
  );
}
