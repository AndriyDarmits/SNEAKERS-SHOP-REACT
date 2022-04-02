import React, { useState } from "react";
import { BlogContent, BlogImg, BlogItem } from "./RecentBlogItem.style";

export const RecentBlogItem = ({ blogData }) => {
  const [enterPointer, setEnterPointer] = useState(false);
  const enterItem = () => {
    setEnterPointer((state) => !state);
  };

  const leaveItem = () => {
    setEnterPointer((state) => !state);
  };
  const slicedDescription = blogData.body.slice(0, 120);

  return (
    <BlogItem
      onPointerEnter={() => enterItem()}
      onPointerLeave={() => leaveItem()}
    >
      <BlogImg enterPointer={enterPointer}>
        <img src={blogData.imageURL} alt="" />
        <div>
          <h3>{blogData.day}</h3>
          <p>{blogData.month}</p>
        </div>
        <span></span>
      </BlogImg>
      <BlogContent>
        <h4>
          {/* TODO: <Link></Link>{ */}
          {blogData.title}
        </h4>
        <p>{slicedDescription}...</p>
      </BlogContent>
    </BlogItem>
  );
};
