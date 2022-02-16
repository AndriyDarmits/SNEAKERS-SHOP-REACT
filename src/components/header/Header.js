import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import searchIcon from "../../assets/header/Search.png";
import accountIcon from "../../assets/header/Acc.png";
import cartIcon from "../../assets/header/Cart.png";

export const Container = styled.div`
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
  position: relative;
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

export const toggleActive = (active) => {
  return {
    color: active ? "red" : "black",
  };
};

export default function Header() {
  return (
    <div className="wrapper">
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
                to="/pruducts"
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
    </div>
  );
}
