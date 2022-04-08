import styled from "styled-components";
import React from "react";
import { ProductSingleItem } from "../productItem/ProductSingleItem";
import { ProductItem } from "../productItem/ProductItem";
const ProductListFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  justify-content: center;
`;
const ProductListSingleBlock = styled.div`
  display: block;
`;

export const Products = ({ products }) => {
  // TODO:додати стейт, за допомогою якого будемо вибирати між грід розташуваням блоків та одиночнийх
  return (
    <ProductListFlex>
      {products.map((element, index) => (
        <ProductItem product={element} key={index} path="/" />
        /*  <ProductSingleItem product={element} key={index} /> */
      ))}
    </ProductListFlex>
  );
};
