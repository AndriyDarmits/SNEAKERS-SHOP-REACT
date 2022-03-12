import React, { useEffect, useState } from "react";
import { Container } from "../../reusable-styles/reusableStyle";
import face from "../../assets/icons/footer/ICON.png";
import twit from "../../assets/icons/footer/twit.png";
import inst from "../../assets/icons/footer/inst.png";
import drib from "../../assets/icons/footer/drib.png";
import pint from "../../assets/icons/footer/pint.png";
import home from "../../assets/icons/footer/home.png";
import mail from "../../assets/icons/footer/mail.png";
import phone from "../../assets/icons/footer/phone.png";
import scedule from "../../assets/icons/footer/scedule.png";
import emailBtn from "../../assets/icons/footer/emailBtn.png";
import { Link, useLocation } from "react-router-dom";

import {
  Col1,
  Col2,
  Col3,
  EmailForm,
  FooterFlexBox,
  FooterSection,
  LogoFooter,
  SocialIcons,
} from "../footer/Footer.style";

export default function Footer() {
  const location = useLocation();
  const scrollUp = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  };
  return (
    <FooterSection>
      <Container>
        <FooterFlexBox>
          <Col1>
            <LogoFooter onClick={scrollUp}>
              <Link to={location.pathname}>FLOW</Link>
            </LogoFooter>
            <p>
              Lorem ipsum dolor sit consectetur adipiscing elited se do eiusmod
              tempor incididunt ut labore et umbe dolore tmagna aliqua enim ad
              minim strud
            </p>
            <h3>FOLLOW US</h3>

            <SocialIcons>
              <a>
                <img src={face} alt="" />
              </a>
              <a>
                <img src={twit} alt="" />
              </a>
              <a>
                <img src={inst} alt="" />
              </a>
              <a>
                <img src={drib} alt="" />
              </a>
              <a>
                <img src={pint} alt="" />
              </a>
            </SocialIcons>
          </Col1>
          <Col2>
            <h3>INFORMATION</h3>
            <p>
              <Link to="/about">- About Us</Link>
            </p>
            <p>
              <Link to="/products">- Our Products</Link>
            </p>
            <p onClick={scrollUp}>
              <Link to="/blog">- Blog</Link>
            </p>
            <p>
              <Link to="/contactUs">- Contact us</Link>
            </p>
          </Col2>
          <Col3>
            <div>
              <h3>CONTACTS</h3>
              <address>
                <p>
                  <span>
                    <img src={home} alt="" />
                  </span>
                  152 Moonlight Street, Sugar , NewYork
                </p>
                <p>
                  <span>
                    <img src={mail} alt="" />
                  </span>
                  <a href="mailto:darmirs99@gmail.com">darmirs99@gmail.com</a>
                </p>
                <p>
                  <span>
                    <img src={phone} alt="" />
                  </span>{" "}
                  <a href="tel:+4733378901">+380 68 047 9220</a>
                </p>
                <p>
                  <span>
                    <img src={scedule} alt="" />
                  </span>{" "}
                  Open from <time>10:00</time> to <time>21:00</time> every
                  weekday.
                </p>
              </address>
            </div>
            <EmailForm>
              <form action="/">
                <div>
                  <input type="text" placeholder="Your email..." />
                  <button>
                    <img src={emailBtn} alt="" />
                  </button>
                </div>
              </form>
            </EmailForm>
          </Col3>
        </FooterFlexBox>
      </Container>
    </FooterSection>
  );
}
