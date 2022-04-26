import React from "react";
import { LoadMoreBtn } from "./LoadMore.style";

export const LoadMore = ({
  loadMoreBlogs,
  loadMoreless,
  isLoadingBlogs,
  blogToShow,
  dataBlogs,
}) => {
  return (
    <>
      {dataBlogs.length >= 3 && (
        <LoadMoreBtn>
          {blogToShow >= dataBlogs.length ? (
            <button onClick={() => loadMoreless()}>
              {isLoadingBlogs ? "Loading..." : "Load less"}
            </button>
          ) : (
            <button onClick={() => loadMoreBlogs()}>
              {isLoadingBlogs ? "Loading..." : "Load more"}
            </button>
          )}
        </LoadMoreBtn>
      )}
    </>
  );
};
