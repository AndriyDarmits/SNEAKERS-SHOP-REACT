import React, { useEffect, useState } from "react";
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
import {
  FlexContainerInfo,
  FlexContainerReviews,
  PathProductDetails,
  ProductItemWrapper,
} from "./ProductDetails.style";
import { useSelector } from "react-redux";
import {
  getDataFromLocalStorage,
  scrollUp,
  setToLacalStorage,
} from "../../helper";

export default function ProductDetails() {
  //get data from redux store
  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;

  const location = useLocation();
  let { id } = useParams();
  //data state
  const [data, setData] = useState({});
  const [activeLink, setActiveLink] = useState(true);
  // toggle reviews and description
  useEffect(() => {
    if (location.pathname === `/products/${id}/reviews`) {
      setActiveLink(false);
    } else {
      setActiveLink(true);
    }
  }, [location.pathname]);

  // set data to setToLacalStorage from redux store
  useEffect(() => {
    const product = products.filter((product) => product.id === id);
    if (product.length) {
      setToLacalStorage("product", ...product);
    }
  }, [products, id]);

  useEffect(() => {
    if (products.length) {
      setData(...products.filter((product) => product.id === id));
    } else {
      setData(getDataFromLocalStorage("product"));
    }
  }, [products, id]);

  // scroll up after page loading
  useEffect(() => {
    setTimeout(() => {
      scrollUp(0);
    });
  }, []);

  return (
    <ProductItemWrapper>
      <Container>
        <PathProductDetails>
          <Link to="/">Home</Link> / <Link to="/products">Shop</Link> /{" "}
          <span> {data?.title}</span>
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
            Reviews ({data?.reviews?.length || "0"})
            {/* .? - тому що при першому рендерингу даних ще не має і виникає помилка */}
          </NavLink>
          <div></div>
        </FlexContainerReviews>
        <Outlet /> {/*"block to display"  */}
      </Container>
    </ProductItemWrapper>
  );
}
