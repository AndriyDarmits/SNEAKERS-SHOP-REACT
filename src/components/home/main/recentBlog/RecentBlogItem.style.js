import styled from "@emotion/styled";

export const BlogItem = styled.div`
  width: 49%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
    &:last-of-type {
      margin: 0;
    }
  }
`;
export const BlogImg = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  div {
    transition: all 0.3s ease-in;
    position: absolute;
    z-index: 5;
    top: -10px;
    right: ${(props) => (props.enterPointer ? "15px" : "10px")};
    background-color: ${(props) =>
      props.enterPointer ? "#444444" : "#333333"};
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
    transition: all 0.3s ease-in;
    position: absolute;
    top: -10px;
    right: ${(props) => (props.enterPointer ? "82px" : "76px")};
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 10px 10px;
    border-color: transparent transparent
      ${(props) => (props.enterPointer ? "#444444" : "#333333")} transparent;
  }
`;
export const BlogContent = styled.div`
  padding: 25px;
  background-color: #fff;
  min-height: 200px;

  h4 {
    display: inline-block;
    font-size: 24px;
    color: #333333;
    margin-bottom: 10px;
    font-style: normal;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    transition: border 0.2s ease-in-out;
    &:hover {
      border-bottom: 2px solid #333333;
    }
  }
  p {
    color: #666666;
    line-height: 24px;
  }
`;
