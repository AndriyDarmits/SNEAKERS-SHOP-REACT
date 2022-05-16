import styled from "@emotion/styled";
import {
  Button,
  FlexContainer,
  Input,
  TextArea,
} from "../../../reusable-styles/reusableStyle";
import { device, color } from "../../../GlobalStyles";

export const Reviews = styled.div`
  border: 1px solid ${color.borderColorGrey};
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
    color: ${color.greyDark};
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
  @media (${device.tablet}) {
    display: block;
  }
`;

export const ReviewInputField = styled(TextArea)`
  width: 60%;
  @media (${device.tablet}) {
    width: 100%;
  }
  textarea {
    height: 130px;
  }
`;
export const UserNameInputField = styled.div`
  width: 36%;
  @media (${device.tablet}) {
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
    color: ${color.white};
    background-color: ${color.greyDark};
  }
`;
export const UserNameInput = styled(Input)`
  margin-bottom: 20px;
  @media (${device.tablet}) {
    margin-bottom: 10px;
  }
  input {
    padding: 10px 15px;
    width: 100%;
    color: ${color.greyLight};
    &::placeholder {
      font-size: 13px;
      color: ${color.greyLight};
    }
  }
`;
