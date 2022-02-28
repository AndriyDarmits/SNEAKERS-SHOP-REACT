import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import searchIcon from "../../assets/icons/header/Search.png";
import accountIcon from "../../assets/icons/header/Acc.png";
import cartIcon from "../../assets/icons/header/Cart.png";
import { Container } from "../../reusable-styles/reusableStyle";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  height: 80px;
  background-color: #fff;
`;
export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  display: flex;
  width: 70%;
  justify-content: space-between;
  .naLink {
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
  }

  .navButton {
    width: 25%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const Logo = styled.div`
  font-size: 30px;
  line-height: 18px;
  font-weight: 500;
  a {
    color: #000;
  }
`;
// !uncompleted
export const toggleActive = (active) => {
  return {
    color: active ? "red" : "black",
  };
};

export default function Header() {
  const [scrollTop, setScrollTop] = useState(0);

  // scroll bar
  const onScrollProgress = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScrollProgress);
  }, []);

  return (
    <Wrapper>
      <Container>
        <HeaderDiv>
          <Logo>
            <NavLink to="/">FLOW</NavLink>
          </Logo>
          <Navigation>
            <div className="naLink">
              <NavLink to="/" style={({ isActive }) => toggleActive(isActive)}>
                Home
              </NavLink>
              <NavLink
                to="/products"
                style={({ isActive }) => toggleActive(isActive)}
              >
                Shop
              </NavLink>
              <NavLink
                to="/blog"
                style={({ isActive }) => toggleActive(isActive)}
              >
                Blog
              </NavLink>
              <NavLink
                to="/lookbook"
                style={({ isActive }) => toggleActive(isActive)}
              >
                Lookbook
              </NavLink>
            </div>

            <div className="navButton">
              {/* no ideas */}
              <NavLink to="/search">
                <img src={searchIcon} alt="" />
              </NavLink>
              <NavLink to="/account">
                <img src={accountIcon} alt="" />
              </NavLink>
              <NavLink to="/cart">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={cartIcon} alt="" />(<div>0</div>)
                </div>
              </NavLink>
            </div>
          </Navigation>
        </HeaderDiv>
      </Container>
      {/*scrollBar*/}
      <div
        style={{
          height: "2px",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            content: "",
            position: "absolute",
            backgroundColor: "#ebebeb",
            width: `${scrollTop}%`,
            height: "100%",
            top: 0,
            left: 0,
            borderBottomRightRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        ></div>
      </div>
    </Wrapper>
  );
}
