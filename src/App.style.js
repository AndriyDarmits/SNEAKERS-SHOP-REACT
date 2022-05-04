import styled from "styled-components";

export const ScrollUpBtn = styled.div`
  position: fixed;
  bottom: 30px;
  right: 40px;
  width: 50px;
  height: 50px;
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  svg {
    color: #fff;
  }
`;
