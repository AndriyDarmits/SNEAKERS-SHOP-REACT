import styled from "styled-components";

export const InlineBlockContainer = styled.div`
  display: inline-block;
  width: 49%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const BigProductImage = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ebebeb;
  margin-bottom: 10px;
  img {
    width: 100%;
    display: block;
  }
`;
export const SmallProductImage = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    width: 32%;
    border-radius: 5px;
    img {
      width: 100%;
      display: block;
    }
  }
`;
