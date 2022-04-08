import styled from "@emotion/styled";
import { Button } from "../../../../reusable-styles/reusableStyle";
import { device } from "../../../../GlobalStyles";

export const CountDownTimerSection = styled.section`
  background-color: #f9f9f9;
`;
export const CountDownTimerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;

  @media (${device.tablet}) {
    flex-direction: column;
    justify-content: none;
  }
`;

export const CountDownTimerImage = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #faddb5, #98d3d7);
  border-radius: 50%;
  @media (${device.tablet}) {
    width: 75%;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    transform: scale(1.2);
  }
`;

export const CountDownTimerContent = styled.div`
  width: 48%;
  @media (${device.tablet}) {
    width: 75%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: 36px;
    font-weight: 600;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 15px;

    @media (${device.laptop}) {
      font-size: 26px;
    }
    @media (${device.tablet}) {
      font-size: 18px;
    }
  }
  & > div {
    padding-left: 10px;
  }
`;
export const ProductPrice = styled.div`
  margin-bottom: 25px;
  span {
    font-size: 24px;
  }
  & > span:first-of-type {
    color: #666666;
    text-decoration: line-through;
    margin-right: 20px;
  }
  & > span:last-of-type {
    color: #983b3b;
  }
`;
export const Description = styled.div`
  color: #666666;
  line-height: 24px;
  margin-bottom: 30px;
`;
export const TimerBody = styled.div`
  display: flex;
  margin-bottom: 35px;

  & > div {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    box-shadow: 2px 0px 10px 3px rgba(0, 0, 0, 0.15);

    @media (${device.tablet}) {
      margin-right: 10px;
      width: 75px;
      height: 75px;
    }
    & > div:first-of-type {
      font-size: 44px;
      font-weight: 600;
    }
    & > div:last-of-type {
      font-size: 12px;
      color: #666666;
      text-transform: uppercase;
    }
  }
  & > div:nth-of-type(1) {
    border: 5px solid #ffb3ba;
    & > div:first-of-type {
      color: #ffb3ba;
    }
  }
  & > div:nth-of-type(2) {
    border: 5px solid #ffdfba;
    & > div:first-of-type {
      color: #ffdfba;
    }
  }
  & > div:nth-of-type(3) {
    border: 5px solid #bae1ff;
    & > div:first-of-type {
      color: #bae1ff;
    }
  }
  & > div:nth-of-type(4) {
    border: 5px solid #9dd5c0;
    margin: 0;
    & > div:first-of-type {
      color: #9dd5c0;
    }
  }
`;
export const AddToCartBtn = styled(Button)`
  button {
    background-color: #8c3717;
    color: #fff;
  }
`;
