import React, { useEffect, useState } from "react";
import { WishItem } from "./WishlistItem.styled";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/index";

export const WishlistItem = ({ wishProduct }) => {
  const dispatch = useDispatch();

  const deleteProductsFromWishlist = () => {
    const data = { ...wishProduct };
    dispatch(actions.deleteProductFromWishlist(data));
    data.isInWishList = false;
    dispatch(actions.updateProducts(data));
  };
  return (
    <WishItem>
      <div onClick={() => deleteProductsFromWishlist()}>
        <AiFillDelete />
      </div>
      <div>
        <img src={wishProduct.images[0]} alt="" />
      </div>
      <div>
        <Link to={`/products/${wishProduct.id}`}>{wishProduct.title}</Link>
      </div>
    </WishItem>
  );
};
