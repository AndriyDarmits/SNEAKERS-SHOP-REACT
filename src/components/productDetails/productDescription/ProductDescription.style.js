import styled from "styled-components";
import { device, color } from "../../../GlobalStyles";

export const DescriptionContainer = styled.div`
  color: ${color.greyMedium};
  line-height: 22px;
  padding: 60px;
  font-weight: 600;
  border: 1px solid ${color.borderColorGrey};
  border-top: 0;
  @media (${device.mobile}) {
    line-height: 16px;
    font-size: 13px;
    padding: 20px;
  }
  @media (${device.tablet}) {
    line-height: 18px;
    font-size: 14px;
    padding: 30px;
  }
  & > p:nth-of-type(1) {
    margin-bottom: 25px;
  }
  ul {
    margin-bottom: 25px;
  }

  span {
    font-weight: 600;
    color: ${color.greyDark};
  }
`;
