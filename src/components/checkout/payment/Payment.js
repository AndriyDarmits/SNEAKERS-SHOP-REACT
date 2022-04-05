import React, { useState } from "react";
import { CheckPayment, Paypal } from "./Payment.style";
import paypalIcon from "../../../assets/icons/checkout/paypal.png";

export const Payment = () => {
  // Payment
  const [checkPayment, setCheckPayment] = useState(true);
  const [paypal, setPaypal] = useState(false);

  const checkPaymentHendler = () => {
    setCheckPayment((state) => !state);
    setPaypal((state) => !state);
  };

  const paypalHendler = () => {
    setPaypal((state) => !state);
    setCheckPayment((state) => !state);
  };
  return (
    <>
      <CheckPayment>
        <div>
          <input
            type="checkbox"
            name=""
            id="isAccount"
            checked={checkPayment}
            onChange={() => checkPaymentHendler()}
          />
          <label htmlFor="isAccount" id="isAccount">
            Check payment
          </label>
        </div>
        <p>
          Please send a check to Store Name, Store Street, Store Town, Store
          State / County, Store Postcode.
        </p>
      </CheckPayment>
      <Paypal>
        <input
          type="checkbox"
          name=""
          id="isAccount"
          checked={paypal}
          onChange={() => paypalHendler()}
        />
        <label htmlFor="isAccount" id="isAccount">
          Paypal
        </label>
        <img src={paypalIcon} alt="" />
        <a href="https://uk.wikipedia.org/wiki/PayPal" target="blank">
          What is Paypal ?
        </a>
      </Paypal>
    </>
  );
};
