import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Container, SectionWrapper } from "../../reusable-styles/reusableStyle";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Slider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
/* import { ProductItem } from "../../components/shopPage/productItem/ProductItem"; */
import { Products } from "../../components/shopPage/products/Products";
import { Pagination } from "../../components/shopPage/pagination/Pagination";
import { scrollUp } from "../../helper";

const ShopPageSectionWrapper = styled(SectionWrapper)`
  margin-top: 42px;
  margin-bottom: 45px;
`;
const ShopPageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
const SideBar = styled.aside`
  margin-top: 5px;
  margin-right: -5px;
  background-color: #444444;
  position: sticky;
  width: 25%;
  top: 82px;
  transition: all 0.5s linear;
  padding: 0 10px;
`;
const ProductsWrapper = styled.div`
  width: 75%;
  margin-left: 20px;
`;

export default function ShopPage() {
  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;
  // const [data, setData] = useState([]);
  //slider
  //TODO: fix
  const [value, setValue] = useState([10, 440]);
  function valuetext(value) {
    return `${value}`;
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

  //get currnet post
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
    setSearchParams({ page: pageNumber });
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
          <SideBar>
            {/* TODO: to style accordion */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>GENDER</Typography>
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>BRAND</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>adidas</p>
                  <p>nike</p>
                  <p>puma</p>
                  <p>new balance</p>
                  <p>native</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div>
              {/* TODO: to style slider */}
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={10}
                max={400}
              />
            </div>
            {/* edit */}
          </SideBar>
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
