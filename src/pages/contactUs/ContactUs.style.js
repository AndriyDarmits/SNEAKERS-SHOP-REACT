import styled from "@emotion/styled";
import {
  FlexContainer,
  SectionWrapper,
} from "../../reusable-styles/reusableStyle";

export const ContactUsSection = styled(SectionWrapper)``;
export const ContactUsFlex = styled(FlexContainer)`
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: none;
    align-items: center;
  }
`;
export const ContactinfoAndForm = styled.div`
  width: 49%;
  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;
