import styled from "styled-components";
import { Button, FlexContainer } from "../../../reusable-styles/reusableStyle";
import { device } from "../../../GlobalStyles";

export const InfoContainer = styled.div`
  width: 49%;
  @media (${device.laptop}) {
    width: 100%;
  }
`;
export const ProductContent = styled.div`
  h2 {
    font-size: 30px;
    color: #333333;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 600;
    @media (${device.laptop}) {
      margin-top: 20px;
    }
  }

  & > p {
    font-size: 18px;
    color: #666666;
    margin-bottom: 20px;
  }
  & > p:last-child {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

export const RaitingBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & > span {
    margin-right: 10px;
    &:last-child {
      color: #999999;
      font-size: 13px;
    }
  }
`;

export const Size = styled.div`
  & > div {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }
`;
export const SizeItem = styled.button`
  margin-right: 10px;
  display: block;
  border: 1px solid #ebebeb;
  padding: 2px 15px;
  font-size: 12px;
  border-radius: 15px;
  margin-bottom: 5px;
  transition: all 0.1s linear;
  color: #999999;
  background: ${(props) =>
    props.selected ? `1px solid #ebebeb` : `transparent`};
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
export const AbvailabilityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: #f8f8f8;
  & > div {
    color: #999999;
    & > span:first-child {
      text-transform: Uppercase;
    }
  }
`;

export const AddToCartBtn = styled(Button)`
  button {
    color: #fff;
    padding: 20px 45px;
    font-size: 14px;
  }
`;

export const FlexContainerAddToCart = styled(FlexContainer)`
  padding: 40px 0;
  border-bottom: 1px solid #ebebeb;
  align-items: center;
`;
export const WishlistAndSocialsFlexContainer = styled(FlexContainer)`
  padding: 25px 0;
  align-items: center;
  justify-content: space-between;
  color: #666666;
  a {
    color: #666666;
    transition: all 0.1s linear;
  }

  a:hover {
    transform: scale(1.2);
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 15px;
  }
`;
export const WishListIcon = styled.div`
  display: flex;
  align-items: center;
  & > div {
    color: #666666;
  }
  & > svg {
    margin-right: 10px;
  }
`;
