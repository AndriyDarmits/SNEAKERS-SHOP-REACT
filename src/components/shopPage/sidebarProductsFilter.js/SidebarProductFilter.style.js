import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Slider,
} from "@mui/material";
import { Button } from "../../../reusable-styles/reusableStyle";

// sidebar
export const SideBarWrapper = styled.div`
  margin-top: 5px;
  margin-right: -5px;
  transition: all 0.5s linear;
  width: 25%;
  padding: 10px;
`;

export const SideBar = styled.aside`
  position: sticky;
  width: 100%;
  top: 82px;
  h2 {
    font-size: 18px;
    color: #333333;
    margin-bottom: 30px;
    text-transform: uppercase;
  }
`;
export const FilterBtn = styled(Button)`
  button {
    color: #fff;
  }
`;
export const SliderWrapper = styled.div`
  margin: 0 5px;
  margin-bottom: 20px;
`;
export const LoadingMessage = styled.div`
  flex-grow: 1;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
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
      corsor: "pointer",
    },
    ".MuiAccordionSummary-expandIconWrapper": {
      color: "#999999",
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