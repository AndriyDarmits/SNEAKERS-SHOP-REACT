import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Button,
  FlexContainer,
  Input,
} from "../../reusable-styles/reusableStyle";
import { Review } from "./Review";
import { Rating } from "@mui/material";

const Reviews = styled.div`
  border: 1px solid #ebebeb;
  border-top: 0;
  padding: 25px 65px;
`;
const FlexContainerReviews = styled(FlexContainer)`
  justify-content: space-between;
`;

const ReviewInputField = styled.div`
  width: 60%;
  font-weight: 600;
  & > p {
    color: #333333;
    span {
      font-weight: 600;
      font-size: 16px;
    }
    &:nth-child(3) {
      color: #a7a7a7;
      font-size: 12px;
    }
  }

  textarea {
    width: 100%;
    resize: none;
    outline: none;
    border: 1px solid #ebebeb;
    height: 130px;
    padding: 15px 25px;
    color: #a7a7a7;
    font-size: 14px;
    &::placeholder {
      color: #a7a7a7;
      font-size: 14px;
    }
  }
`;
const UserNameInputField = styled.div`
  width: 36%;
`;
const ReviewSubmitButton = styled(Button)`
  button {
    color: #fff;
    background-color: #333333;
  }
`;
const UserNameInput = styled(Input)`
  input {
  }
`;

export const ProductReviews = () => {
  const [formRateValue, setFormRateValue] = useState(0);
  const [reviews, addReview] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [reviewerEmail, setReviewerEmail] = useState("");

  const onAddReview = (e) => {
    e.preventDefault();
    console.log(e);
    // add reviews
    if (
      reviewerName.length &&
      reviewerEmail.length &&
      reviewText.length &&
      formRateValue
    ) {
      addReview([
        ...reviews,
        {
          name: reviewerName,
          email: reviewerEmail,
          text: reviewText,
          rate: formRateValue,
        },
      ]);
    } else {
      return;
    }
    // reset input fields
    setFormRateValue(0);
    setReviewText("");
    setReviewerName("");
    setReviewerEmail("");
  };

  return (
    <Reviews>
      <form action="/">
        <FlexContainerReviews>
          <ReviewInputField>
            <p>There are no review yet</p>
            <p>
              Be the first to review <span>“Fun night outfit”</span>
            </p>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <textarea
              value={reviewText}
              name="textarea"
              id=""
              placeholder="Your Review ..."
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
          </ReviewInputField>
          <UserNameInputField>
            <UserNameInput>
              <input
                value={reviewerName}
                type="text"
                name="name"
                placeholder="Your Name ..."
                onChange={(e) => setReviewerName(e.target.value)}
              />
            </UserNameInput>
            <UserNameInput>
              <input
                value={reviewerEmail}
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={(e) => setReviewerEmail(e.target.value)}
              />
            </UserNameInput>
            <Rating
              name="simple-controlled"
              value={formRateValue}
              onChange={(event, newValue) => {
                setFormRateValue(newValue);
              }}
            />
            <ReviewSubmitButton>
              <button type="submit" onClick={(e) => onAddReview(e)}>
                Submit
              </button>
            </ReviewSubmitButton>
          </UserNameInputField>
        </FlexContainerReviews>
      </form>
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </Reviews>
  );
};
