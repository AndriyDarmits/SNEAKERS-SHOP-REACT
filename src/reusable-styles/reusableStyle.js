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
    background-color: ${backgrounds.grey};
    border-radius: 30px;
    transition: all 0.1s linear;
    &:hover {
      background-color: #474646;
    }
  }
`;

export const SectionWrapper = styled.section`
  margin-top: 180px;
  margin-bottom: 90px;
`;
