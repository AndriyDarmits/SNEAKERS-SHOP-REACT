import styled from "styled-components";
import { device, color } from "../../../../GlobalStyles";

export const RecentBlogItemDiv = styled.div`
  width: 49%;
  position: relative;
  @media (${device.tablet}) {
    width: 100%;
    margin-bottom: 40px;
    &:last-of-type {
      margin: 0;
    }
  }
  & > div:first-of-type {
    transition: all 0.3s ease-in;
    position: absolute;
    z-index: 5;
    top: -10px;
    right: ${(props) => (props.enterPointer ? "15px" : "10px")};
    background-color: ${(props) =>
      props.enterPointer ? "#444444" : `${color.greyDark}`};
    width: 60px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${color.white};
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
    right: ${(props) => (props.enterPointer ? "75px" : "70px")};
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 10px 10px;
    border-color: transparent transparent
      ${(props) => (props.enterPointer ? "#444444" : `${color.greyDark}`)}
      transparent;
  }
`;
export const BlogImg = styled.div`
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: all 0.2s linear;
    &:hover {
      transform: scale(1.1) rotate(2deg);
    }
  }
`;
export const BlogContent = styled.div`
  padding: 25px;
  background-color: ${color.white};
  min-height: 200px;

  h4 {
    display: inline-block;
    font-size: 24px;
    color: ${color.greyDark};
    margin-bottom: 10px;
    font-style: normal;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    transition: border 0.2s ease-in-out;
    &:hover {
      border-bottom: 2px solid ${color.greyDark};
    }
  }
  p {
    color: ${color.greyMedium};
    line-height: 24px;
  }
`;
