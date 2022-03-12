import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Path } from "../../reusable-styles/reusableStyle";
import { SectionWrapperBlog } from "./Blog.style";
const Navigation = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 250px;
`;

export const PathBlog = styled(Path)`
  margin-bottom: 0;
`;

export default function BlogPage() {
  return (
    <SectionWrapperBlog>
      <Container>
        <Navigation>
          <PathBlog>
            <Link to="/">Home</Link> / <Link to="/blog">Shop</Link> /{" "}
          </PathBlog>
        </Navigation>
      </Container>
    </SectionWrapperBlog>
  );
}
