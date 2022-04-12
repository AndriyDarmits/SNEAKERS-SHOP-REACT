import React, { useState } from "react";
import { ShopMenuWrapper, ShowRangeProducts, View } from "./ShopMenu.style";
import actions from "../../../redux/actions/index";
import { FaTh, FaThList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
export const ShopMenu = () => {
  const reduxStore = useSelector((state) => state);
  const { productsView } = reduxStore;
  const dispatch = useDispatch();
  return (
    <ShopMenuWrapper>
      <ShowRangeProducts>
        Showing <span></span> <span></span> of <span></span> results
      </ShowRangeProducts>
      <View>
        <div onClick={() => dispatch(actions.changeLayout())}>
          <FaTh style={{ color: productsView ? "#999999" : "#333333" }} />
        </div>
        <div onClick={() => dispatch(actions.changeLayout())}>
          <FaThList style={{ color: productsView ? "#333333" : "#999999" }} />
        </div>
      </View>
    </ShopMenuWrapper>
  );
};
