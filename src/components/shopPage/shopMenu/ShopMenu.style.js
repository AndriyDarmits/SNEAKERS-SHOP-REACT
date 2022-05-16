import styled from "styled-components";
import { color } from "../../../GlobalStyles";

export const ShopMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
`;
export const SideBarIcon = styled.div`
  cursor: pointer;
  svg {
    font-size: 16px;
    color: ${color.greyDark};
  }
`;
export const ShowRangeProducts = styled.div`
  color: ${color.greyMedium};
`;
export const View = styled.div`
  display: flex;
  & > div {
    margin-right: 5px;
    cursor: pointer;
    svg {
      font-size: 16px;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
