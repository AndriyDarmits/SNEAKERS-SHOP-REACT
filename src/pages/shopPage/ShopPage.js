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
  ShopPageBody,
  LoadingMessage,
} from "./ShopPage.style";
import { SidebarProductFilter } from "../../components/shopPage/sidebarProductsFilter.js/SidebarProductFilter";
import { ShopMenu } from "../../components/shopPage/shopMenu/ShopMenu";

const ShopPage = () => {
  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;
  const [productsData, setProductsData] = useState(products);
  // !PAGINATION
  const [, setSearchParams] = useSearchParams();
  const [productsPerPage] = useState(12);
  const initialPage = 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  //get current post

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
    setSearchParams({ page: initialPage });
  }, []);
  return (
    <ShopPageSectionWrapper>
      <Container>
        <ShopPageBody>
          {/* sidebar */}
          <SidebarProductFilter
            setProductsData={setProductsData}
            products={products}
            setSearchParams={setSearchParams}
            setCurrentPage={setCurrentPage}
            initialPage={initialPage}
          />
          {/* ============products============= */}
          <ProductsWrapper>
            <ShopMenu
              indexOfFirstProduct={indexOfFirstProduct}
              indexOfLastProduct={indexOfLastProduct}
              totalProducts={productsData.length}
            />
            {productsData.length ? (
              <Products
                products={currentProducts}
                setProductsData={setProductsData}
              />
            ) : (
              <LoadingMessage>Loading...</LoadingMessage>
            )}

            {/* =======pagination=========== */}
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={productsData.length}
              paginate={paginate}
            />
          </ProductsWrapper>
        </ShopPageBody>
      </Container>
    </ShopPageSectionWrapper>
  );
};
export default ShopPage;
