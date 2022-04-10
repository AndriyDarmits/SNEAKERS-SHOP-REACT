import React, { useEffect, useState } from "react";
import { BlogBlocksWraper, BlogItems, BlogPageSection } from "./BlogPage.style";
import { Container } from "../../reusable-styles/reusableStyle";
import { dataBlog } from "../../components/home/main/recentBlog/dataBlog";
import { BlogCategories } from "../../components/blog/blogCategory/BlogCategories";
import { BlogItem } from "../../components/blog/blogItem/BlogItem";
import { LoadMore } from "../../components/blog/loadMore/LoadMore";
import { scrollUp } from "../../helper";

export default function BlogPage() {
  const [blogToShow, setBlogToShow] = useState(3);
  const lastIndex = blogToShow;
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(false);
  const [dataBlogs, setDataBlogs] = useState(dataBlog);
  // load blogs on click load more
  const loadMoreBlogs = () => {
    setIsLoadingBlogs(true);
    setTimeout(() => {
      setBlogToShow((state) => state + 3);
      setIsLoadingBlogs(false);
    }, 2000);
  };
  // hide loaded blogs after loading all blogs
  const loadMoreless = () => {
    setIsLoadingBlogs(true);
    setTimeout(() => {
      setBlogToShow((state) => 3);
      setIsLoadingBlogs(false);
      scrollUp(0);
    }, 2000);
  };
  useEffect(() => {
    // TODO: scroll
  }, [blogToShow]);
  return (
    <BlogPageSection>
      <Container>
        <BlogBlocksWraper>
          <BlogCategories setDataBlogs={setDataBlogs} />
          <BlogItems>
            {dataBlogs.slice(0, lastIndex).map((blog) => {
              return <BlogItem blog={blog} key={blog.id} />;
            })}
          </BlogItems>
          <LoadMore
            loadMoreBlogs={loadMoreBlogs}
            loadMoreless={loadMoreless}
            isLoadingBlogs={isLoadingBlogs}
            blogToShow={blogToShow}
            dataBlogs={dataBlogs}
          />
        </BlogBlocksWraper>
      </Container>
    </BlogPageSection>
  );
}
