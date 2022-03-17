import styled from "@emotion/styled";
import { Button } from "../../reusable-styles/reusableStyle";

export const WishItem = styled.div`
  display: flex;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;
  align-items: center;
  padding: 5px 10px;
  border-radius: 3px;
  &:hover {
    box-shadow: 0px 0px 10px 1px rgba(51, 51, 51, 0.67);
    transform: scale(1.01);
  }
  & > div:nth-of-type(1) {
    display: flex;

    width: 15%;
    padding-left: 5%;
    font-size: 22px;
    cursor: pointer;
  }
  & > div:nth-of-type(2) {
    width: 25%;
    img {
      max-width: 80%;
      max-height: 150px;
      height: 100%;
    }
  }
  & > div:nth-of-type(3) {
    border-bottom: 1px solid transparent;
    transition: all 0.1s linear;
    width: 25%;
    text-align: center;
    &:hover {
      border-bottom: 1px solid #333333;
    }
    a {
      text-transform: uppercase;
      color: #333333;
      font-weight: 600;
      font-size: 16px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
`;

export const AddToCartBtn = styled(Button)`
  flex-grow: 1;
  text-align: center;
  button {
    color: #fff;
    @media (max-width: 768px) {
      padding: 10px 20px;
    }
  }
`;
