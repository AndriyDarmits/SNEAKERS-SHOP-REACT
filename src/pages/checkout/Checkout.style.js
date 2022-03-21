import styled from "@emotion/styled";
import { Input, SectionWrapper } from "../../reusable-styles/reusableStyle";

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

export const BillingDetailsForm = styled.form``;

export const CustomerName = styled.div`
  display: flex;
`;

export const InputTextBillingForm = styled(Input)`
  input {
    padding: 10px 20px;
  }
  label {
    span {
      color: red;
    }
  }
`;

export const CompanyName = styled.div``;

export const EmailAndFrom = styled.div`
  display: flex;
`;
