import styled from "@emotion/styled";
import {
  Button,
  FlexContainer,
  Input,
} from "../../../reusable-styles/reusableStyle";

export const Reviews = styled.div`
  border: 1px solid #ebebeb;
  border-top: 0;
  padding: 25px 65px;
  @media (max-width: 768px) {
    padding: 15px 35px;
  }
`;
export const NoReviewMessage = styled.div`
  font-weight: 600;
  margin-bottom: 25px;
  & > p {
    color: #333333;
    margin-bottom: 5px;
    span {
      font-size: 16px;
    }
    &:nth-child(3) {
      color: #a7a7a7;
      font-size: 12px;
      margin-bottom: 0;
    }
  }
`;
export const FlexContainerReviews = styled(FlexContainer)`
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ReviewInputField = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
  textarea {
    width: 100%;
    resize: none;
    outline: none;
    border: 1px solid #ebebeb;
    height: 130px;
    padding: 15px 25px;
    color: #a7a7a7;
    font-size: 14px;
    &::placeholder {
      color: #a7a7a7;
      font-size: 14px;
    }
  }
`;
export const UserNameInputField = styled.div`
  width: 36%;
  @media (max-width: 768px) {
    width: 60%;
    margin-bottom: 10px;
  }
  // rating styling
  & > span {
    margin-bottom: 15px;
  }
`;
export const ReviewSubmitButton = styled(Button)`
  button {
    color: #fff;
    background-color: #333333;
  }
`;
export const UserNameInput = styled(Input)`
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
  input {
    padding: 10px 15px;
    width: 100%;
    color: #999999;
    &::placeholder {
      font-size: 13px;
      color: #999999;
    }
  }
`;
