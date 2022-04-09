import React from "react";
import { Link } from "react-router-dom";
import { BlogContent, BlogImg, BlogItemDiv } from "./BlogItem.style";

export const BlogItem = ({ blog }) => {
  return (
    <BlogItemDiv>
      <BlogImg>
        <img src={blog.imageURL} alt="" />
      </BlogImg>
      <BlogContent>
        <Link to={`${blog.id}`}>
          <h3>{blog.title}</h3>
        </Link>
        <div>
          <span>{blog.month}</span>
          <span>{blog.day}</span>
          <span>{blog.year}</span>
        </div>
        <p>{blog.body.slice(0, 120).trim()}...</p>
      </BlogContent>
    </BlogItemDiv>
  );
};
