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
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.showPopUp ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
const popUpAnim = keyframes`
0%{
  transform: scale(0) ;
}100%{
  transform: scale(1) ;
}`;

export const PopUpBody = styled.div`
  background-color: #fff;
  max-width: 350px;
  width: 100%;
  padding: 20px;
  text-align: center;
  animation: ${popUpAnim} 1s ease-in-out;
  color: #666666;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px #6666668c;
  h2 {
    margin-bottom: 20px;
    font-size: 22px;
    letter-spacing: 1px;
  }
`;
const chackIconAnim = keyframes`
0%{
  transform: scale(0) rotate(3600deg);
}100%{
  transform: scale(1) rotate(0deg);
}`;
export const SuccessIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: #666666;
    font-size: 25px;
    animation: ${chackIconAnim} 2s cubic-bezier(0.3, 0.93, 0.06, 0.96);
  }
`;
