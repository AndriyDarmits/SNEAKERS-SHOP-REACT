import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../reusable-styles/reusableStyle";
import face from "../../assets/icons/footer/ICON.png";
import twit from "../../assets/icons/footer/twit.png";
import inst from "../../assets/icons/footer/inst.png";
import drib from "../../assets/icons/footer/drib.png";
import pint from "../../assets/icons/footer/pint.png";
import { Link } from "react-router-dom";
import { Logo } from "../header/Header";

const Col1 = styled.div`
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
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: transform 0.1s ease-in-out;
    margin-right: 15px;
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
`;

const Col2 = styled.div`
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

export default function Footer() {
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
        </FooterFlexBox>
      </Container>
    </section>
  );
}
