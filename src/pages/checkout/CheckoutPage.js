import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../reusable-styles/reusableStyle";
import pageIcon from "../../assets/icons/checkout/page.png";
import paypalIcon from "../../assets/icons/checkout/paypal.png";
import {
  BillingDetailsForm,
  CheckingNotifications,
  CheckoutSecrionWrapper,
  CheckPayment,
  CityAndStreetAdress,
  Country,
  CustomerName,
  EmailAndFhone,
  InputTextBillingForm,
  InputTextBillingFormPassword,
  IsCreateAccount,
  Order,
  OrderHeader,
  OrderList,
  Passwords,
  Payment,
  Paypal,
  PlaceOrder,
  Shipping,
  Subtotal,
  Total,
} from "./Checkout.style";

import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const flatRate = 4;
  // get data from redux store
  const reduxStore = useSelector((state) => state);
  const { productsCart } = reduxStore;
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
  const [isFlatRate, setFlatRate] = useState(true);
  const [isFreeShipping, setFreeShipping] = useState(false);

  const flatRateHendler = () => {
    setFlatRate((state) => !state);
    setFreeShipping((state) => !state);
  };

  const freeShippingHendler = () => {
    setFreeShipping((state) => !state);
    setFlatRate((state) => !state);
  };
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
  //TODO: break down into components
  return (
    <CheckoutSecrionWrapper>
      <Container>
        <CheckingNotifications>
          <div>
            <img src={pageIcon} alt="" />
          </div>
          <div>
            <span>Returning customer ?</span>{" "}
            <span onClick={() => navigate("/login")}>Click here to login</span>
          </div>
        </CheckingNotifications>
        <CheckingNotifications>
          <div>
            <img src={pageIcon} alt="" />
          </div>
          <div>
            <span>Have a coupon ?</span>{" "}
            <span onClick={() => navigate(-1)}>
              Click here to enter your code
            </span>
          </div>
        </CheckingNotifications>
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
        {/* =========order================== */}
        <Order>
          <h4>Your order</h4>
          <OrderHeader>
            <div>Product</div>
            <div>Total</div>
          </OrderHeader>
          {productsCart.map((product) => {
            return (
              <OrderList key={product.id}>
                <div>{product.title}</div>
                <div>$ {product.price * product.count}</div>
              </OrderList>
            );
          })}
          <Subtotal>
            <div>Subtotal</div>

            <div>
              <span>$ </span>
              {productsCart.reduce((prev, current) => {
                return prev + current.price * current.count;
              }, 0)}
            </div>
          </Subtotal>

          <Shipping>
            {/* TODO: стейти і вивід остаточної суми включаючи доставку */}
            <div>Shipping</div>
            <div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={isFlatRate}
                  onChange={() => flatRateHendler()}
                />{" "}
                <label htmlFor="">Flat rate : $ {flatRate.toFixed(2)}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={isFreeShipping}
                  onChange={() => freeShippingHendler()}
                />{" "}
                <label htmlFor="">Free shipping</label>
              </div>
            </div>
          </Shipping>
          <Total>
            <div>Total</div>
            <div>${/*суми включаючи доставкц*/}</div>
          </Total>
        </Order>
        <Payment>
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
            <img src={paypalIcon} alt="" />{" "}
            <a href="https://uk.wikipedia.org/wiki/PayPal" target="blank">
              What is Paypal ?
            </a>
          </Paypal>
          <PlaceOrder>
            <button type="submit">Place order</button>
          </PlaceOrder>
        </Payment>
      </Container>
    </CheckoutSecrionWrapper>
  );
};
