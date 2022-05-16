import styled from "styled-components";
import {
  FlexContainer,
  SectionWrapper,
} from "../../../../reusable-styles/reusableStyle";
import { color } from "../../../../GlobalStyles";

export const FeaturedProductsSection = styled(SectionWrapper)`
  margin: 0;
  margin-top: 80px;
`;
export const TitleAndNavbtn = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const Title = styled.div`
  h2 {
    font-size: 36px;
    font-weight: 600;
    color: ${color.greyDark};
    font-style: normal;
    text-transform: uppercase;
  }
`;

export const NavButton = styled.div`
  display: flex;
  div {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${color.greyMedium};
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      background-color: ${color.greyMedium};
      svg {
        color: ${color.white};
      }
    }
    &:last-of-type {
      margin-left: 10px;
    }
    svg {
      color: ${color.greyMedium};
      transition: all 0.2s;
    }
  }
`;
export const FeaturedProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  justify-content: center;
`;
