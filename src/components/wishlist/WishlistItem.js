import React from "react";
import { AddToCartBtn, WishItem } from "./WishlistItem.styled";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

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
      <AddToCartBtn>
        <button>Add to cart</button>
      </AddToCartBtn>
    </WishItem>
  );
};
