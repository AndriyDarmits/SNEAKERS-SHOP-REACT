import { Rating } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ReviewsBlock = styled.div`
  border-bottom: 1px solid #ebebeb;
  padding: 5px 0;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
      color: #333333;
    }
  }
  p {
    padding-left: 10px;
    line-height: 18px;
    text-indent: 30px;
    color: #999999;
  }
`;
export const Review = ({ review }) => {
  return (
    <ReviewsBlock>
      <div>
        <h4>{review.name}</h4>
        <Rating name="read-only" value={review.rate} readOnly />
      </div>
      <p>{review.text}</p>
    </ReviewsBlock>
  );
};
