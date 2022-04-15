/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Path } from "../../reusable-styles/reusableStyle";
import {
  FrameImg,
  Navigation,
  PeopleImg,
  SectionWrapperBlog,
} from "./PageNavigation.style";

import frame from "../../assets/img/frame.png";
import people from "../../assets/img/people.png";

export default function PageNavigation() {
  const location = useLocation();
  const [path, setPath] = useState([]);

  const pathAvailable = [
    { path: "/products", pathTitle: "Products" },
    { path: "/blog", pathTitle: "Blog" },
    { path: "/lookbook", pathTitle: "Lookbook" },
    { path: "/account", pathTitle: "Account" },
    { path: "/contactUs", pathTitle: "Contact Us" },
    { path: "/wishlist", pathTitle: "Wishlist" },
    { path: "/checkout", pathTitle: "Checkout" },
    { path: "/login", pathTitle: "Login" },
  ];

  useEffect(() => {
    const p = pathAvailable.filter((el) => {
      if (location.pathname === el.path) {
        return el;
      }
    });
    setPath(p);
  }, [location.pathname]);

  //TODO: динамічна зміна фото та заднього фону
  return (
    <SectionWrapperBlog>
      <Container>
        <Navigation>
          <div>{path[0]?.pathTitle}</div>
          <Path>
            <Link to="/">Home</Link> /{" "}
            <Link to={`${path[0]?.path}`}>{path[0]?.pathTitle}</Link>
          </Path>
        </Navigation>
        <FrameImg>
          <img src={frame} alt="" />
        </FrameImg>
        <PeopleImg>
          <img src={people} alt="" />
        </PeopleImg>
      </Container>
    </SectionWrapperBlog>
  );
}
