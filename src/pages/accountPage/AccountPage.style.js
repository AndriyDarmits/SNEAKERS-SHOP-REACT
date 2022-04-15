import styled from "styled-components";
import { Button, SectionWrapper } from "../../reusable-styles/reusableStyle";

export const AccountPageSection = styled(SectionWrapper)``;
export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AccountBody = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  max-width: 400px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const AccountContent = styled.div``;
export const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  img {
    border-radius: 50%;
  }
`;
export const UserInfo = styled.div``;

export const LogOutBtn = styled(Button)``;
