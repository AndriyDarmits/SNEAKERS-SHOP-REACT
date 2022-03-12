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
        ? "Shop"
        : location.pathname === "/blog"
        ? "Blog"
        : location.pathname === "/lookbook"
        ? "lookbook"
        : location.pathname === "/account"
        ? "account"
        : location.pathname === "/contactUs"
        ? "contactUs"
        : "not found"
    );
    console.log(location.pathname);
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
