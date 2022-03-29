import styled from "@emotion/styled";
import React from "react";
import home from "../../../assets/icons/contact/home.png";
import mail from "../../../assets/icons/contact/mail.png";
import phone from "../../../assets/icons/contact/phone.png";
import avatar from "../../../assets/img/avatar.jpg";
export const ContactInfoWrapper = styled.div`
  width: 100%;
  padding: 25px 40px;
  background-color: #f8f8f8;
  margin-bottom: 40px;
`;
export const ContactInfoFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const ContactInfoAddress = styled.address`
  padding-right: 10px;
  h2 {
    font-size: 24px;
    color: #333333;
    text-transform: uppercase;
    font-style: normal;
    margin-bottom: 20px;
  }
  p {
    color: #666666;
    line-height: 2.5;
  }
  a {
    color: #666666;
  }
  span {
    margin-right: 10px;
  }
`;
export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  img {
    max-width: 130px;
    border-radius: 50%;
  }
`;
export const ContactInfo = () => {
  return (
    <ContactInfoWrapper>
      <ContactInfoFlex>
        <ContactInfoAddress>
          <h2>Contact info</h2>
          <p>
            <span>
              <img src={home} alt="" />
            </span>
            152 Moonlight Street, Sugar , NewYork
          </p>

          <p>
            <span>
              <img src={phone} alt="" />
            </span>{" "}
            <a href="tel:+4733378901">+380 68 047 9220</a>
          </p>
          <p>
            <span>
              <img src={mail} alt="" />
            </span>
            <a href="mailto:darmirs99@gmail.com">darmirs99@gmail.com</a>
          </p>
        </ContactInfoAddress>
        <Avatar>
          <img src={avatar} alt="" />
        </Avatar>
      </ContactInfoFlex>
    </ContactInfoWrapper>
  );
};
