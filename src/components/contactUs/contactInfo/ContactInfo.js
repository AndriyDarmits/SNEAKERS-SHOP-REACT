import React from "react";
import home from "../../../assets/icons/contact/home.png";
import mail from "../../../assets/icons/contact/mail.png";
import phone from "../../../assets/icons/contact/phone.png";
import avatar from "../../../assets/img/avatar.jpg";
import {
  ContactInfoWrapper,
  ContactInfoFlex,
  ContactInfoAddress,
  Avatar,
} from "./ContactInfo.style";

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
