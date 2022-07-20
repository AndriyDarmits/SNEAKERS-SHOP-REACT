import styled from "styled-components";
import { color } from "../GlobalStyles";
export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  position: relative;s
`;
export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Input = styled.div`
  input {
    border: 1px solid ${color.borderColorGrey};
    background-color: ${color.white};
    outline: none;
    color: ${color.greyLight};
    font-size: 14px;
    &::placeholder {
      color: ${color.greyLight};
    }
  }
`;
export const Button = styled.div`
  button {
    border: 0;
    padding: 15px 35px;
    background-color: ${color.greyDark};
    border-radius: 30px;
    transition: all 0.1s linear;
    cursor: pointer;
    &:hover {
      background-color: #474646;
    }
  }
`;
export const TextArea = styled.div`
  textarea {
    width: 100%;
    resize: none;
    outline: none;
    border: 1px solid ${color.borderColorGrey};
    padding: 15px 25px;
    color: #a7a7a7;
    font-size: 14px;
    &::placeholder {
      color: #a7a7a7;
      font-size: 14px;
    }
  }
`;

export const SectionWrapper = styled.section`
  margin-top: 82px;
  margin-bottom: 90px;
`;
export const Path = styled.div`
  font-size: 14px;
  span {
    font-weight: 600;
    color: ${color.greyDark};
  }
  a {
    color: ${color.greyDark};
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
    color: ${color.greyDark};
  }
  & > div:last-child {
    display: block;
    cursor: pointer;
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
export const ErrorMessage = styled.div`
  color: red;
`;
export const ValidMessage = styled.div`
  color: green;
`;
