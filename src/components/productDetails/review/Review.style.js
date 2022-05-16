import styled from "styled-components";
import { color } from "../../../GlobalStyles";

export const ReviewsBlock = styled.div`
  border-bottom: 1px solid ${color.borderColorGrey};
  padding: 5px 0;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
      color: ${color.greyDark};
    }
  }
  p {
    padding-left: 10px;
    line-height: 18px;
    text-indent: 30px;
    color: ${color.greyLight};
  }
`;
