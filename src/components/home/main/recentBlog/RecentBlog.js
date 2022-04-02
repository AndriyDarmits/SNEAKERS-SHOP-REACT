import React from "react";
import { RecentBlogItem } from "./RecentBlogItem";
import { Container } from "../../../../reusable-styles/reusableStyle";
import {
  RecentBlogFlex,
  RecentBlogPageSection,
  RecentBlogPageWrapper,
} from "./RecentBlog.style";

export const RecentBlog = () => {
  const dataBlog = [
    {
      id: "1q2w3e4r",
      title: "Adidas has launched zx4000 production",
      day: 13,
      month: "Jan",
      body: "Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt ut labore et dol, sed do eiusmod tempor incididunt ut labore et d, dolor in",
      imageURL:
        "https://i.pinimg.com/originals/c9/d3/16/c9d316549c72a5654d5ef1c71f304b3c.jpg",
    },
    {
      id: "1a2s3d4f",
      title: "Nike has developed a modern model of AirMax",
      day: 13,
      month: "Jan",
      body: "Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt ut labore et dol, sed do eiusmod tempor incididunt ut labore et d, dolor in",
      imageURL:
        "https://sneakernews.com/wp-content/uploads/2022/02/Nike-Air-Max-97-DN1893-001-1.jpg",
    },
  ];

  return (
    <RecentBlogPageSection>
      <Container>
        <RecentBlogPageWrapper>
          <h2>Recent Blog</h2>
          <RecentBlogFlex>
            {dataBlog.map((blog) => {
              return <RecentBlogItem blogData={blog} key={blog.id} />;
            })}
          </RecentBlogFlex>
        </RecentBlogPageWrapper>
      </Container>
    </RecentBlogPageSection>
  );
};
