import styled from "styled-components";
import { Button, SectionWrapper } from "../../reusable-styles/reusableStyle";

export const AccountPageSection = styled(SectionWrapper)``;
export const AccountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AccountBody = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 0px 10px 3px rgb(0 0 0 / 50%);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;
export const AccountContent = styled.div``;
export const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  img {
    border-radius: 50%;
    max-width: 150px;
    width: 100%;
  }
`;
export const UserInfo = styled.div`
  margin-bottom: 20px;
  h2 {
    color: #666666;
    line-height: 28px;
  }
  a {
    color: #666666;
  }
`;

export const LogOutBtn = styled(Button)`
  button {
    color: #fff;
    padding: 20px 60px;
  }
`;
