import { keyframes } from "styled-components";
import styled from "styled-components";
import {
  Container,
  FlexContainer,
  SectionWrapper,
} from "../../reusable-styles/reusableStyle";
import { device, color } from "../../GlobalStyles";

export const LookBookSection = styled(SectionWrapper)`
  margin: 0;
`;
export const LookBookContainer = styled(Container)`
  max-width: 1920px;
  padding: 0;
`;

export const LookBookFlex = styled(FlexContainer)`
  @media (${device.tablet}) {
    flex-direction: column;
  }
`;

const translate_top = keyframes`
0%{
    transform: translateY(100%);
    opacity: 0;
}60%{
    opacity: 0;
}100%{
    transform: translateY(0%);
    opacity: 1;
}`;
export const LookBookMainImageWrapper = styled.div`
  width: 50%;
  position: relative;
  @media (${device.tablet}) {
    margin-bottom: 10px;
  }
  &:hover {
    & > div {
      display: block;
      @media (${device.tablet}) {
        display: none;
      }
    }
  }
  img {
    width: 100%;
    display: block;
  }
  & > div {
    padding: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: none;
    animation: ${translate_top} 0.5s linear;
    background: rgba(153, 153, 153, 0.4);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    line-height: 18px;
    color: ${color.greyDark};
  }
`;

export const LookBookContentCenter = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (${device.tablet}) {
    align-self: flex-end;
    margin-bottom: 10px;
  }
`;
export const LookBookContent = styled.div``;
export const Titles = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 10px;
  h3 {
    color: ${color.greyDark};
    font-size: 24px;
    @media (${device.tablet}) {
      font-size: 18px;
    }
  }
  h5 {
    color: ${color.greyLight};
    font-size: 14px;
    @media (${device.tablet}) {
      font-size: 12px;
    }
  }
`;

export const SmallProductImageWrapper = styled.div`
  max-width: 300px;
  margin-bottom: 10px;
  @media (${device.laptop}) {
    width: 250px;
  }
  @media (${device.tablet}) {
    width: 200px;
  }
  img {
    width: 100%;
    transition: all 0.2s linear;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 8px 3px #00000066;
    }
  }
`;
export const SeeMore = styled.div`
  display: inline-block;
  text-transform: uppercase;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${color.greyMedium};
    transition: all 0.1s linear;
  }
  &:hover {
    &:after {
      background: transparent;
    }
  }
  &:hover {
    text-decoration: none;
  }
  a {
    color: ${color.greyDark};
    font-weight: 600;
    font-size: 18px;
    @media (${device.tablet}) {
      font-size: 14px;
    }
  }
`;
