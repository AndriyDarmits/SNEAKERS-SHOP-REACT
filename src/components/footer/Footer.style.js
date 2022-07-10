import styled from "styled-components";
import { Logo } from "../navBar/NavBar.style";
import { device, color } from "../../GlobalStyles";
export const FooterSection = styled.section`
  background-color: ${color.greyDark};
  padding-top: 60px;
  padding-bottom: 60px;

  @media (${device.tablet}) {
    padding-top: 30px;
    padding-bottom: 55px;
  }
`;
export const FooterFlexBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media (${device.tablet}) {
    display: block;
  }
`;

export const Col1 = styled.div`
  width: 32%;

  @media (${device.tablet}) {
    width: 100%;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    color: #b2b2b2;
    margin-bottom: 50px;
  }

  h3 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: ${color.white};
    margin-bottom: 20px;
    transition: transform 0.1s linear;
    &:hover {
      transform: translate(3px, -3px);
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (${device.tablet}) {
    justify-content: space-evenly;
    margin-bottom: 20px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    min-height: 40px;
    border-radius: 50%;
    transition: transform 0.1s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
    &:nth-of-type(1) {
      background-color: #3b5998;
    }
    &:nth-of-type(2) {
      background-color: #1da1f3;
    }
    &:nth-of-type(3) {
      background-color: #b23c93;
    }
    &:nth-of-type(4) {
      background-color: #dd3e7b;
    }
    &:nth-of-type(5) {
      background-color: #cc4d5b;
    }
    img {
    }
  }
`;

export const LogoFooter = styled(Logo)`
  margin-bottom: 30px;
  transition: transform 0.1s linear;
  &:hover {
    transform: translate(3px, -3px);
  }
  a {
    color: ${color.white};
  }
`;

export const Col2 = styled.div`
  width: 32%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: ${color.white};
    margin-bottom: 20px;
    transition: transform 0.1s linear;
    &:hover {
      transform: translate(3px, -3px);
    }
  }

  p {
    a {
      color: #b2b2b2;
      font-size: 14px;
      line-height: 27px;
      border-bottom: 1px solid transparent;
      transition: all 0.2s linear;
      &:hover,
      &:active {
        border-bottom: 1px solid ${color.white};
      }
    }
  }
`;

export const Col3 = styled.div`
  width: 32%;
  @media (${device.tablet}) {
    width: 100%;
  }
  h3 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: ${color.white};
    margin-bottom: 20px;
    transition: transform 0.1s linear;
    &:hover {
      transform: translate(3px, -3px);
    }
  }
  address {
    margin-bottom: 20px;
    p {
      color: #b2b2b2;
      font-size: 14px;
      line-height: 24px;
      a {
        color: inherit;
      }
      span {
        margin-right: 20px;
      }
    }
  }
`;
export const EmailForm = styled.div`
  form {
    div {
      background-color: ${color.white};
      width: 100%;
      border-radius: 38px;
      padding: 10px 0 10px 40px;
      display: flex;
      align-items: center;

      @media (${device.tablet}) {
        width: 350px;
      }
      @media (${device.mobile}) {
        width: 100%;
      }

      input {
        width: 80%;
        border: none;
        background-color: transparent;
        outline: none;
        font-size: 14px;
        line-height: 18px;
        color: ${color.greyLight};

        &:placeholder {
          font-size: 14px;
          line-height: 18px;
          color: ${color.greyLight};
        }
      }

      button {
        width: 20%;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0 20px;
        transition: transform 0.1s ease-in-out;
        &:hover {
          transform: translateX(10px);
        }
        img {
          display: block;
        }
      }
    }
  }
`;
