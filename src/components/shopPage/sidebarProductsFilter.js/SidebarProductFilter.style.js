import styled from "styled-components";
import { Button } from "../../../reusable-styles/reusableStyle";
import { device } from "../../../GlobalStyles";
// sidebar
export const SideBarWrapper = styled.div`
  transition: all 0.2s linear;
  width: 25%;
  padding: 10px;
  @media (${device.tablet}) {
    position: fixed;
    width: 100%;
    height: 100%;
    left: ${(props) => (props.showSidebar ? "0%" : "-110%")};
    top: 0;
    z-index: 100;
    background-color: #fff;
  }
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
    cursor: pointer;
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
