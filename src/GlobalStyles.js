import { createGlobalStyle } from "styled-components";
import "./assets/fonts/fonts.css";

export const breakpoint = {
  mobileM: "374px",
  tablet: "767px",
  laptop: "1024px",
};
export const device = {
  mobileS: `max-width: ${breakpoint.mobileM}`,
  mobile: `max-width: ${breakpoint.tablet}`,
  tablet: `max-width: ${breakpoint.laptop}`,
};

export const color = {
  black: "#000000",
  white: "#000000",
  greyDark: "#666666",
  greyMedium: "#666666",
  greyLight: "#999999",
  bordercolorGrey: "ebebebe",
};

export const GlobalStyles = createGlobalStyle`
*,
    ::before,
    ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

html{
    font-size: 14px;
}

body{
    font-family: 'Poppins', sans-serif;
}
a{
    text-decoration: none;
    
}
p{
    margin:0;
}
li{
    list-style: none;
}
#root{
display:flex;
flex-direction:column;
overflow:hidden;
}
`;
