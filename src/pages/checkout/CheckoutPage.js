import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../reusable-styles/reusableStyle";
import pageIcon from "../../assets/icons/checkout/page.png";
import {
  BillingDetailsForm,
  CheckingNotifications,
  CheckoutSecrionWrapper,
  CompanyName,
  CustomerName,
  EmailAndFrom,
  InputTextBillingForm,
} from "./Checkout.style";

export const CheckoutPage = () => {
  const navigate = useNavigate();
  return (
    <CheckoutSecrionWrapper>
      <Container>
        <CheckingNotifications>
          <div>
            <img src={pageIcon} alt="" />
          </div>
          <div>
            <span>Returning customer?</span>{" "}
            <span onClick={() => navigate("login")}>Click here to login</span>
          </div>
        </CheckingNotifications>
        <CheckingNotifications>
          <div>
            <img src={pageIcon} alt="" />
          </div>
          <div>
            <span>Have a coupon?</span>{" "}
            <span onClick={() => navigate("login")}>
              Click here to enter your code
            </span>
          </div>
        </CheckingNotifications>
        <BillingDetailsForm>
          <h4>Billing detail</h4>
          <CustomerName>
            <InputTextBillingForm>
              <label htmlFor="">
                First Name <span>*</span>
              </label>
              <input type="text" />
            </InputTextBillingForm>
            <InputTextBillingForm>
              <label htmlFor="">
                Last Name <span>*</span>
              </label>
              <input type="text" />
            </InputTextBillingForm>
          </CustomerName>
        </BillingDetailsForm>
        <CompanyName>
          <InputTextBillingForm>
            <label htmlFor="">
              Last Name <span>*</span>
            </label>
            <input type="text" />
          </InputTextBillingForm>
        </CompanyName>
        <EmailAndFrom>
          <InputTextBillingForm>
            <label htmlFor="">
              Last Name <span>*</span>
            </label>
            <input type="text" />
          </InputTextBillingForm>
          <InputTextBillingForm>
            <label htmlFor="">
              Last Name <span>*</span>
            </label>
            <input type="text" />
          </InputTextBillingForm>
        </EmailAndFrom>
        <select name="select">
          <option value="value1">Значение 1</option>
          <option value="value2">Значение 2</option>
          <option value="value3">Значение 3</option>
        </select>
      </Container>
    </CheckoutSecrionWrapper>
  );
};
