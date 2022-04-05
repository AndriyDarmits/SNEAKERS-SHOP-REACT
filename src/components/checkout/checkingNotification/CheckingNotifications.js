import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckingNotificationsDiv } from "./CheckingNotifications.style";
import pageIcon from "../../../assets/icons/checkout/page.png";

export const CheckingNotifications = () => {
  const navigate = useNavigate();
  return (
    <>
      <CheckingNotificationsDiv>
        <div>
          <img src={pageIcon} alt="" />
        </div>
        <div>
          <span>Returning customer ?</span>{" "}
          <span onClick={() => navigate("/login")}>Click here to login</span>
        </div>
      </CheckingNotificationsDiv>
      <CheckingNotificationsDiv>
          <div>
            <img src={pageIcon} alt="" />
          </div>
          <div>
            <span>Have a coupon ?</span>{" "}
            <span onClick={() => navigate(-1)}>
              Click here to enter your code
            </span>
          </div>
        </CheckingNotificationsDiv>
    </>
  );
};
