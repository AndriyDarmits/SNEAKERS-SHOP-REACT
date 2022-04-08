import styled from "styled-components";
import { Button } from "../../../reusable-styles/reusableStyle";

// sidebar
export const SideBarWrapper = styled.div`
  margin-top: 5px;
  margin-right: -5px;
  transition: all 0.5s linear;
  width: 25%;
  padding: 10px;
`;

export const SideBar = styled.aside`
  position: sticky;
  width: 100%;
  top: 82px;
  h2 {
    font-size: 18px;
    color: #333333;
    margin-bottom: 30px;
    text-transform: uppercase;
  }
`;
export const FilterBtn = styled(Button)`
  button {
    color: #fff;
  }
`;
export const SliderWrapper = styled.div`
  margin: 0 5px;
  margin-bottom: 20px;
`;
export const LoadingMessage = styled.div`
  flex-grow: 1;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
