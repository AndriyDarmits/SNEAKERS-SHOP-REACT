import styled from "styled-components";
import { device } from "../../GlobalStyles";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 82px;
  background-color: #fff;
`;
export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 30px;
  line-height: 18px;
  font-weight: 500;
  a {
    color: #000;
  }
`;
export const Navigation = styled.nav`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  .naLink {
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    a {
      display: block;
      color: #333333;
    }

    @media (${device.tablet}) {
      display: block;
      width: 100%;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 15px;
        border-bottom: 3px solid transparent;
        transition: all 0.2s linear;
        font-size: 18px;
        &:hover {
          border-bottom: 3px solid #333333;
        }
      }
    }
  }

  .navButton {
    width: 25%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    a {
      display: block;
      color: #444444;
      svg {
        display: block;
        font-size: 18px;
      }
      img {
        display: block;
      }
    }

    @media (${device.tablet}) {
      display: block;
      width: 100%;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 15px;
        border-bottom: 3px solid transparent;
        transition: all 0.2s linear;
        font-size: 18px;
        &:hover {
          border-bottom: 3px solid #333333;
        }
      }
    }
  }

  @media (${device.tablet}) {
    padding: 15% 7.5%;
    display: block;
    position: absolute;
    top: 80px;
    left: ${(props) => (props.showOrCloseMenu ? "0" : "-100%")};
    background-color: #ebebeb;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    touch-action: none;
    transition: left 0.5s linear;
    z-index: 1000;
  }
`;

export const ScrollBar = styled.div`
  height: 2px;
  width: 100%;
  position: relative;
  & > div {
    content: "";
    position: absolute;
    background-color: #444444;
    height: 100%;
    top: 0;
    left: 0;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

export const BurgerBlock = styled.div`
  display: none;
  font-size: 18px;
  color: #333333;

  @media (${device.tablet}) {
    display: block;
  }
`;
