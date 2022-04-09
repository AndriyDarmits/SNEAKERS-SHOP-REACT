import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../../reusable-styles/reusableStyle";
/* import { ProductItem } from "../../components/shopPage/productItem/ProductItem"; */
import { Products } from "../../components/shopPage/products/Products";
import { Pagination } from "../../components/shopPage/pagination/Pagination";
import { scrollUp } from "../../helper";
import {
  ProductsWrapper,
  ShopPageSectionWrapper,
  ShopPageWrapper,
  LoadingMessage,
} from "./ShopPage.style";
import { SidebarProductFilter } from "../../components/shopPage/sidebarProductsFilter.js/SidebarProductFilter";

const ShopPage = () => {
  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;
  const [productsData, setProductsData] = useState(products);

  // !PAGINATION
  const [, setSearchParams] = useSearchParams();
  const [productsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  //get current post
  const getCurrentPoducts = (currentPage, productsPerPage) => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = (productsData || products).slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    return currentProducts;
  };
  // fire on switching page
  const paginate = (pageNumber) => {
    const params = {};
    params.page = pageNumber;
    setSearchParams(params);
    setCurrentPage(pageNumber);
  };

  // scroll up, after switching page
  useEffect(() => {
    scrollUp(250);
  }, [currentPage, productsData]);

  useEffect(() => {
    setSearchParams({ page: 1 });
  }, []);

  return (
    <ShopPageSectionWrapper>
      <Container>
        <ShopPageWrapper>
          {/* sidebar */}
          <SidebarProductFilter
            setProductsData={setProductsData}
            products={products}
          />
          {/* ============products============= */}
          <ProductsWrapper>
            {productsData.length ? (
              <Products
                products={getCurrentPoducts(currentPage, productsPerPage)}
              />
            ) : (
              <LoadingMessage>Loading...</LoadingMessage>
            )}

            {/* =======pagination=========== */}
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={(productsData || products).length}
              paginate={paginate}
            />
          </ProductsWrapper>
        </ShopPageWrapper>
      </Container>
    </ShopPageSectionWrapper>
  );
};
export default ShopPage;
