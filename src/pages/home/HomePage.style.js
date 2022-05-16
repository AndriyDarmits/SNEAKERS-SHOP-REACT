import styled from "styled-components";
import { color } from "../../GlobalStyles";

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 300px;
    height: 300px;
    background-color: ${color.white};
  }
`;
