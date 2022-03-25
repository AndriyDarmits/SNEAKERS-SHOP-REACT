import styled from "styled-components";

export const ProductItemDiv = styled.div`
  margin: 5px;
  width: 240px;
  transition: all 0.1s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 10px 1px rgba(51, 51, 51, 0.67);
    transform: scale(1.01);
  }
`;
export const ProductImageWrapper = styled.div`
  width: 100%;
  background-color: #333333;
  position: relative;
  img {
    display: block;
    width: 100%;
  }
`;
export const ProductImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  transition: all 0.3s ease-in;
`;
export const AddToCartAndViewIcons = styled.div`
  position: absolute;
  display: flex;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.3s ease-in;
    svg {
      color: #444444;
      &:hover {
        color: #fff;
      }
    }
    &:hover {
      background-color: #8c3717;
    }
    &:first-of-type {
      margin-right: 10px;
    }
  }
`;

export const ProductContent = styled.div`
  padding: 5px;
  text-align: center;

  h5 {
    display: inline-block;
    margin-bottom: 5px;
    font-size: 14px;
    border-bottom: 1px solid transparent;
    transition: border 0.1s ease-in;
    &:hover {
      border-bottom: 1px solid #666666;
    }
    a {
      color: #333333;
    }
  }

  p {
    font-size: 14px;
    color: #666666;
  }
`;

export const WishListIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
