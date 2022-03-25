import styled from "@emotion/styled";
import React from "react";
import { ProductItem } from "../productItem/ProductItem";
const ProductListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  transition: all 0.5s linear;
  margin-left: 20px;
`;

export const Products = ({ products }) => {
  return (
    <ProductListDiv>
      {products.map((element) => (
        <ProductItem product={element} />
      ))}
    </ProductListDiv>
  );
};
