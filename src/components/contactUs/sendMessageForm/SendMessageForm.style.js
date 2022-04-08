import styled from "styled-components";
import {
  Button,
  Input,
  TextArea,
} from "../../../reusable-styles/reusableStyle";

export const SendMessageFormWrapper = styled.div`
  h2 {
    font-size: 24px;
    color: #333333;
    text-transform: uppercase;
    font-style: normal;
    margin-bottom: 20px;
  }
`;
export const NameAndEmail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const NameInput = styled(Input)`
  width: 49%;
  input {
    width: 100%;
    padding: 15px 20px;
  }
`;
export const EmailInput = styled(Input)`
  width: 49%;
  input {
    width: 100%;
    padding: 15px 20px;
  }
`;
export const TextAreaMessage = styled(TextArea)`
  margin-bottom: 40px;
  textarea {
    height: 180px;
  }
`;
export const SendMessageBtn = styled(Button)`
  text-align: right;
  button {
    color: #fff;
    padding: 20px 80px;
  }
`;
