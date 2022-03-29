import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Slider,
} from "@mui/material";
import { SectionWrapper } from "../../reusable-styles/reusableStyle";

export const ShopPageSectionWrapper = styled(SectionWrapper)`
  margin-top: 42px;
  margin-bottom: 45px;
`;
export const ShopPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductsWrapper = styled.div`
  width: 75%;
  margin-left: 5px;
`;
export const SideBar = styled.aside`
  margin-top: 5px;
  margin-right: -5px;
  position: sticky;
  width: 25%;
  top: 82px;
  transition: all 0.5s linear;
  h2 {
    font-size: 18px;
    color: #333333;
    margin-bottom: 30px;
    text-transform: uppercase;
  }
`;

// !Material UI accordion customization
export const MuiAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#999999",
  boxShadow: "none",
  "&::before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: 0,
  },
}));
export const MuiAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: 0,
  minHeight: 0,
  marginBottom: "15px",
  "&.Mui-expanded": {
    marginBottom: 0,
    minHeight: 0,
  },
  ".MuiAccordionSummary-content": {
    margin: 0,
    "&.Mui-expanded": {
      margin: "10px 0",
    },
    p: {
      fontSize: "14px",
      fontFamily: "'Poppins',sans-serif",
    },
    ".MuiAccordionSummary-expandIconWrapper": {
      color: "#999999",
    },
  },
}));
export const MuiAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: "12px",
}));

export const SliderWrapper = styled.div`
  margin: 0 5px;
`;
// !Material UI slider customization
export const MuiSlider = styled(Slider)(({ theme }) => ({
  color: "#333333",
  padding: 0,
  "& .css-eg0mwd-MuiSlider-thumb": {
    width: "10px",
    height: "10px",
  },
  "& .MuiSlider-valueLabel": {
    fontSize: "10px",
    fontFamily: "'Poppins', sans-serif",
  },
}));
