import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
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
import { ProductItem } from "../../components/shopPage/productItem/ProductItem";

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

const ProductListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  transition: all 0.5s linear;
  margin-left: 20px;
`;

export default function ShopPage() {
  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;

  function valuetext(value) {
    return `${value}`;
  }

  const [value, setValue] = React.useState([10, 440]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ShopPageSectionWrapper>
      <Container>
        <ShopPageWrapper>
          <SideBar>
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
                  <p>Men's</p>
                  <p>Women's</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div>
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
          </SideBar>
          <ProductListDiv>
            {products.map((element) => (
              <ProductItem product={element} />
            ))}
          </ProductListDiv>
        </ShopPageWrapper>
      </Container>
    </ShopPageSectionWrapper>
  );
}
