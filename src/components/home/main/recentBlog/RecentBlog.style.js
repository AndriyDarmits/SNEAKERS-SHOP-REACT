import styled from "@emotion/styled";
import {
  FlexContainer,
  SectionWrapper,
} from "../../../../reusable-styles/reusableStyle";

export const RecentBlogPageSection = styled(SectionWrapper)`
  background-color: #f8f8f8;
`;
export const RecentBlogPageWrapper = styled.div`
  padding: 40px 0;
  h2 {
    font-size: 36px;
    text-transform: uppercase;
    font-size: #333333;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;
export const RecentBlogFlex = styled(FlexContainer)`
  justify-content: space-between;
`;
