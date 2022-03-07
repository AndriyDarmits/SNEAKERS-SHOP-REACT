import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import ProductInfo from "../../components/productDetails/info/ProductInfo";
import ProductGallery from "../../components/productDetails/gallery/ProductGallery";
import {
  Container,
  FlexContainer,
  Path,
  SectionWrapper,
} from "../../reusable-styles/reusableStyle";
import "./productPage.scss";

const ProductItemWrapper = styled(SectionWrapper)`
  margin-bottom: 50px;
  margin-top: 122px;
`;
const FlexContainerInfo = styled(FlexContainer)`
  justify-content: space-between;
  margin-bottom: 50px;
`;

const FlexContainerReviews = styled(FlexContainer)`
  text-transform: uppercase;
  font-size: 15px;

  & > a {
    color: #666666;
    font-weight: 600;
    font-size: 18px;
    display: block;
    padding: 15px 50px;
  }
  div {
    flex: auto;
    border-bottom: 1px solid #ebebeb;
  }
`;

export default function ProductDetails() {
  const location = useLocation();
  let { id } = useParams();

  const [activeLink, setActiveLink] = useState(true);
  // toggle reviews and description
  useEffect(() => {
    if (location.pathname === `/products/${id}/reviews`) {
      setActiveLink(false);
    } else {
      setActiveLink(true);
    }
  });

  return (
    <ProductItemWrapper>
      <Container>
        <Path>
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> /{" "}
          <span>{/* product name */}</span>
        </Path>
        <FlexContainerInfo>
          <ProductGallery />
          <ProductInfo />
        </FlexContainerInfo>
        <FlexContainerReviews>
          <NavLink
            className={activeLink ? "description-active" : "description"}
            to=""
          >
            Description
          </NavLink>
          <NavLink
            className={activeLink ? "description" : "description-active"}
            to="reviews"
          >
            Reviews
          </NavLink>
          <div></div>
        </FlexContainerReviews>
        <Outlet />
      </Container>
    </ProductItemWrapper>
  );
}
