import React, { useState } from "react";
import { Container } from "../../reusable-styles/reusableStyle";
import {
  CheckoutSecrionWrapper,
  PaymentAndSendBtn,
  PlaceOrder,
} from "./Checkout.style";
import { CheckingNotifications } from "../../components/checkout/checkingNotification/CheckingNotifications";
import { BillingForm } from "../../components/checkout/billingForm/BillingForm";
import { YourOrder } from "../../components/checkout/yourOrder/YourOrder";
import { Payment } from "../../components/checkout/payment/Payment";

export const CheckoutPage = () => {
  
  //TODO: break down into components
  return (
    <CheckoutSecrionWrapper>
      <Container>
        <CheckingNotifications />
        <BillingForm />
        <YourOrder />
        <PaymentAndSendBtn>
          <Payment />
          <PlaceOrder>
            <button type="submit">Place order</button>
          </PlaceOrder>
        </PaymentAndSendBtn>
      </Container>
    </CheckoutSecrionWrapper>
  );
};
