import { createGlobalStyle } from "styled-components";
import PoppinsMedium from "./assets/fonts/Poppins-Medium.ttf";
import PoppinsSemiBold from "./assets/fonts/Poppins-SemiBold.ttf";
import PoppinsRegular from "./assets/fonts/Poppins-Regular.ttf";

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

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Poppins-Regular';
  src: url(${PoppinsRegular}) format('ttf');
       
}
@font-face {
  font-family: 'Poppins-SemiBold';
  src: url(${PoppinsSemiBold}) format('ttf');
  font-weight: 600;
       
}
@font-face {
  font-family: 'Poppins-Medium';
  src: url(${PoppinsMedium}) format('ttf');
  font-weight: 500;
       
}
`;

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
    font-family: 'Poppins-Regular', sans-serif;
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
