import React, { useState } from "react";
import { Container } from "../../reusable-styles/reusableStyle";
import {
  CheckoutSecrionWrapper,
  PaymentAndSendBtn,
  PlaceOrder,
  PopUpBody,
  SuccessfullyCheckoutPopUp,
  SuccessIcons,
} from "./Checkout.style";
import { CheckingNotifications } from "../../components/checkout/checkingNotification/CheckingNotifications";
import { BillingForm } from "../../components/checkout/billingForm/BillingForm";
import { YourOrder } from "../../components/checkout/yourOrder/YourOrder";
import { Payment } from "../../components/checkout/payment/Payment";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions/index";
import { FaCheck } from "react-icons/fa";

export const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);
  const placeOrder = () => {
    setShowPopUp(true);
    setTimeout(() => {
      dispatch(actions.clearAllProductsFromCart());
      dispatch(actions.resetIsInShoppingCartProdutsProperty());
      setShowPopUp(false);
      navigate("/products", { replace: true });
    }, 3000);
  };
  return (
    <CheckoutSecrionWrapper>
      <Container>
        <>
          <CheckingNotifications />
          <BillingForm />
          <YourOrder />
          <PaymentAndSendBtn>
            <Payment />
            <PlaceOrder>
              <button type="submit" onClick={() => placeOrder()}>
                Place order
              </button>
            </PlaceOrder>
          </PaymentAndSendBtn>
          <SuccessfullyCheckoutPopUp showPopUp={showPopUp}>
            <PopUpBody showPopUp={showPopUp}>
              <h2>Your order has been successfully placed</h2>
              <SuccessIcons>
                <FaCheck />
              </SuccessIcons>
            </PopUpBody>
          </SuccessfullyCheckoutPopUp>
        </>
      </Container>
    </CheckoutSecrionWrapper>
  );
};
