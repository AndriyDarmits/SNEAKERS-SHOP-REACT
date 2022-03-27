import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import searchIcon from "../../assets/icons/header/Search.png";
import accountIcon from "../../assets/icons/header/Acc.png";
import cartIcon from "../../assets/icons/header/Cart.png";
import { Container } from "../../reusable-styles/reusableStyle";
import {
  FaAlignLeft,
  FaAlignRight,
  FaSearch,
  FaRegHeart,
  FaHeart,
  FaUserAlt,
} from "react-icons/fa";
import {
  BurgerBlock,
  HeaderDiv,
  Logo,
  Navigation,
  ScrollBar,
  Wrapper,
} from "./Header.style.js";
import { useSelector } from "react-redux";

export const toggleActive = (active) => {
  return {
    transition: "transform 0.2s linear",
    transform: active ? "scale(1.2)" : "",
    color: active ? "#999999" : "",
  };
};

export default function Header() {
  const reduxStore = useSelector((state) => state);
  const { productsCart, wishlist } = reduxStore;

  // scroll bar
  const [scrollTop, setScrollTop] = useState(0);
  const onScrollProgress = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };
  // fire event when scrolling
  const [showOrCloseMenu, setShowOrCloseMenu] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", onScrollProgress);
    return () => document.removeEventListener("scroll", onScrollProgress);
  }, []);

  // close menu after going to other page
  const location = useLocation();
  useEffect(() => {
    setShowOrCloseMenu(false);
  }, [location.pathname]);
  //
  return (
    <Wrapper>
      <Container>
        <HeaderDiv>
          <Logo>
            <NavLink to="/">FLOW</NavLink>
          </Logo>
          <Navigation showOrCloseMenu={showOrCloseMenu}>
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
              <Link to="/wishlist">
                {wishlist.length ? (
                  <FaHeart style={{ color: "red" }} />
                ) : (
                  <FaRegHeart />
                )}
              </Link>
              <NavLink to="/search">
                <FaSearch />
              </NavLink>
              <NavLink to="/account">
                <FaUserAlt />
              </NavLink>
              <NavLink to="/cart">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={cartIcon} alt="" />(<div>{productsCart.length}</div>
                  )
                </div>
              </NavLink>
            </div>
          </Navigation>
          <BurgerBlock onClick={() => setShowOrCloseMenu(!showOrCloseMenu)}>
            {showOrCloseMenu ? <FaAlignRight /> : <FaAlignLeft />}
          </BurgerBlock>
        </HeaderDiv>
      </Container>
      <ScrollBar>
        <div
          style={{
            width: `${scrollTop}%`,
          }}
        >
          {/*scroll bar*/}
        </div>
      </ScrollBar>
    </Wrapper>
  );
}
