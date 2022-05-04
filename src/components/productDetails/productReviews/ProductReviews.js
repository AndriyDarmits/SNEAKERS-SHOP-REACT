import React, { useEffect, useState } from "react";
import { Review } from "../review/Review";
import { Rating } from "@mui/material";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromLocalStorage } from "../../../helper";
import actions from "../../../redux/actions";
import {
  FlexContainerReviews,
  NoReviewMessage,
  ReviewInputField,
  Reviews,
  ReviewSubmitButton,
  UserNameInput,
  UserNameInputField,
} from "./ProductReviews.style";

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
    const data = { ...reviewsData };
    if (
      reviewerName.length &&
      reviewerEmail.length &&
      reviewText.length &&
      formRateValue
    ) {
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
