import styled from "@emotion/styled";
import React from "react";
import { ProductSingleItem } from "../productItem/ProductSingleItem";
import { ProductItem } from "../productItem/ProductItem";
const ProductListFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ProductListSingleBlock = styled.div`
  display: block;
`;

export const Products = ({ products }) => {
  // TODO:додати стейт, за допомогою якого будемо вибодирати між грід розташуваням блоків та одиночнийх
  return (
    <ProductListFlex>
      {products.map((element, index) => (
        <ProductItem product={element} key={index} />
        /*  <ProductSingleItem product={element} key={index} /> */
      ))}
    </ProductListFlex>
  );
};
