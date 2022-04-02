import React from "react";
import { BlogContent, BlogImg, BlogItem } from "./RecentBlogItem.style";

export const RecentBlogItem = ({ blogData }) => {
  return (
    <BlogItem>
      <BlogImg>
        <img src={blogData.imageURL} alt="" />
        <div>
          <h3>{blogData.day}</h3>
          <p>{blogData.month}</p>
        </div>
        <span></span>
      </BlogImg>
      <BlogContent>
        <h4>{blogData.title}</h4>
        <p>{blogData.body}</p>
      </BlogContent>
    </BlogItem>
  );
};
