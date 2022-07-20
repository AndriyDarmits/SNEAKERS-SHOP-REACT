import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import actions from "../../redux/actions/index";
import {
  ErrorMessage,
  ValidMessage,
} from "../../reusable-styles/reusableStyle";
import {
  CouponForm,
  CouponWrapper,
  CuponButton,
  CuponInput,
} from "./CartComponents.style";

export default function Coupon() {
  const dispatch = useDispatch();
  // dispatch(actions.activateDiscount())
  const couponeValidation = Yup.object().shape({
    promoCode: Yup.string()
      .required()
      .matches(
        /summer2022|winter2022|spring2022|autumn2022/i,
        "incorrect promocode"
      ),
  });

  const formik = useFormik({
    initialValues: {
      promoCode: "",
    },
    validationSchema: couponeValidation,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(actions.activateDiscount());
      resetForm();
    },
  });

  return (
    <CouponWrapper>
      <CouponForm onSubmit={formik.handleSubmit}>
        <CuponInput>
          <input
            value={formik.values.promoCode}
            type="text"
            id="promoCode"
            placeholder="Coupon Code..."
            onChange={formik.handleChange}
          />
        </CuponInput>
        <CuponButton>
          <button type="submit">Apply coupon</button>
        </CuponButton>
      </CouponForm>
      {formik.errors.promoCode && formik.touched.promoCode ? (
        <ErrorMessage>{formik.errors.promoCode}</ErrorMessage>
      ) : null}
      {!formik.errors.promoCode && formik.touched.promoCode ? (
        <ValidMessage>valid</ValidMessage>
      ) : null}
    </CouponWrapper>
  );
}
