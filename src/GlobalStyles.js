import { createGlobalStyle } from "styled-components";
import "./assets/fonts/fonts.scss";
export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Poppins-Regular'

}
html{
    font-size: 14px;
}

a{
    text-decoration: none;
    
}
p{
    margin:0;
}
`;

//                                       ========VAR================

export const backgrounds = {
  grey: `#333333`,
};

export const colors = {};
