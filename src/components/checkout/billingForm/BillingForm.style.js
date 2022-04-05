import styled from "styled-components";
import { Input, SectionWrapper } from "../../../reusable-styles/reusableStyle";



// form block
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
// input pattern
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
// first and last name
export const CustomerName = styled.div`
  display: flex;
  margin-bottom: 15px;
  @media (max-width: 375px) {
    display: block;
  }
`;

// email and phone
export const EmailAndFhone = styled.div`
  display: flex;
  margin-bottom: 15px;
  @media (max-width: 375px) {
    display: block;
  }
`;
// country selection
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
// city and address
export const CityAndStreetAdress = styled.div`
  display: flex;
  margin-bottom: 15px;
  @media (max-width: 375px) {
    display: block;
  }
`;

// create account checkbox
export const IsCreateAccount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  input {
    margin-right: 15px;
  }
  label {
    font-size: 14px;
    color: #666666;
  }
`;

export const Passwords = styled.div`
  display: flex;
  margin-bottom: 15px;
  @media (max-width: 375px) {
    display: block;
  }
`;

// password input
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