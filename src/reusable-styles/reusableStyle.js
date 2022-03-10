import styled from "styled-components";
import { backgrounds } from "../GlobalStyles";

export const Container = styled.div`
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
  position: relative;
`;

export const Input = styled.div`
  input {
    border: 1px solid #ebebeb;
    background-color: #fff;
    outline: none;
  }
`;
export const Button = styled.div`
  button {
    border: 0;
    padding: 15px 35px;
    background-color: #333333;
    border-radius: 30px;
    transition: all 0.1s linear;
    &:hover {
      background-color: #474646;
    }
  }
`;

export const SectionWrapper = styled.section`
  margin-top: 82px;
  margin-bottom: 90px;
`;
export const Path = styled.div`
  margin-bottom: 40px;
  font-size: 14px;
  span {
    font-weight: 600;
    color: #333333;
  }
  a {
    color: #333333;
  }
`;

// flex container

export const FlexContainer = styled.div`
  display: flex;
`;

// incrementing/ decrementing products quantity box
export const ProductQuantity = styled.div`
  display: flex;
  width: 100px;
  height: 45px;
  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #333333;
  }
  & > div:last-child {
    display: block;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50%;
    }
  }
  & > div {
    width: 50%;
  }
`;
