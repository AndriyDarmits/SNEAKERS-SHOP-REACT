import { createGlobalStyle } from "styled-components";
import "./assets/fonts/fonts.css";

export const breakpoint = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};
export const device = {
  mobile: `max-width: ${breakpoint.mobile}`,
  tablet: `max-width: ${breakpoint.tablet}`,
  laptop: `max-width: ${breakpoint.laptop}`,
};

export const color = {
  black: "#000000",
  white: "#000000",
  greyDark: "#333333",
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

}
input[type="checkbox"] {
        accent-color: #dddddd;
      }
`;
