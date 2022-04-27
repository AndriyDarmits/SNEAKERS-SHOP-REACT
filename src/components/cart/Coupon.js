import React, { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions/index";
import {
  CuponButton,
  CuponInput,
  ValidationMessage,
} from "./CartComponents.style";

export default function Coupon({ setDiscount, setDiscountAmount }) {
  const [couponeValue, setCouponValue] = useState("");
  const [notValidateMessage, setNotValidateMessage] = useState(false);
  const dispatch = useDispatch();
  const promoCodes = ["summer2022", "winter2022", "spring2022", "autumn2022"];
  // TODO: connect to redux store
  const applyCoupon = () => {
    // if typed coupone matches promoCodes - set discount
    if (promoCodes.includes(couponeValue.toLowerCase())) {
      dispatch(actions.activateDiscount());
      setCouponValue("");
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
          placeholder="Coupon Code..."
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
