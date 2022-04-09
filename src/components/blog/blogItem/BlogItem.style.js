import styled from "styled-components";
export const BlogItemDiv = styled.div``;
export const BlogImg = styled.div`
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
    height: 250px;
    display: block;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
export const BlogContent = styled.div`
  a {
    h3 {
      padding: 10px 0;
      color: #333333;
      font-size: 20px;
      font-weight: 600;
      font-style: normal;
    }
  }
  div {
    font-size: 12px;
    color: #999999;

    span {
      margin-right: 3px;
    }
  }
  p {
    padding: 15px 0;
    color: #666666;
    line-height: 24px;
  }
`;
