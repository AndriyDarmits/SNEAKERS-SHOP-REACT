import React, { useState } from "react";
import { BillingDetailsForm, CityAndStreetAdress, Country, CustomerName, EmailAndFhone, InputTextBillingForm, InputTextBillingFormPassword, IsCreateAccount, Passwords } from "./BillingForm.style";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export const BillingForm = () => {

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
//shipping
const [confirmPasswordShown, setconfirmPasswordShown] = useState(false);
const toggleConfirmPassword = () => {
  setconfirmPasswordShown(!confirmPasswordShown);
};
  return (
    <BillingDetailsForm>
    <h4>Billing detail</h4>
    <CustomerName>
      <InputTextBillingForm>
        <label htmlFor="firstName" id="firstName">
          First Name <span>*</span>
        </label>
        <input type="text" id="firstName" />
      </InputTextBillingForm>
      <InputTextBillingForm>
        <label htmlFor="lastName" id="lastName">
          Last Name <span>*</span>
        </label>
        <input type="text" id="lastName" />
      </InputTextBillingForm>
    </CustomerName>

    <EmailAndFhone>
      <InputTextBillingForm>
        <label htmlFor="email" id="email">
          Email Adress <span>*</span>
        </label>
        <input type="email" id="email" />
      </InputTextBillingForm>
      <InputTextBillingForm>
        <label htmlFor="phone" id="phone">
          Phone <span>*</span>
        </label>
        <input type="tel" id="phone" />
      </InputTextBillingForm>
    </EmailAndFhone>

    <Country>
      <label htmlFor="" id="country">
        Country <span>*</span>
      </label>
      <select name="country" id="country">
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
        <input type="text" id="streetAddres" />
      </InputTextBillingForm>
      <InputTextBillingForm>
        <label htmlFor="city" id="city">
          Town/City <span>*</span>
        </label>
        <input type="text" id="city" />
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
    {/* якщо ми чекаєм, що хочемо творити акк, то пповиться поле з паролями  */}
    {isCreateAccount && (
      <Passwords>
        <InputTextBillingFormPassword>
          <label htmlFor="password" id="password">
            Password <span>*</span>
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            id="password"
          />
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
