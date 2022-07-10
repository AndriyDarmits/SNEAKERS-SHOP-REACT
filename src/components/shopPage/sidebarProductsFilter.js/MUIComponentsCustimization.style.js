import styled from "@emotion/styled";
import { color } from "../../../GlobalStyles";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Slider,
} from "@mui/material";

// !Material UI accordion customization
export const MuiAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "transparent",
  color: `${color.greyLight}`,
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
      cursor: "pointer",
    },
    ".MuiAccordionSummary-expandIconWrapper": {
      color: `${color.greyLight}`,
    },
  },
}));
export const MuiAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: "12px",
}));

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
