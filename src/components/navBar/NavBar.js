import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
  NavBarN,
  Navigation,
  ScrollBar,
  UserAvatar,
  Wrapper,
} from "./NavBar.style.js";
import { useSelector } from "react-redux";
import { color } from "../../GlobalStyles";

export const toggleActive = (active) => {
  return {
    transition: "transform 0.2s linear",
    transform: active ? "scale(1.2)" : "",
    color: active ? `${color.greyLight}` : "",
  };
};

export default function NavBar() {
  const reduxStore = useSelector((state) => state);
  const { productsCart, wishlist, userData } = reduxStore;
  const [showOrCloseMenu, setShowOrCloseMenu] = useState(false);
  const location = useLocation();
  // scroll bar
  const [scrollTop, setScrollTop] = useState(0);
  // hiding header on scroll
  const [visible, setVisible] = useState(true);
  const [position, setPosition] = useState(window.pageYOffset);

  useEffect(() => {
    // scroll progress bar handler
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
    document.addEventListener("scroll", onScrollProgress);
    return () => document.removeEventListener("scroll", onScrollProgress);
  }, []);

  // close menu after going to other page
  useEffect(() => {
    setShowOrCloseMenu(false);
  }, [location.pathname]);

  // hide-show header depend on scrolling direction changes
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);
  return (
    <Wrapper visible={visible}>
      <Container>
        <NavBarN>
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
              <Link to="/wishlist">
                {wishlist.length ? (
                  <FaHeart style={{ color: "#bf1414" }} />
                ) : (
                  <FaRegHeart />
                )}
              </Link>
              <NavLink to="/search">
                <FaSearch />
              </NavLink>
              <NavLink to="/account">
                {userData ? (
                  <UserAvatar
                    src={userData.picture}
                    alt=""
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <FaUserAlt />
                )}
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
        </NavBarN>
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
