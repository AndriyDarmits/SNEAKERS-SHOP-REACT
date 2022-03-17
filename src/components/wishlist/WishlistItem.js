import React, { useEffect, useState } from "react";
import { AddToCartBtn, WishItem } from "./WishlistItem.styled";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const WishlistItem = ({ wishProduct }) => {
  return (
    <WishItem>
      <div>
        <AiFillDelete />
      </div>
      <div>
        <img src={wishProduct.images[0]} alt="" />
      </div>
      <div>
        <Link to={`/products/${wishProduct.id}`}>{wishProduct.title}</Link>
      </div>
      {/* TODO: implement adding product to cart*/}
      {/* <AddToCartBtn>
        <button>Add to cart</button>
      </AddToCartBtn> */}
    </WishItem>
  );
};
