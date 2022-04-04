import React, { useState } from "react";
import {
  CuponButton,
  CuponInput,
  ValidationMessage,
} from "./CartComponents.style";

export default function Coupon({ setDiscount, setDiscountAmount }) {
  const [couponeValue, setCouponValue] = useState("");
  const [notValidateMessage, setNotValidateMessage] = useState(false);
  const promoCodes = ["summer2022", "winter2022", "spring2022", "autumn2022"];
  // TODO: connect to redux store
  const applyCoupon = () => {
    if (promoCodes.includes(couponeValue.toLowerCase())) {
      setDiscountAmount(1.2);
      setDiscount(true);
      setCouponValue("");
      console.log("dksvmsdkmkS");
    } else {
      setNotValidateMessage(true);
      setCouponValue("");
      setTimeout(() => {
        setNotValidateMessage(false);
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
      {notValidateMessage ? (
        <ValidationMessage>incorrert promocode...</ValidationMessage>
      ) : (
        ""
      )}
    </>
  );
}
