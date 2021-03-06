import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { color, font } from "../../../GlobalStyles";
import actions from "../../../redux/actions/index";
import {
  MuiAccordion,
  MuiAccordionDetails,
  MuiAccordionSummary,
  MuiSlider,
} from "./MUIComponentsCustimization.style";
import {
  FilterBtn,
  SideBar,
  SideBarWrapper,
  SliderWrapper,
} from "./SidebarProductFilter.style";

export const SidebarProductFilter = ({
  setProductsData,
  products,
  setSearchParams,
  setCurrentPage,
  initialPage,
}) => {
  const { showSidebar } = useSelector((state) => state);
  const dispatch = useDispatch();
  const tablet = useMediaQuery({ maxWidth: 768 });
  //slider
  const [value, setValue] = useState([10, 440]);
  //!filtering
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [brands, setBrands] = useState({
    all: true,
    adidas: false,
    nike: false,
    puma: false,
    "new balance": false,
    native: false,
    converse: false,
    reebok: false,
  });

  function valueLabelFormat(value) {
    return `$ ${value}`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // underline when category is selected
  const undelineSelectedItem = (selectedItem) => {
    return {
      borderBottom: selectedItem
        ? `1px solid ${color.borderColorGrey}`
        : "1px solid transparent",
      cursor: "pointer",
    };
  };

  //!filtering
  const selectBrands = (selectedBrand) => {
    //get length of selected categories to prevent selecting 2 categories in a row
    const getLength = Object.values(brands).filter((value) => value).length;
    if (getLength < 1) {
      for (let brand in brands) {
        if (selectedBrand === brand) {
          setBrands((state) => {
            return {
              ...state,
              [brand]: true,
            };
          });
        }
      }
    } else {
      for (let brand in brands) {
        if (selectedBrand === brand) {
          setBrands((state) => {
            const copyState = { ...state };
            for (let copyElement in copyState) {
              copyState[copyElement] = false;
            }
            return {
              ...copyState,
              [brand]: true,
            };
          });
        }
      }
    }
  };

  // filter products by selected categories
  const applyFilter = () => {
    const productsCopy = [...products];
    const filteredProducts = productsCopy
      .filter((product) => {
        return (
          (men && women) ||
          (men && product.category === "Man's") ||
          (women && product.category === "Woman's") ||
          (!men && !women)
        );
      })
      .filter((product) => {
        if (brands.all) {
          return product;
        }
        let check;
        for (let elem in brands) {
          if (brands[elem]) {
            check = elem;
          }
        }
        return product.brand === check;
      })
      .filter((product) => {
        return +product.price >= value[0] && +product.price <= value[1];
      });
    // set initial page
    setSearchParams({ page: initialPage });
    setCurrentPage(initialPage);
    //check if windiw is tablet(for closing sidebar)
    if (tablet) {
      dispatch(actions.setShowSidebar());
    }

    // TODO: set delay correctly
    setProductsData([]);
    setTimeout(() => {
      setProductsData(filteredProducts);
    }, 500);
  };
  return (
    <SideBarWrapper showSidebar={showSidebar}>
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
                style={undelineSelectedItem(men)}
              >
                Man's
              </p>
              <p
                onClick={() => setWomen((state) => !state)}
                style={undelineSelectedItem(women)}
              >
                Woman's
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
              {Object.keys(brands).map((brand, index) => {
                return (
                  <p
                    onClick={() => selectBrands(brand)}
                    style={undelineSelectedItem(brands[brand])}
                    key={index}
                  >
                    {brand.slice(0, 1).toUpperCase() + brand.slice(1)}
                  </p>
                );
              })}
            </Typography>
          </MuiAccordionDetails>
        </MuiAccordion>
        <h2>Price</h2>
        {/* =====slider price range===== */}
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
        {/* =========button=========== */}
        <FilterBtn onClick={() => applyFilter()}>
          <button>Filter</button>
        </FilterBtn>
      </SideBar>
    </SideBarWrapper>
  );
};
