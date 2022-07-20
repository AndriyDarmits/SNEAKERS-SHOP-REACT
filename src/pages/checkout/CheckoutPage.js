import { useFormik } from "formik";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { BillingForm } from "../../components/checkout/billingForm/BillingForm";
import { CheckingNotifications } from "../../components/checkout/checkingNotification/CheckingNotifications";
import { Payment } from "../../components/checkout/payment/Payment";
import { YourOrder } from "../../components/checkout/yourOrder/YourOrder";
import { getDataFromLocalStorage } from "../../helper";
import actions from "../../redux/actions/index";
import { Container } from "../../reusable-styles/reusableStyle";
import {
  CheckoutForm,
  CheckoutSecrionWrapper,
  PaymentAndSendBtn,
  PlaceOrder,
  PopUpBody,
  SuccessfullyCheckoutPopUp,
  SuccessIcons,
} from "./Checkout.style";
const billingValidation = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().required().email(),
  phone: Yup.string()
    .required()
    .matches(
      /^\+\d{3,3}\(\d{2,2}\)\d{3,3}-\d{2,2}-\d{2,2}$/,
      "phone nubmer should be like +380(xx)xxx-xx-xx"
    ),
  country: Yup.string().required(),
  streetAddres: Yup.string().required(),
  city: Yup.string().required(),
  password: Yup.string(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Your passwords do not match."
  ),
});
export const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // get userInfo from localStorage
  const userInfo = getDataFromLocalStorage("loginData");
  const [showPopUp, setShowPopUp] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: userInfo?.name.split(" ")[0] || "",
      lastName: userInfo?.name.split(" ")[1] || "",
      email: userInfo?.email || "",
      phone: "",
      country: "",
      streetAddres: "",
      city: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: billingValidation,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setShowPopUp(true);
      dispatch(actions.setResetBodyOverflow());
      setTimeout(() => {
        dispatch(actions.clearAllProductsFromCart());
        dispatch(actions.resetIsInShoppingCartProdutsProperty());
        setShowPopUp(false);
        navigate("/products", { replace: true });
        dispatch(actions.setResetBodyOverflow());
      }, 5000);
    },
  });

  return (
    <CheckoutSecrionWrapper>
      <Container>
        <CheckoutForm onSubmit={formik.handleSubmit}>
          <CheckingNotifications />
          <BillingForm formik={formik} />
          <YourOrder />
          <PaymentAndSendBtn>
            <Payment />
            <PlaceOrder>
              <button type="submit">Place order</button>
            </PlaceOrder>
          </PaymentAndSendBtn>
          {/* popUp */}
          <SuccessfullyCheckoutPopUp showPopUp={showPopUp}>
            <PopUpBody showPopUp={showPopUp}>
              <h2>Your order has been successfully placed={")"}</h2>
              <SuccessIcons>
                <FaCheck />
              </SuccessIcons>
            </PopUpBody>
          </SuccessfullyCheckoutPopUp>
        </CheckoutForm>
      </Container>
    </CheckoutSecrionWrapper>
  );
};
