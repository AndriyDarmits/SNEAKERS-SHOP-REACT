import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import { color, device, font } from "../../../GlobalStyles";
import {
  Button,
  Container,
  SectionWrapper,
} from "../../../reusable-styles/reusableStyle";
export const SectionSliderWrapper = styled(SectionWrapper)`
  margin-top: 0;
  margin-bottom: 0;
  height: 100vh;
`;
export const HeaderContainer = styled(Container)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
`;
export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HeaderContent = styled.div``;

export const Like = styled.p`
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  padding: 0 15px;
  font-size: 30px;
  font-family: ${font.montserrat};
  font-weight: 500;
  letter-spacing: 8px;
  line-height: 76px;
  position: relative;

  & > span:nth-of-type(1) {
    color: #f39cc3;
  }
  & > span:nth-of-type(2) {
    color: #9dd5c0;
  }
  & > span:nth-of-type(3) {
    color: #fac174;
  }
`;
export const LikeBg = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  z-index: -1;
  width: 100%;
`;
export const FashionInstaP = styled.h1`
  font-size: 90px;
  color: #f67575;
  padding-left: 15px;
  font-weight: 400;
  font-family: ${font.permanentMarker};
  @media (${device.tablet}) {
    font-size: 60px;
  }
  @media (${device.mobile}) {
    font-size: 50px;
  }
`;

export const ShowNowBtn = styled(Button)`
  padding-left: 15px;
  button {
    color: ${color.white};
    padding: 15px 45px;
  }
`;

// slider customization
export const BackgroundSlider = styled(Slider)`
  height: 100%;
  .slick-list {
    height: inherit;
    .slick-track {
      height: inherit;
      .slick-slide {
        height: inherit;
        div {
          height: inherit;
          img {
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
  .slick-dots {
    display: flex !important;
    justify-content: center;
    align-items: center;
    bottom: 25px !important;
    z-index: 10;
  }

  .slick-dots li {
    width: 10px !important;
    height: 10px !important;
  }

  .slick-dots li button {
    width: 10px !important;
    height: 10px !important;
  }
  .slick-dots li button:before {
    line-height: 10px !important;
    position: absolute;

    width: 10px !important;
    height: 10px !important;
    content: "" !important;
    border-radius: 50%;
    border: 1px solid #444444 !important;
    opacity: 1 !important;
  }

  .slick-dots li.slick-active button:before {
    background: #444444;
    opacity: 1 !important;
  }
`;
