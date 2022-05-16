import styled from "@emotion/styled";
import {
  FlexContainer,
  Path,
  SectionWrapper,
} from "../../reusable-styles/reusableStyle";
import { device, color } from "../../GlobalStyles";

export const ProductItemWrapper = styled(SectionWrapper)`
  margin-bottom: 50px;
  margin-top: 122px;
`;
export const FlexContainerInfo = styled(FlexContainer)`
  justify-content: space-between;
  margin-bottom: 50px;

  @media (${device.laptop}) {
    display: block;
  }
`;

export const FlexContainerReviews = styled(FlexContainer)`
  text-transform: uppercase;
  font-size: 15px;

  & > a {
    color: ${color.greyMedium};
    font-weight: 600;
    font-size: 18px;
    display: block;
    padding: 15px 50px;
    @media (${device.tablet}) {
      font-size: 16px;
      padding: 10px 20px;
    }
  }
  div {
    flex: auto;
    border-bottom: 1px solid ${color.borderColorGrey};
  }
`;
export const PathProductDetails = styled(Path)`
  margin-bottom: 40px;
`;
