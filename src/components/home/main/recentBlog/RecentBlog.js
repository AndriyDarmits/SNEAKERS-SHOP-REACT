import React from "react";
import { RecentBlogItem } from "./RecentBlogItem";
import { Container } from "../../../../reusable-styles/reusableStyle";
import {
  RecentBlogFlex,
  RecentBlogPageSection,
  RecentBlogPageWrapper,
} from "./RecentBlog.style";
import { Link } from "react-router-dom";

export const RecentBlog = () => {
  const dataBlog = [
    {
      id: "1q2w3e4r",
      title: "Adidas has launched zx500 production",
      day: 13,
      month: "Jan",
      body: "For more than 30 years, adidas' ZX line has been a laboratory for innovation. And it all started with this shoe. First launched as a high-tech trainer in the 1980s, the ZX 500 is now an understated streetwear legend. Think retro, but sophisticated, with that preppy, track-ready vibe.",
      imageURL:
        "https://i.pinimg.com/originals/c9/d3/16/c9d316549c72a5654d5ef1c71f304b3c.jpg",
    },
    {
      id: "1a2s3d4f",
      title: "Nike has developed Air Max 97",
      day: 26,
      month: "Feb",
      body: "Max Air changed the game in ’87. Now, we honor its emerald anniversary (35 years!) with the Nike Air Max 97 SE. Emerald graphics and colors highlight this big landmark, while rocking the classic curvy design lines and cushioning of the original.",
      imageURL:
        "https://sneakernews.com/wp-content/uploads/2022/02/Nike-Air-Max-97-DN1893-001-1.jpg",
    },
  ];

  return (
    <RecentBlogPageSection>
      <Container>
        <RecentBlogPageWrapper>
          <h2><Link to = "blog">Recent Blog</Link> </h2>
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
