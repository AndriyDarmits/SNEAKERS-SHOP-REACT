import React, { useState } from "react";
import {
  ShopMenuWrapper,
  ShowRangeProducts,
  SideBarIcon,
  View,
} from "./ShopMenu.style";
import actions from "../../../redux/actions/index";
import { FaTh, FaThList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { FaFilter } from "react-icons/fa";
import { color } from "../../../GlobalStyles";

export const ShopMenu = ({
  indexOfFirstProduct,
  indexOfLastProduct,
  totalProducts,
}) => {
  const reduxStore = useSelector((state) => state);
  const { productsView } = reduxStore;
  const dispatch = useDispatch();
  const tablet = useMediaQuery({ maxWidth: 768 });

  return (
    <ShopMenuWrapper>
      {tablet && (
        <SideBarIcon onClick={() => dispatch(actions.setShowSidebar())}>
          <FaFilter />
        </SideBarIcon>
      )}
      <ShowRangeProducts>
        Showing <span>{indexOfFirstProduct + 1}</span>-
        <span>{indexOfLastProduct - 1}</span> of <span>{totalProducts}</span>{" "}
        results
      </ShowRangeProducts>
      <View>
        <div onClick={() => dispatch(actions.changeLayout())}>
          <FaTh
            style={{
              color: productsView ? `${color.greyLight}` : `${color.greyDark}`,
            }}
          />
        </div>
        <div onClick={() => dispatch(actions.changeLayout())}>
          <FaThList
            style={{
              color: productsView ? `${color.greyDark}` : `${color.greyLight}`,
            }}
          />
        </div>
      </View>
    </ShopMenuWrapper>
  );
};
