import styled from "@emotion/styled";
import { color, font } from "../../../GlobalStyles";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Slider,
} from "@mui/material";

// !Material UI accordion customization
export const MuiAccordion = styled(Accordion)(() => ({
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
export const MuiAccordionSummary = styled(AccordionSummary)(() => ({
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
      fontFamily: `${font.poppins}`,
      cursor: "pointer",
    },
    ".MuiAccordionSummary-expandIconWrapper": {
      color: `${color.greyLight}`,
    },
  },
}));
export const MuiAccordionDetails = styled(AccordionDetails)(() => ({
  padding: "12px",
  "& .MuiTypography-root": {
    fontFamily: `${font.poppins}`,
  },
}));

// !Material UI slider customization
export const MuiSlider = styled(Slider)(() => ({
  color: "#333333",
  padding: 0,
  "& .MuiSlider-thumb": {
    width: "10px",
    height: "10px",
  },
  "& .MuiSlider-valueLabel": {
    fontSize: "11px",
    fontFamily: `${font.poppins}`,
    color: `${color.greyMedium}`,
    backgroundColor: `${color.white}`,
    borderRadius: "10px",
    border: `1px solid ${color.borderColorGrey}`,
    "&:before": {
      borderBottom: `1px solid ${color.borderColorGrey}`,
      borderRight: `1px solid ${color.borderColorGrey}`,
    },
  },
}));
