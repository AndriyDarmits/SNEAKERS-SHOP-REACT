import React from "react";
import { ProductSingleItem } from "../productItem/ProductSingleItem";
import { ProductItem } from "../productItem/ProductItem";
import { useSelector } from "react-redux";
import { ProductListFlex, ProductListSingleBlock } from "./Products.style";

export const Products = ({ products, setProductsData }) => {
  const reduxStore = useSelector((state) => state);
  const { productsView } = reduxStore;
  return (
    <>
      {productsView ? (
        <ProductListSingleBlock>
          {products.map((element, index) => {
            return (
              <ProductSingleItem
                product={element}
                setProductsData={setProductsData}
                key={element.id}
              />
            );
          })}
        </ProductListSingleBlock>
      ) : (
        <ProductListFlex>
          {products.map((element, index) => {
            return (
              <ProductItem
                product={element}
                setProductsData={setProductsData}
                key={element.id}
              />
            );
          })}
        </ProductListFlex>
      )}
    </>
  );
};
