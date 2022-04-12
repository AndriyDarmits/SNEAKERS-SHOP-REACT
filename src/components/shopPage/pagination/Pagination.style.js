import styled from "@emotion/styled";

export const PaginationNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
  // загальні стилі для всіх кнопок
  button {
    background-color: transparent;
    border: 0;
    color: #cccccc;
    cursor: pointer;
  }
`;
export const PagitationBtn = styled.ul`
  display: flex;
  justify-content: center;
  & > li {
    margin-right: 15px;
    cursor: pointer;
  }
  & > li:last-of-type {
    margin-right: 0;
  }
`;
export const PrevBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NextBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
