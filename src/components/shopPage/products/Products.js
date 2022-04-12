import styled from "styled-components";
import React from "react";
import { ProductSingleItem } from "../productItem/ProductSingleItem";
import { ProductItem } from "../productItem/ProductItem";
import { useSelector } from "react-redux";
const ProductListFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  justify-content: center;
`;
const ProductListSingleBlock = styled.div`
  display: block;
  margin-top: 5px;
`;

export const Products = ({ products }) => {
  const reduxStore = useSelector((state) => state);
  const { productsView } = reduxStore;
  return (
    <>
      {productsView ? (
        <ProductListSingleBlock>
          {products.map((element, index) => {
            return <ProductSingleItem product={element} key={element.id} />;
          })}
        </ProductListSingleBlock>
      ) : (
        <ProductListFlex>
          {products.map((element, index) => {
            return <ProductItem product={element} key={element.id} />;
          })}
        </ProductListFlex>
      )}
    </>
  );
};
