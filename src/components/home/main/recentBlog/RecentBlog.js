import React from "react";
import { RecentBlogItem } from "./RecentBlogItem";
import { Container } from "../../../../reusable-styles/reusableStyle";
import {
  RecentBlogFlex,
  RecentBlogPageSection,
  RecentBlogPageWrapper,
} from "./RecentBlog.style";
import { Link } from "react-router-dom";
import { dataBlog } from "./dataBlog";

export const RecentBlog = () => {
  return (
    <RecentBlogPageSection>
      <Container>
        <RecentBlogPageWrapper>
          <h2>
            <Link to="blog">Recent Blog</Link>{" "}
          </h2>
          <RecentBlogFlex>
            {dataBlog.map((blog, index) => {
              if (index < 2) {
                return <RecentBlogItem blogData={blog} key={blog.id} />;
              }
            })}
          </RecentBlogFlex>
        </RecentBlogPageWrapper>
      </Container>
    </RecentBlogPageSection>
  );
};
