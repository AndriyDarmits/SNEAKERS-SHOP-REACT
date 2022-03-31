import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../../reusable-styles/reusableStyle";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
/* import { ProductItem } from "../../components/shopPage/productItem/ProductItem"; */
import { Products } from "../../components/shopPage/products/Products";
import { Pagination } from "../../components/shopPage/pagination/Pagination";
import { scrollUp } from "../../helper";
import {
  MuiAccordion,
  MuiAccordionDetails,
  MuiAccordionSummary,
  MuiSlider,
  ProductsWrapper,
  ShopPageSectionWrapper,
  ShopPageWrapper,
  SideBar,
  SideBarWrapper,
  SliderWrapper,
} from "./ShopPage.style";

export default function ShopPage() {
  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;
  // const [data, setData] = useState([]);

  //slider
  const [value, setValue] = useState([10, 440]);
  function valueLabelFormat(value) {
    return `$ ${value}`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //!filtering

  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  /*
    useEffect(() => {
    const dataFromRedux = [...products].filter((product) => {
      if (men && women) {
        return product;
      } else if (men) {
        return product.category === "Man's";
      } else if (women) {
        return product.category === "Woman's";
      }
      return product;
    });
    if (men && women) {
      setSearchParams({ page: 1, mans: true, womans: true });
    } else if (men) {
      setSearchParams({ page: 1, mans: true });
    } else if (women) {
      setSearchParams({ page: 1, womans: true });
    } else {
      setSearchParams({ page: 1 });
    }

    setCurrentPage(1);
    setData(dataFromRedux);

    console.log(dataFromRedux);
  }, [men, women]);
 */
  // !PAGINATION

  const [searchParams, setSearchParams] = useSearchParams();
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  //get current post
  // cuttent page = 3
  const getCurrentPoducts = (currentPage, productsPerPage) => {
    const indexOfLastProduct = currentPage * productsPerPage; // 30
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 30-10 = 20
    const currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    return currentProducts;
  };

  const paginate = (pageNumber) => {
    const params = {};
    params.page = pageNumber;
    setSearchParams(params);
    setCurrentPage(pageNumber);
  };

  // scroll up, after switching page
  useEffect(() => {
    scrollUp(250);
  }, [currentPage]);

  useEffect(() => {
    setSearchParams({ page: 1 });
  }, []);

  return (
    <ShopPageSectionWrapper>
      <Container>
        <ShopPageWrapper>
          <SideBarWrapper>
            <SideBar>
              <h2>Categories</h2>
              <MuiAccordion>
                <MuiAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>GENDER</Typography>
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                  <Typography>
                    <p
                      onClick={() => setMen((state) => !state)}
                      style={{
                        borderBottom: men
                          ? "1px solid #ebebeb"
                          : "1px solid transparent",
                      }}
                    >
                      Men's
                    </p>
                    <p
                      onClick={() => setWomen((state) => !state)}
                      style={{
                        borderBottom: women
                          ? "1px solid #ebebeb"
                          : "1px solid transparent",
                      }}
                    >
                      Women's
                    </p>
                  </Typography>
                </MuiAccordionDetails>
              </MuiAccordion>
              <MuiAccordion>
                <MuiAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>BRAND</Typography>
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                  <Typography>
                    <p>adidas</p>
                    <p>nike</p>
                    <p>puma</p>
                    <p>new balance</p>
                    <p>native</p>
                  </Typography>
                </MuiAccordionDetails>
              </MuiAccordion>
              <h2>Price</h2>
              <SliderWrapper>
                <MuiSlider
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  getAriaValueText={valueLabelFormat}
                  valueLabelFormat={valueLabelFormat}
                  min={10}
                  max={400}
                />
              </SliderWrapper>
            </SideBar>
          </SideBarWrapper>
          <ProductsWrapper>
            <Products
              products={getCurrentPoducts(currentPage, productsPerPage)}
            />
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
            />
          </ProductsWrapper>
        </ShopPageWrapper>
      </Container>
    </ShopPageSectionWrapper>
  );
}
