import styled from "@emotion/styled";
import React from "react";
import { ProductItem } from "../productItem/ProductItem";
const ProductListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
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
