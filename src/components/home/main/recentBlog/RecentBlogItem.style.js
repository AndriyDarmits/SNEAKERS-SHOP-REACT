import styled from "@emotion/styled";

export const BlogItem = styled.div`
  width: 49%;
`;
export const BlogImg = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  div {
    position: absolute;
    z-index: 5;
    top: -10px;
    right: 10px;
    background-color: #333333;
    padding: 10px 15px;
    color: #fff;
    text-align: center;
    h3 {
      font-size: 33px;
      font-weight: 600;
      font-style: normal;
    }
    p {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 16px;
    }
  }
  span {
    position: absolute;
    top: -10px;
    right: 77px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 10px 10px;
    border-color: transparent transparent #333333 transparent;
  }
`;
export const BlogContent = styled.div`
  padding: 25px;
  background-color: #fff;
  min-height: 200px;

  h4 {
    font-size: 24px;
    color: #333333;
    margin-bottom: 10px;
    font-style: normal;
    font-weight: 600;
  }
  p {
    color: #666666;
    line-height: 24px;
  }
`;
