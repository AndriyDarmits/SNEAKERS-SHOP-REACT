import styled from "styled-components";

export const CategoriesList = styled.div`
  display: flex;
`;
export const CatagoryName = styled.div`
  padding: 30px 0;
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    font-size: 18px;
    color: #666666;
    font-weight: 500;
  }
`;
