import styled from "@emotion/styled";
import {
  Button,
  Input,
  SectionWrapper,
} from "../../reusable-styles/reusableStyle";

export const CheckoutSecrionWrapper = styled(SectionWrapper)`
  margin-bottom: 40px;
`;

export const CheckingNotifications = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px 30px;
  margin-bottom: 20px;
  transition: transform 0.1s ease-in;

  &:hover {
    & > div:first-of-type {
      transform: scale(1.1);
    }
  }
  & > div {
    img {
      display: block;
    }
    span:first-of-type {
      color: #666666;
    }
    span:last-of-type {
      transition: all 0.1s ease-in;
      color: #333333;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  & > div:first-of-type {
    margin-right: 10px;
  }
`;

export const BillingDetailsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  @media (max-width: 768px) {
    width: 100%;
  }
  h4 {
    font-size: 18px;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 20px;
  }
`;

export const CustomerName = styled.div`
  display: flex;
  margin-bottom: 15px;
  @media (max-width: 375px) {
    display: block;
  }
`;

export const InputTextBillingForm = styled(Input)`
  width: 100%;

  &:first-of-type {
    margin-right: 20px;

    @media (max-width: 375px) {
      margin-right: 0;
    }
  }
  input {
    padding: 10px 20px;
    width: 100%;
  }
  label {
    display: block;
    margin-bottom: 5px;
    color: #666666;
    span {
      color: red;
    }
  }
`;

export const EmailAndFrom = styled.div`
  display: flex;
  margin-bottom: 15px;
  @media (max-width: 375px) {
    display: block;
  }
`;
export const Country = styled.div`
  margin-bottom: 20px;
  width: 100%;
  label {
    display: block;
    margin-bottom: 5px;
    color: #666666;
  }
  // змінити шрифт
  select {
    border: 1px solid #ebebeb;
    outline: none;
    color: #999999;
    width: 100%;
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const CityAndStreetAdress = styled.div`
  display: flex;
  margin-bottom: 15px;
  @media (max-width: 375px) {
    display: block;
  }
`;
export const IsCreateAccount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Passwords = styled.div`
  display: flex;
  margin-bottom: 15px;
  @media (max-width: 375px) {
    display: block;
  }
`;

export const InputTextBillingFormPassword = styled(InputTextBillingForm)`
  position: relative;
  input {
    padding-right: 30px;
  }
  div {
    position: absolute;
    bottom: 6px;
    right: 12px;
    svg {
      font-size: 18px;
      color: #999999;
    }
  }
`;

export const Order = styled.div`
  margin-bottom: 50px;
  h4 {
    font-size: 20px;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 20px;
  }

  & > div {
    display: flex;
    border-bottom: 1px solid #ebebeb;
    border-left: 1px solid #ebebeb;
    border-right: 1px solid #ebebeb;
    text-transform: uppercase;
    padding: 30px 0;

    & > div:first-of-type {
      padding-left: 30px;
      width: 60%;
    }
    & > div:last-of-type {
      padding-left: 30px;
      width: 60%;
    }
  }
`;
export const OrderHeader = styled.div`
  background-color: #333333;
  padding: 15px 0 !important;
  border: 0 !important;
  & > div {
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

export const OrderList = styled.div`
  font-size: 18px;

  & > div:first-of-type {
    color: #333333;
    font-weight: 600;
  }
  & > div:last-of-type {
    color: #666666;
    font-weight: 600;
  }
`;
export const Subtotal = styled.div`
  font-size: 16px;
  & > div {
    color: #666666;
    font-weight: 600;
  }
`;
export const Shipping = styled.div`
  font-size: 16px;
  & > div {
    color: #666666;
    font-weight: 600;
  }
  & > div:last-of-type {
    & > div {
      padding: 5px 0px;
      display: flex;
      align-items: center;
      input[type="checkbox"] {
        margin-right: 10px;
      }
    }
  }
`;

export const Total = styled.div`
  & > div {
    color: #666666;
    font-weight: 600;
    font-size: 16px;
  }

  & > div:last-of-type {
    font-size: 24px;
    color: #8c3717;
  }
`;

export const Payment = styled.div`
  padding: 20px 30px;
  background-color: #f8f8f8;
`;
export const CheckPayment = styled.div`
  margin-bottom: 15px;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    input {
      margin-right: 10px;
    }
  }
  p {
    margin-left: 22.8px;
  }
`;
export const Paypal = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  & > * {
    margin-right: 10px;
  }
`;
export const PlaceOrder = styled(Button)`
  button {
    color: #fff;
  }
`;
