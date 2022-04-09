import React from "react";
import { CatagoryName, CategoriesList } from "./BlogCategory.style";

export const BlogCategories = () => {
  return (
    <CategoriesList>
      <CatagoryName>
        <button>All</button>
      </CatagoryName>
      <CatagoryName>
        <button>Man</button>
      </CatagoryName>
      <CatagoryName>
        <button>Woman</button>
      </CatagoryName>
      <CatagoryName>
        <button>Kid</button>
      </CatagoryName>
      <CatagoryName>
        <button>Fashion</button>
      </CatagoryName>
      <CatagoryName>
        <button>Lifestyle</button>
      </CatagoryName>
    </CategoriesList>
  );
};
