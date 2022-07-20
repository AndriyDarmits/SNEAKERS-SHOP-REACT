import styled from "styled-components";
import { keyframes } from "styled-components";
import {
  Button,
  Input,
  ProductQuantity,
} from "../../reusable-styles/reusableStyle";
import { device, color } from "../../GlobalStyles";

//CartListComp
export const CartListWrapper = styled.div``;
export const CartHeader = styled.div`
  display: flex;
  background-color: ${color.greyDark};
  & > div {
    text-transform: uppercase;
    font-weight: 600;
    color: ${color.white};
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    @media (${device.tablet}) {
      font-size: 12px;
    }
  }
  & > div:nth-of-type(1) {
    width: 5.5%;
  }
  & > div:nth-of-type(2) {
    width: 11.5%;
  }
  & > div:nth-of-type(3) {
    width: 35%;
    padding-left: 10px;
  }
  & > div:nth-of-type(4) {
    width: 17%;
  }
  & > div:nth-of-type(5) {
    width: 15.5%;
  }
  & > div:nth-of-type(6) {
    flex-grow: 1;
  }
`;
export const CartList = styled.ul`
  margin-bottom: 30px;
`;

//Cart item
export const CartProductItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid ${color.borderColorGrey};
  background: ${color.white};
  width: 100%;
  padding: 15px 0;
  & > div {
    text-align: center;
  }
  & > div:nth-of-type(1) {
    width: 5.5%;
    text-align: center;
  }
  & > div:nth-of-type(2) {
    width: 11.5%;
    padding-left: 5px;
    img {
      max-width: 100px;
      width: 100%;
      height: auto;
      display: block;
    }
  }
  & > div:nth-of-type(3) {
    width: 35%;
    padding-left: 10px;
    a {
      color: ${color.greyDark};
      font-weight: 600;
      text-transform: uppercase;
      font-size: 14px;
      @media (${device.tablet}) {
        font-size: 13px;
      }
      @media (${device.mobile}) {
        font-size: 12px;
      }
    }
  }
  & > div:nth-of-type(4) {
    width: 17%;
  }
  & > div:nth-of-type(5) {
    width: 15.5%;
    padding-right: 10px;
  }
  & > div:nth-of-type(6) {
    flex-grow: 1;
  }
`;

export const ProductQuantityCart = styled(ProductQuantity)`
  border: 1px solid ${color.borderColorGrey};
  width: 100%;
  & > div:last-child {
    border-left: 1px solid ${color.borderColorGrey};
    & > div:last-child {
      border-top: 1px solid ${color.borderColorGrey};
    }
  }
`;

//cart total
export const CartTotal = styled.div`
  margin-bottom: 30px;
  h3 {
    color: ${color.greyDark};
    font-size: 20px;
    margin-bottom: 15px;
  }
  & > div {
    padding: 40px;
    display: flex;
    border: 1px solid ${color.borderColorGrey};
    background-color: ${color.white};
    @media (${device.tablet}) {
      padding: 20px;
    }
    .totalPrice {
      font-size: 24px;
      color: ${color.greyDark};
    }

    & > div {
      width: 50%;
      color: ${color.greyMedium};
      text-transform: uppercase;
      font-weight: 600;
    }
  }
`;

//Coupon
export const CouponWrapper = styled.div`
  margin-bottom: 50px;
`;
export const CouponForm = styled.form`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;
export const CuponInput = styled(Input)`
  margin-right: 20px;
  width: 50%;
  input {
    color: ${color.greyLight};
    padding: 20px;
    font-size: 14px;
    width: 100%;
    @media (${device.tablet}) {
      padding: 15px;
    }
    &:placeholder {
      color: ${color.greyLight};
      font-size: 14px;
    }
  }
`;
export const CuponButton = styled(Button)`
  button {
    color: ${color.white};
    font-size: 14px;
    @media (${device.tablet}) {
      padding: 12.5px 15px;
    }
  }
`;
const fade_in = keyframes`
0% {
  right:-100%;
}10%{
  right:0%;
}90%{
  right:0%;
}100%{
  right:-100%;
}`;

export const ValidationMessage = styled.div`
  position: absolute;
  right: 5px;
  color: ${color.white};
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  animation: ${fade_in} 2s ease-in-out;
`;
