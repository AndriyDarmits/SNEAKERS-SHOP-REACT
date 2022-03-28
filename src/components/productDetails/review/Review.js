import { Rating } from "@mui/material";
import React from "react";
import { ReviewsBlock } from "./Review.style";

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
