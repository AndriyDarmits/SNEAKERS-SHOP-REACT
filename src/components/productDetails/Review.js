import { Rating } from "@mui/material";
import React from "react";

export const Review = ({ review }) => {
  return (
    <div>
      <h4>{review.name}</h4>
      <Rating name="read-only" value={review.rate} readOnly />
      <p>{review.text}</p>
    </div>
  );
};
