import styled from "styled-components";
import { color } from "../../../GlobalStyles";

export const CheckPayment = styled.div`
  margin-bottom: 15px;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    input {
      margin-right: 10px;
    }
  }
  p {
    margin-left: 22.8px;
  }
`;
export const Paypal = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  & > * {
    margin-right: 10px;
  }

  a {
    color: #444444;
  }
`;
