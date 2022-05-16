import styled from "@emotion/styled";
import { Button } from "../../../reusable-styles/reusableStyle";
import { device, color } from "../../../GlobalStyles";
export const ProductItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${color.borderColorGrey};
  transition: all 0.2s ease-in;
  margin-bottom: 20px;
  padding: 30px;
  background-color: ${color.white};
  &:hover {
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.67);
    transform: scale(1.01);
  }
  @media (${device.tablet}) {
    display: block;
    padding: 15px;
  }
`;
export const ProductImageWrapper = styled.div`
  width: 300px;
  @media (${device.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    @media (${device.tablet}) {
      width: 300px;
    }
  }
`;
export const ProductContent = styled.div`
  width: 70%;
  padding-left: 20px;

  h2 {
    color: ${color.greyDark};
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 10px;
  }
  @media (${device.tablet}) {
    width: 100%;
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
    border: 1px solid ${color.borderColorGrey};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
    &:last-of-type {
      margin-right: 0;
    }
    svg {
      color: ${color.greyMedium};
    }
    &:hover {
      background-color: #8c3717;
      & > svg {
        color: ${color.white};
      }
    }
  }
`;
export const ProductPrice = styled.p`
  margin-bottom: 10px;
  color: ${color.greyMedium};
  font-size: 20px;
`;
export const Description = styled.p`
  margin-bottom: 15px;
  color: ${color.greyMedium};
  line-height: 20px;
`;

export const AddToCartBtn = styled(Button)`
  button {
    color: ${color.white};
  }
`;
