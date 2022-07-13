import { createGlobalStyle } from "styled-components";
import PoppinsMedium from "./assets/fonts/Poppins-Medium.ttf";
import PoppinsSemiBold from "./assets/fonts/Poppins-SemiBold.ttf";
import PoppinsRegular from "./assets/fonts/Poppins-Regular.ttf";
import PermanentMarkerRegular from "./assets/fonts/PermanentMarker-Regular.ttf";
import MontserratMedium from "./assets/fonts/Montserrat-Medium.ttf";
import MontserratRegular from "./assets/fonts/Montserrat-Regular.ttf";
import MontserratSemiBold from "./assets/fonts/Montserrat-SemiBold.ttf";
import { useSelector } from "react-redux";

export const breakpoint = {
  mobile: "376px",
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
  white: "#ffffff",
  greyDark: "#333333",
  greyMedium: "#666666",
  greyLight: "#999999",
  borderColorGrey: "#ebebeb",
};
export const font = {
  poppins: '"Poppins", sans-serif',
  montserrat: '"Montserrat", sans-serif',
  permanentMarker: '"Permanent Marker", sans-serif',
};

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsRegular}) format('truetype');
  font-weight: normal;
  font-style: normal;
       
}
@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsSemiBold}) format('truetype');
  font-weight: 600;
  font-style: normal;     
}
@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsMedium}) format('truetype');
  font-weight: 500;
  font-style: normal;     
}
@font-face {
  font-family: 'Permanent Marker';
  src: url(${PermanentMarkerRegular}) format('truetype');
  font-weight: normal;
  font-style: normal;     
}
@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratRegular}) format('truetype');
  font-weight: normal;
  font-style: normal;     
}
@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratSemiBold}) format('truetype');
  font-weight: 600;
  font-style: normal;     
}
@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratMedium}) format('truetype');
  font-weight: 500;
  font-style: normal;     
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
    font-family: ${font.poppins};
    font-weight: normal;
    color:${color.black};
    overflow:${(props) => (props.bodyOverfow ? "hidden" : "auto")} ;
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
button{
  font-family: ${font.poppins};
}
#root{
display:flex;
flex-direction:column;

}
input[type="checkbox"] {
        accent-color: #dddddd;
      }
`;
