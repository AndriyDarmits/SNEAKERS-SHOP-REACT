import styled from "styled-components";
import { color } from "../../../GlobalStyles";
import { Button } from "../../../reusable-styles/reusableStyle";

export const LoadMoreBtn = styled(Button)`
  display: flex;
  justify-content: center;
  button {
    color: ${color.white};
    padding: 15px 40px;
  }
`;
