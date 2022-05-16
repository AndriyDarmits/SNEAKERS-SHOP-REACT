import styled from "styled-components";
import { color } from "../../../GlobalStyles";
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
      color: ${color.greyDark};
      font-size: 20px;
      font-weight: 600;
      font-style: normal;
    }
  }
  div {
    font-size: 12px;
    color: ${color.greyLight};

    span {
      margin-right: 3px;
    }
  }
  p {
    padding: 15px 0;
    color: ${color.greyMedium};
    line-height: 24px;
  }
`;
