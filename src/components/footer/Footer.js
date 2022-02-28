import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
import { Link } from "react-router-dom";
import { Logo } from "../header/Header";

const Col1 = styled.div`
  width: 32%;
  p {
    font-size: 14px;
    line-height: 24px;
    color: #b2b2b2;
    margin-bottom: 50px;
  }

  h3 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 20px;
    transition: transform 0.1s linear;
    &:hover {
      transform: translate(3px, -3px);
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    min-height: 40px;
    border-radius: 50%;
    transition: transform 0.1s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
    &:nth-of-type(1) {
      background-color: #3b5998;
    }
    &:nth-of-type(2) {
      background-color: #1da1f3;
    }
    &:nth-of-type(3) {
      background-color: #b23c93;
    }
    &:nth-of-type(4) {
      background-color: #dd3e7b;
    }
    &:nth-of-type(5) {
      background-color: #cc4d5b;
    }
    img {
    }
  }
`;

const LogoFooter = styled(Logo)`
  margin-bottom: 30px;
  transition: transform 0.1s linear;
  &:hover {
    transform: translate(3px, -3px);
  }
  a {
    color: #fff;
  }
`;
const FooterFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Col2 = styled.div`
  width: 32%;
  h3 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 20px;
    transition: transform 0.1s linear;
    &:hover {
      transform: translate(3px, -3px);
    }
  }

  p {
    a {
      color: #b2b2b2;
      font-size: 14px;
      line-height: 27px;
    }
  }
`;

const Col3 = styled.div`
  width: 32%;
  h3 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 20px;
    transition: transform 0.1s linear;
    &:hover {
      transform: translate(3px, -3px);
    }
  }
  address {
    margin-bottom: 20px;
    p {
      color: #b2b2b2;
      font-size: 14px;
      line-height: 24px;
      a {
        color: inherit;
      }
      span {
        margin-right: 20px;
      }
    }
  }
`;
const EmailForm = styled.div`
  form {
    div {
      background-color: #fff;
      width: 100%;
      border-radius: 38px;
      padding: 10px 0 10px 40px;
      display: flex;
      align-items: center;

      input {
        width: 80%;
        border: none;
        background-color: transparent;
        outline: none;
        font-size: 14px;
        line-height: 18px;
        color: #999999;

        &:placeholder {
          font-size: 14px;
          line-height: 18px;
          color: #999999;
        }
      }

      button {
        width: 20%;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0 20px;
        transition: transform 0.1s ease-in-out;
        &:hover {
          transform: translateX(10px);
        }
        img {
          display: block;
        }
      }
    }
  }
`;

export default function Footer() {
  const scrollUp = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  };
  return (
    <section
      style={{
        backgroundColor: "#333333",
        paddingTop: "68px",
        paddingBottom: "110px",
      }}
    >
      <Container>
        <FooterFlexBox>
          <Col1>
            <LogoFooter onClick={scrollUp}>
              <Link to="/">FLOW</Link>
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
            <p>
              <Link to="/brands">- Popular brands</Link>
            </p>
            <p onClick={scrollUp}>
              <Link to="/Blog">- Blog</Link>
            </p>
            <p>
              <Link to="/team">- Team</Link>
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
    </section>
  );
}
