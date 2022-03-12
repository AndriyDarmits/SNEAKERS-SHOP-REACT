import styled from "@emotion/styled";
import { SectionWrapper } from "../../reusable-styles/reusableStyle";

export const SectionWrapperBlog = styled(SectionWrapper)`
  margin-bottom: 0;
  background-color: #666666;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 250px;
  & > div:first-child {
    font-size: 25px;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-weight: 600;
    color: #333333;
  }
  & > div:last-child {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const FrameImg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;

  img {
    display: block;
    width: 100%;
  }
`;
export const PeopleImg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 101;

  img {
    display: block;
    width: 100%;
    max-width: 300px;
  }
`;
