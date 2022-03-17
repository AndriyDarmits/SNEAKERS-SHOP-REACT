import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Button,
  FlexContainer,
  Input,
} from "../../reusable-styles/reusableStyle";
import { Review } from "./Review";
import { Rating } from "@mui/material";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromLocalStorage } from "../../helper";
import actions from "../../redux/actions";

const Reviews = styled.div`
  border: 1px solid #ebebeb;
  border-top: 0;
  padding: 25px 65px;
  @media (max-width: 768px) {
    padding: 15px 35px;
  }
`;
const NoReviewMessage = styled.div`
  font-weight: 600;
  margin-bottom: 25px;
  & > p {
    color: #333333;
    margin-bottom: 5px;
    span {
      font-size: 16px;
    }
    &:nth-child(3) {
      color: #a7a7a7;
      font-size: 12px;
      margin-bottom: 0;
    }
  }
`;
const FlexContainerReviews = styled(FlexContainer)`
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ReviewInputField = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
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
  @media (max-width: 768px) {
    width: 60%;
    margin-bottom: 10px;
  }
  // rating styling
  & > span {
    margin-bottom: 15px;
  }
`;
const ReviewSubmitButton = styled(Button)`
  button {
    color: #fff;
    background-color: #333333;
  }
`;
const UserNameInput = styled(Input)`
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
  input {
    padding: 10px 15px;
    width: 100%;
    color: #999999;
    &::placeholder {
      font-size: 13px;
      color: #999999;
    }
  }
`;

export const ProductReviews = () => {
  const [formRateValue, setFormRateValue] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [reviewerEmail, setReviewerEmail] = useState("");
  //getting data from redux
  let { id } = useParams();

  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;

  //set data from redux products
  const [reviewsData, setReviewsData] = useState({});
  useEffect(() => {
    if (products.length) {
      setReviewsData(...products.filter((product) => product.id === id));
    } else {
      setReviewsData(getDataFromLocalStorage("product"));
    }
  }, [products, id]);

  const dispatch = useDispatch();
  const onAddReview = (e) => {
    e.preventDefault();
    // add reviews
    if (
      reviewerName.length &&
      reviewerEmail.length &&
      reviewText.length &&
      formRateValue
    ) {
      const data = { ...reviewsData };
      data.reviews = [
        ...data.reviews,
        {
          name: reviewerName,
          email: reviewerEmail,
          text: reviewText,
          rate: formRateValue,
        },
      ];
      dispatch(actions.updateProducts(data));
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
            <textarea
              value={reviewText}
              name="textarea"
              required
              id=""
              placeholder="Your Review ..."
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
          </ReviewInputField>
          <UserNameInputField>
            <UserNameInput>
              <input
                value={reviewerName}
                required
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
                required
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
      <>
        {reviewsData?.reviews?.length ? (
          reviewsData.reviews.map((review) => <Review review={review} />)
        ) : (
          <NoReviewMessage>
            <p>There are no review yet</p>
            <p>
              Be the first to review <span>{`"Shoe title"`}</span>
            </p>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </NoReviewMessage>
        )}
      </>
    </Reviews>
  );
};
