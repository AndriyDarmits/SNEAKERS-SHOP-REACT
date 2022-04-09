import styled from "styled-components";
import { SectionWrapper } from "../../reusable-styles/reusableStyle";

export const BlogPageSection = styled(SectionWrapper)`
  margin-top: 0;
  margin-bottom: 50px;
`;
export const BlogBlocksWraper = styled.div``;
export const BlogItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 360px);
  justify-content: center;
  grid-gap: 30px;
  margin-bottom: 50px;
`;
