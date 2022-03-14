import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import ProductInfo from "../../components/productDetails/info/ProductInfo";
import ProductGallery from "../../components/productDetails/gallery/ProductGallery";
import { Container } from "../../reusable-styles/reusableStyle";
import "./productPage.scss";
import { Context } from "../../Context";
import {
  FlexContainerInfo,
  FlexContainerReviews,
  PathProductDetails,
  ProductItemWrapper,
} from "./ProductDetails.style";

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
  }, [location.pathname]);

  //!context
  const [context, setContext] = useContext(Context);

  return (
    <ProductItemWrapper>
      <Container>
        <PathProductDetails>
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> /{" "}
          <span>{/* product name */}</span>
        </PathProductDetails>
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
            Reviews ({context.length})
          </NavLink>
          <div></div>
        </FlexContainerReviews>
        <Outlet /> {/*"block to display"  */}
      </Container>
    </ProductItemWrapper>
  );
}
