import styled from "@emotion/styled";
import { Button } from "../../../reusable-styles/reusableStyle";

export const ProductItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ebebeb;
  transition: all 0.2s ease-in;
  margin-bottom: 20px;
  padding: 30px;
  &:hover {
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.67);
    transform: scale(1.01);
  }
`;
export const ProductImageWrapper = styled.div`
  width: 300px;
  @media (max-width: 768px) {
  }
  img {
    width: 100%;
  }
`;
export const ProductContent = styled.div`
  width: 70%;
  padding-left: 20px;
  h2 {
    color: #333333;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;
export const ViewAndWishlistIcons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & > span {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 1px solid #ebebeb;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
    &:last-of-type {
      margin-right: 0;
    }
    svg {
      color: #666666;
    }
    &:hover {
      background-color: #8c3717;
      & > svg {
        color: #fff;
      }
    }
  }
`;
export const ProductPrice = styled.p`
  margin-bottom: 10px;
  color: #666666;
  font-size: 20px;
`;
export const Description = styled.p`
  margin-bottom: 15px;
  color: #666666;
  line-height: 20px;
`;

export const AddToCartBtn = styled(Button)`
  button {
    color: #fff;
  }
`;
