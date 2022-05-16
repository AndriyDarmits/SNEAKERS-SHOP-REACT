import styled from "styled-components";
import { color } from "../../../GlobalStyles";

export const Order = styled.div`
  margin-bottom: 50px;
  h4 {
    font-size: 20px;
    text-transform: uppercase;
    color: ${color.greyDark};
    margin-bottom: 20px;
  }

  & > div {
    display: flex;
    border-bottom: 1px solid ${color.borderColorGrey};
    border-left: 1px solid ${color.borderColorGrey};
    border-right: 1px solid ${color.borderColorGrey};
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
  background-color: ${color.greyDark};
  padding: 15px 0 !important;
  border: 0 !important;
  & > div {
    color: ${color.white};
    font-size: 14px;
    text-transform: uppercase;
  }
`;

export const OrderList = styled.div`
  font-size: 18px;

  & > div:first-of-type {
    color: ${color.greyDark};
    font-weight: 600;
  }
  & > div:last-of-type {
    color: ${color.greyMedium};
    font-weight: 600;
  }
`;
export const Subtotal = styled.div`
  font-size: 16px;
  & > div {
    color: ${color.greyMedium};
    font-weight: 600;
  }
`;
export const Shipping = styled.div`
  font-size: 16px;
  & > div {
    color: ${color.greyMedium};
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
    color: ${color.greyMedium};
    font-weight: 600;
    font-size: 16px;
  }

  & > div:last-of-type {
    font-size: 24px;
    color: #8c3717;
  }
`;
