import styled from "@emotion/styled";
import React from "react";
import { ProductItem } from "../productItem/ProductItem";
const ProductListFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


export const Products = ({ products }) => {
  return (
    <ProductListFlex>
      {products.map((element, index) => (
        <ProductItem product={element} key={index} />
      ))}
    </ProductListFlex>
  );
};
