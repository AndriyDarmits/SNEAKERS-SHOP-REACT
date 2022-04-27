import styled from "styled-components";
import { keyframes } from "styled-components";
import { Button, SectionWrapper } from "../../reusable-styles/reusableStyle";

export const CheckoutSecrionWrapper = styled(SectionWrapper)`
  margin-bottom: 40px;
`;

export const PaymentAndSendBtn = styled.div`
  padding: 20px 30px;
  background-color: #f8f8f8;
  color: #666666;
`;
export const PlaceOrder = styled(Button)`
  button {
    color: #fff;
  }
`;
export const SuccessfullyCheckoutPopUp = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.showPopUp ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
const popUpAnim = keyframes`
0%{
  transform: scale(0);
}100%{
  transform: scale(1);
}`;

export const PopUpBody = styled.div`
  background-color: #fff;
  max-width: 350px;
  width: 100%;
  padding: 20px;
  text-align: center;
  animation: ${popUpAnim} 1s ease-in-out;
  h2 {
    margin-bottom: 20px;
  }
`;

export const SuccessIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 25px;
  }
`;
