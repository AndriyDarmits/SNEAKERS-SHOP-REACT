import styled from "styled-components";
import { Button, SectionWrapper } from "../../reusable-styles/reusableStyle";
import { color } from "../../GlobalStyles";
export const CartWrapper = styled(SectionWrapper)`
  background-color: #f8f8f8;
`;

export const ApplyCoupon = styled.div`
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
`;
export const CheckOut = styled(Button)`
  button {
    color: ${color.white};
  }
`;
