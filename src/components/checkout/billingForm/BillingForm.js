import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ErrorMessage } from "../../../reusable-styles/reusableStyle";
import {
  BillingDetails,
  CityAndStreetAdress,
  Country,
  CustomerName,
  EmailAndFhone,
  InputTextBillingForm,
  InputTextBillingFormPassword,
  IsCreateAccount,
  Passwords,
} from "./BillingForm.style";

export const BillingForm = ({ formik }) => {
  // is created account
  const [isCreateAccount, setIsCreateAccount] = useState(true);
  const isCreateAccountCheckboxHendler = () => {
    setIsCreateAccount((state) => !state);
  };
  // show/hide password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const [confirmPasswordShown, setconfirmPasswordShown] = useState(false);
  const toggleConfirmPassword = (e) => {
    setconfirmPasswordShown(!confirmPasswordShown);
  };
  const errorMessageHandler = (type) => {
    return formik.errors[type] && formik.touched[type] ? (
      <ErrorMessage>{formik.errors[type]}</ErrorMessage>
    ) : null;
  };

  return (
    <BillingDetails>
      <h4>Billing detail</h4>
      <CustomerName>
        <InputTextBillingForm>
          <label htmlFor="firstName">
            First Name <span>*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name..."
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {errorMessageHandler("firstName")}
        </InputTextBillingForm>
        <InputTextBillingForm>
          <label htmlFor="lastName">
            Last Name <span>*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name..."
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {errorMessageHandler("lastName")}
        </InputTextBillingForm>
      </CustomerName>

      <EmailAndFhone>
        <InputTextBillingForm>
          <label htmlFor="email">
            Email Adress <span>*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email..."
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {errorMessageHandler("email")}
        </InputTextBillingForm>
        <InputTextBillingForm>
          <label htmlFor="phone">
            Phone <span>*</span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone..."
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {errorMessageHandler("phone")}
        </InputTextBillingForm>
      </EmailAndFhone>

      <Country>
        <label htmlFor="country">
          Country <span>*</span>
        </label>
        <select
          name="country"
          id="country"
          onChange={formik.handleChange}
          value={formik.values.country}
        >
          <option value="Ukraine">Ukraine</option>
          <option value="Poland">Poland</option>
          <option value=">Czech Republic">Czech Republic</option>
        </select>
      </Country>
      {errorMessageHandler("country")}

      <CityAndStreetAdress>
        <InputTextBillingForm>
          <label htmlFor="streetAddres">
            Street Address <span>*</span>
          </label>
          <input
            type="text"
            id="streetAddres"
            name="streetAddres"
            placeholder="Street address..."
            onChange={formik.handleChange}
            value={formik.values.streetAddres}
          />
          {errorMessageHandler("streetAddres")}
        </InputTextBillingForm>
        <InputTextBillingForm>
          <label htmlFor="city">
            Town/City <span>*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City..."
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          {errorMessageHandler("city")}
        </InputTextBillingForm>
      </CityAndStreetAdress>

      <IsCreateAccount>
        <input
          type="checkbox"
          name=""
          id="isAccount"
          checked={isCreateAccount}
          onChange={(e) => isCreateAccountCheckboxHendler()}
        />
        <label htmlFor="isAccount">Create an account ?</label>
      </IsCreateAccount>
      {/* якщо ми чекаєм, що хочемо творити акк, то появиться поле з паролями  */}
      {isCreateAccount && (
        <Passwords>
          <InputTextBillingFormPassword>
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <input
              type={passwordShown ? "text" : "password"}
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {errorMessageHandler("password")}
            <div onClick={() => togglePassword()}>
              {passwordShown ? <FaEye /> : <FaEyeSlash />}
            </div>
          </InputTextBillingFormPassword>
          <InputTextBillingFormPassword>
            <label htmlFor="confirmPassword">
              Confirm password <span>*</span>
            </label>
            <input
              type={confirmPasswordShown ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />

            <div onClick={() => toggleConfirmPassword()}>
              {confirmPasswordShown ? <FaEye /> : <FaEyeSlash />}
            </div>
          </InputTextBillingFormPassword>
        </Passwords>
      )}
      {errorMessageHandler("confirmPassword")}
    </BillingDetails>
  );
};
