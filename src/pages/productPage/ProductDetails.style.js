import styled from "@emotion/styled";
import {
  FlexContainer,
  Path,
  SectionWrapper,
} from "../../reusable-styles/reusableStyle";

export const ProductItemWrapper = styled(SectionWrapper)`
  margin-bottom: 50px;
  margin-top: 122px;
`;
export const FlexContainerInfo = styled(FlexContainer)`
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const FlexContainerReviews = styled(FlexContainer)`
  text-transform: uppercase;
  font-size: 15px;

  & > a {
    color: #666666;
    font-weight: 600;
    font-size: 18px;
    display: block;
    padding: 15px 50px;
  }
  div {
    flex: auto;
    border-bottom: 1px solid #ebebeb;
  }
`;
export const PathProductDetails = styled(Path)`
  margin-bottom: 40px;
`;
