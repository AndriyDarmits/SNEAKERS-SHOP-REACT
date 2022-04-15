import React, { useEffect, useState } from "react";
import { CatagoryName, CategoriesList } from "./BlogCategory.style";
import { dataBlog } from "../../../components/home/main/recentBlog/dataBlog";

export const BlogCategories = ({ setDataBlogs }) => {
  const [categories, setCategories] = useState({
    all: true,
    man: false,
    woman: false,
    kid: false,
    fashion: false,
    lifestyle: false,
  });

  const selectCategories = (selectedCategory) => {
    //get length of selected categories to prevent selecting 2 categories in a row
    const getLength = Object.values(categories).filter((value) => value).length;
    if (getLength < 1) {
      for (let category in categories) {
        if (selectedCategory === category) {
          setCategories((state) => {
            return {
              ...state,
              [category]: true,
            };
          });
        }
      }
    } else {
      for (let category in categories) {
        if (selectedCategory === category) {
          setCategories((state) => {
            const copyState = { ...state };
            for (let copyElement in copyState) {
              copyState[copyElement] = false;
            }
            return {
              ...copyState,
              [category]: true,
            };
          });
        }
      }
    }
  };
  const undelineSelectedItem = (selectedItem) => {
    return {
      color: selectedItem ? "#8c3717" : "#666666",
    };
  };

  useEffect(() => {
    const copyDataBlog = [...dataBlog];
    const filterdBlog = copyDataBlog.filter((blog) => {
      if (categories.all) {
        return blog;
      }
      let check;
      for (let elem in categories) {
        if (categories[elem]) {
          check = elem;
        }
      }
      return blog.category === check;
    });
    setDataBlogs(filterdBlog);
  }, [categories]);

  return (
    <CategoriesList>
      {Object.keys(categories).map((category, index) => (
        <>
          <CatagoryName key={index}>
            <button
              onClick={() => selectCategories(category)}
              style={undelineSelectedItem(categories[category])}
            >
              {category.slice(0, 1).toUpperCase() + category.slice(1)}
            </button>
          </CatagoryName>
        </>
      ))}
    </CategoriesList>
  );
};
