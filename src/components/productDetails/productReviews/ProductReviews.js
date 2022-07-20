import { Rating } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { getDataFromLocalStorage } from "../../../helper";
import actions from "../../../redux/actions";
import { ErrorMessage } from "../../../reusable-styles/reusableStyle";
import { Review } from "../review/Review";
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
  //getting data from redux
  let { id } = useParams();
  const dispatch = useDispatch();
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
  // validation
  const reviewsSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    email: Yup.string().email("Invalid email").required("Required"),
    text: Yup.string()
      .required("Required")
      .min(2, "Too Short!")
      .max(400, "Too Long!"),
  });
  // firmik hook
  const formik = useFormik({
    initialValues: {
      text: "",
      name: "",
      email: "",
      rate: 0,
    },
    validationSchema: reviewsSchema,
    onSubmit: (value, { resetForm }) => {
      const data = { ...reviewsData };
      data.reviews = [...data.reviews, value];
      dispatch(actions.updateProducts(data));
      resetForm();
    },
  });
  return (
    <Reviews>
      <form onSubmit={formik.handleSubmit}>
        <FlexContainerReviews>
          <ReviewInputField>
            <textarea
              value={formik.values.text}
              name="text"
              id="text"
              placeholder="Your Review ..."
              onChange={formik.handleChange}
            />
            {formik.errors.text && formik.touched.text ? (
              <ErrorMessage>{formik.errors.text}</ErrorMessage>
            ) : null}
          </ReviewInputField>
          <UserNameInputField>
            <UserNameInput>
              <input
                value={formik.values.name}
                type="text"
                name="name"
                id="name"
                placeholder="Your Name ..."
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name ? (
                <ErrorMessage>{formik.errors.name}</ErrorMessage>
              ) : null}
            </UserNameInput>
            <UserNameInput>
              <input
                value={formik.values.email}
                name="email"
                id="email"
                placeholder="Your Email"
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email ? (
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
              ) : null}
            </UserNameInput>
            <Rating
              name="rate"
              id="rate"
              value={formik.values.rate}
              onChange={(_, newValue) => {
                formik.setFieldValue("rate", newValue);
              }}
            />

            <ReviewSubmitButton>
              <button type="submit">Submit</button>
            </ReviewSubmitButton>
          </UserNameInputField>
        </FlexContainerReviews>
      </form>
      <>
        {reviewsData?.reviews?.length ? (
          reviewsData.reviews.map((review, index) => (
            <Review key={index} review={review} />
          ))
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
