import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import actions from "../../../redux/actions/index";
import { FaEye, FaCartPlus, FaCheck } from "react-icons/fa";

import {
  ProductContent,
  ProductImageWrapper,
  ProductItemWrapper,
  ProductPrice,
  Description,
  ViewAndWishlistIcons,
  AddToCartBtn,
} from "./ProductSingleItem.style";

export const ProductSingleItem = ({ product, setProductsData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //TODO: make reusable
  const onAddToWishlist = () => {
    // copy data without reference
    const data = { ...product };
    // dispatch data to redux store
    if (!product.isInWishList) {
      data.isInWishList = true;
      // add item to wishlist
      dispatch(actions.addProductToWishlist(data));
      // update changes in product data
      dispatch(actions.updateProducts(data));
      //!explanation
      setProductsData((state) => {
        return state.map((product) => {
          if (product.id === data.id) {
            return data;
          }
          return product;
        });
      });
    } else {
      // remove itemdelete products from wishlist
      dispatch(actions.deleteProductFromWishlist(data));
      // update changes in product data
      data.isInWishList = false;
      dispatch(actions.updateProducts(data));
      //!explanation
      setProductsData((state) => {
        return state.map((product) => {
          if (product.id === data.id) {
            return data;
          }
          return product;
        });
      });
    }
  };

  return (
    <ProductItemWrapper>
      <ProductImageWrapper>
        <img src={product.images[0]} alt="" />
      </ProductImageWrapper>
      <ProductContent>
        <h2>{product.title}</h2>
        <ProductPrice>$ {product.price}</ProductPrice>
        <Description>{product.description.slice(0, 80)}...</Description>
        <ViewAndWishlistIcons>
          <span>
            <FaEye onClick={() => navigate(`${product.id}`)} />
          </span>
          <span onClick={() => onAddToWishlist()}>
            {product?.isInWishList ? (
              <FavoriteIcon
                style={{
                  color: "#bf1414",
                }}
              />
            ) : (
              <FavoriteBorderIcon />
            )}
          </span>
        </ViewAndWishlistIcons>
        <AddToCartBtn>
          {product.isInShoppingCart ? (
            <button>In cart</button>
          ) : (
            <button onClick={() => navigate(`${product.id}`)}>
              Add to cart
            </button>
          )}
        </AddToCartBtn>
      </ProductContent>
    </ProductItemWrapper>
  );
};
