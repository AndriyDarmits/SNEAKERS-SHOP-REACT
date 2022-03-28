import styled from "@emotion/styled";
import React from "react";
import { ProductItem } from "../productItem/ProductItem";
const ProductListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Products = ({ products }) => {
  return (
    <ProductListDiv>
      {products.map((element, index) => (
        <ProductItem product={element} key={index} />
      ))}
    </ProductListDiv>
  );
};
