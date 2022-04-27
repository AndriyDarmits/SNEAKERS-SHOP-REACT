import React, { useState } from "react";
import {
  BillingDetailsForm,
  CityAndStreetAdress,
  Country,
  CustomerName,
  EmailAndFhone,
  InputTextBillingForm,
  InputTextBillingFormPassword,
  IsCreateAccount,
  Passwords,
} from "./BillingForm.style";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { getDataFromLocalStorage } from "../../../helper";

export const BillingForm = () => {
  // get userInfo from localStorage
  const userInfo = getDataFromLocalStorage("loginData");
  // is created account
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const isCreateAccountCheckboxHendler = () => {
    setIsCreateAccount((state) => !state);
  };
  // show/hide password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const [confirmPasswordShown, setconfirmPasswordShown] = useState(false);
  const toggleConfirmPassword = () => {
    setconfirmPasswordShown(!confirmPasswordShown);
  };
  // data about customer
  const [customerData, setCustomerData] = useState({
    firstName: userInfo?.name.split(" ")[0] || "",
    lastName: userInfo?.name.split(" ")[1] || "",
    email: userInfo?.email || "",
    phone: "",
    country: "Ukraine",
    streetAddres: "",
    city: "",
  });
  // set customer data into state
  const customerBillingDataHandler = (e) => {
    setCustomerData((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };
  return (
    <BillingDetailsForm>
      <h4>Billing detail</h4>
      <CustomerName>
        <InputTextBillingForm>
          <label htmlFor="firstName" id="firstName">
            First Name <span>*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name..."
            onChange={(e) => customerBillingDataHandler(e)}
            value={customerData.firstName}
          />
        </InputTextBillingForm>
        <InputTextBillingForm>
          <label htmlFor="lastName" id="lastName">
            Last Name <span>*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name..."
            value={customerData.lastName}
            onChange={(e) => customerBillingDataHandler(e)}
          />
        </InputTextBillingForm>
      </CustomerName>

      <EmailAndFhone>
        <InputTextBillingForm>
          <label htmlFor="email" id="email">
            Email Adress <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email..."
            value={customerData.email}
            onChange={(e) => customerBillingDataHandler(e)}
          />
        </InputTextBillingForm>
        <InputTextBillingForm>
          <label htmlFor="phone" id="phone">
            Phone <span>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone..."
            value={customerData.phone}
            onChange={(e) => customerBillingDataHandler(e)}
          />
        </InputTextBillingForm>
      </EmailAndFhone>

      <Country>
        <label htmlFor="" id="country">
          Country <span>*</span>
        </label>
        <select
          name="country"
          id="country"
          value={customerData.country}
          onChange={(e) => customerBillingDataHandler(e)}
        >
          <option value="Ukraine" default>
            Ukraine
          </option>
          <option value="Poland">Poland</option>
          <option value=">Czech Republic">Czech Republic</option>
        </select>
      </Country>

      <CityAndStreetAdress>
        <InputTextBillingForm>
          <label htmlFor="streetAddres" id="streetAddres">
            Street Address <span>*</span>
          </label>
          <input
            type="text"
            id="streetAddres"
            name="streetAddres"
            placeholder="Street address..."
            value={customerData.streetAddres}
            onChange={(e) => customerBillingDataHandler(e)}
          />
        </InputTextBillingForm>
        <InputTextBillingForm>
          <label htmlFor="city" id="city">
            Town/City <span>*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City..."
            value={customerData.city}
            onChange={(e) => customerBillingDataHandler(e)}
          />
        </InputTextBillingForm>
      </CityAndStreetAdress>

      <IsCreateAccount>
        <input
          type="checkbox"
          name=""
          id="isAccount"
          checked={isCreateAccount}
          onChange={(e) => isCreateAccountCheckboxHendler()}
        />{" "}
        <label htmlFor="isAccount" id="isAccount">
          Create an account ?
        </label>
      </IsCreateAccount>
      {/* якщо ми чекаєм, що хочемо творити акк, то появиться поле з паролями  */}
      {isCreateAccount && (
        <Passwords>
          <InputTextBillingFormPassword>
            <label htmlFor="password" id="password">
              Password <span>*</span>
            </label>
            <input type={passwordShown ? "text" : "password"} id="password" />
            <div onClick={() => togglePassword()}>
              {passwordShown ? <FaEye /> : <FaEyeSlash />}
            </div>
          </InputTextBillingFormPassword>
          <InputTextBillingFormPassword>
            <label htmlFor="confirmPassword" id="confirmPassword">
              Confirm password <span>*</span>
            </label>
            <input
              type={confirmPasswordShown ? "text" : "password"}
              id="confirmPassword"
            />
            <div onClick={() => toggleConfirmPassword()}>
              {confirmPasswordShown ? <FaEye /> : <FaEyeSlash />}
            </div>
          </InputTextBillingFormPassword>
        </Passwords>
      )}
    </BillingDetailsForm>
  );
};
