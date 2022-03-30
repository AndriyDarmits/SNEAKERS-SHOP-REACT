import styled from "@emotion/styled";
import {
  Button,
  Input,
  SectionWrapper,
} from "../../reusable-styles/reusableStyle";

export const SearchPageWrapper = styled(SectionWrapper)`
  margin-top: 102px;
`;
export const SearchField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const InputSearcher = styled(Input)`
  width: 80%;
  input {
    width: 100%;
    padding: 20px 40px;
    font-size: 18px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
`;
export const SearchBtn = styled(Button)`
  width: 20%;
  button {
    width: 100%;
    font-size: 18px;
    padding: 20px 40px;
    color: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
export const SearchResult = styled.div`
  padding-left: 20px;
  background-color: #f9f9f9;
  
`;
export const ResultItem = styled.div`
  margin-bottom: 5px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #ebebeb;
    a {
      transform: translateY(-3px);
    }
  }
  a {
    display: block;
    padding: 5px;
    color: #444444;
    transition: all 0.1s linear;
  }
`;
