import styled from "styled-components";
import { device } from "../../../GlobalStyles";

export const CategoriesList = styled.div`
  display: flex;
`;
export const CatagoryName = styled.div`
  padding: 30px 0;
  margin-right: 20px;
  @media (${device.tablet}) {
    margin-right: 10px;
  }
  &:last-of-type {
    margin-right: 0;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    font-size: 18px;
    font-weight: 500;
  }
`;
