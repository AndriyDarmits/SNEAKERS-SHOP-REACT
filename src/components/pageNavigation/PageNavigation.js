import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
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
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath((p) =>
      location.pathname === "/products"
        ? "Products"
        : location.pathname === "/blog"
        ? "Blog"
        : location.pathname === "/lookbook"
        ? "Lookbook"
        : location.pathname === "/account"
        ? "Account"
        : location.pathname === "/contactUs"
        ? "ContactUs"
        : location.pathname === "/wishlist"
        ? "Wishlist"
        : location.pathname === "/checkout"
        ? "Checkout"
        : "not found"
    );
  }, [location.pathname]);

  //TODO: динамічна зміна фото та заднього фону
  return (
    <SectionWrapperBlog>
      <Container>
        <Navigation>
          <div>{path}</div>
          <Path>
            <Link to="/">Home</Link> /{" "}
            <Link to={`/${path.toLowerCase()}`}>{path}</Link>
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
