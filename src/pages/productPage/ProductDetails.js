import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductGallery from "../../components/productDetails/ProductGallery";
import {
  Container,
  Path,
  SectionWrapper,
} from "../../reusable-styles/reusableStyle";

export default function ProductDetails() {
  const ProductItemWrapper = styled(SectionWrapper)`
    margin-bottom: 50px;
    margin-top: 122px;
  `;

  return (
    <ProductItemWrapper>
      <Container>
        <Path>
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> /{" "}
          <span>{/* product name */}</span>
        </Path>
        <ProductGallery />
      </Container>
    </ProductItemWrapper>
  );
}
