import styled from "styled-components";
import { Logo } from "../header/Header.style";
export const FooterSection = styled.section`
  background-color: #333333;
  padding-top: 68px;
  padding-bottom: 110px;

  @media (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 55px;
  }
`;
export const FooterFlexBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Col1 = styled.div`
  width: 32%;

  @media (max-width: 768px) {
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
    color: #fff;
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
  @media (max-width: 768px) {
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
    color: #fff;
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
    color: #fff;
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
    }
  }
`;

export const Col3 = styled.div`
  width: 32%;
  @media (max-width: 768px) {
    width: 100%;
  }
  h3 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: #fff;
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
      background-color: #fff;
      width: 100%;
      border-radius: 38px;
      padding: 10px 0 10px 40px;
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
        width: 350px;
      }
      @media (max-width: 375px) {
        width: 100%;
      }

      input {
        width: 80%;
        border: none;
        background-color: transparent;
        outline: none;
        font-size: 14px;
        line-height: 18px;
        color: #999999;

        &:placeholder {
          font-size: 14px;
          line-height: 18px;
          color: #999999;
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
