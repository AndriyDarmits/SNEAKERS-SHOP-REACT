import styled from "styled-components";
import {
  FlexContainer,
  SectionWrapper,
} from "../../reusable-styles/reusableStyle";
import { device } from "../../GlobalStyles";

export const ContactUsSection = styled(SectionWrapper)``;
export const ContactUsFlex = styled(FlexContainer)`
  justify-content: space-between;

  @media (${device.tablet}) {
    flex-direction: column;
    justify-content: none;
    align-items: center;
  }
`;
export const ContactinfoAndForm = styled.div`
  width: 49%;
  @media (${device.tablet}) {
    width: 100%;
    margin-bottom: 30px;
  }
`;
