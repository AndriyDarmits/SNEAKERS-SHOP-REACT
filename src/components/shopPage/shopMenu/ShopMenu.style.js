import styled from "styled-components";

export const ShopMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
`;
export const ShowRangeProducts = styled.div`
  color: #666666;
`;
export const View = styled.div`
  display: flex;
  & > div {
    margin-right: 5px;
    cursor: pointer;
    svg {
      font-size: 16px;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
