import styled from "@emotion/styled";
import {
  FlexContainer,
  SectionWrapper,
} from "../../../../reusable-styles/reusableStyle";
import { device, color } from "../../../../GlobalStyles";

export const RecentBlogPageSection = styled(SectionWrapper)`
  background-color: #f8f8f8;
`;
export const RecentBlogPageWrapper = styled.div`
  padding: 40px 0;
  h2 {
    display: inline-block;
    font-size: 36px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 20px;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease-in-out;
    &:hover {
      border-bottom: 2px solid ${color.greyDark};
    }
    a {
      color: ${color.greyDark};
    }
  }
`;
export const RecentBlogFlex = styled(FlexContainer)`
  justify-content: space-between;

  @media (${device.tablet}) {
    display: block;
  }
`;
