import styled from "styled-components";
import { SectionWrapper } from "../../reusable-styles/reusableStyle";

export const LoginPageSection = styled(SectionWrapper)`
  margin: 0;
`;
export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;
export const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;
export const LoginTitle = styled.h2`
  color: #666666;
  font-size: 30px;
  margin-bottom: 20px;
`;
