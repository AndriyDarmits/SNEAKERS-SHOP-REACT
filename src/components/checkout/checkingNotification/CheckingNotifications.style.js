import styled from "styled-components";
import { color } from "../../../GlobalStyles";

export const CheckingNotificationsDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px 30px;
  margin-bottom: 20px;
  transition: transform 0.1s ease-in;

  &:hover {
    & > div:first-of-type {
      transform: scale(1.1);
    }
  }
  & > div {
    img {
      display: block;
    }
    span:first-of-type {
      color: ${color.greyMedium};
    }
    span:last-of-type {
      transition: all 0.1s ease-in;
      color: ${color.greyDark};
      &:hover {
        text-decoration: underline;
      }
    }
  }

  & > div:first-of-type {
    margin-right: 10px;
  }
`;
