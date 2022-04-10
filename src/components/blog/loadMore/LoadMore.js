import React from "react";
import styled from "styled-components";
import { Button } from "../../../reusable-styles/reusableStyle";
export const LoadMoreBtn = styled(Button)`
  display: flex;
  justify-content: center;
  button {
    color: #fff;
    padding: 15px 40px;
  }
`;
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
