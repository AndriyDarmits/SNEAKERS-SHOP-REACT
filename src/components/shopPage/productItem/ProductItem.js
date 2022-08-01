import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";
import { FaCartPlus, FaCheck, FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import actions from "../../../redux/actions/index";
import {
  AddToCartAndViewIcons,
  ProductContent,
  ProductImageOverlay,
  ProductImageWrapper,
  ProductItemDiv,
  WishListIcon,
} from "./ProductItem.style";

export const ProductItem = ({ product, setProductsData }) => {
  const [isVisiableIcon, setIsVisiableIcon] = useState(false);
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

      // update local dataState, to set isInWishList icon red
      if (typeof setProductsData !== "undefined") {
        //! because this component uses in other places without product Data state
        setProductsData((state) => {
          return state.map((product) => {
            if (product.id === data.id) {
              return data;
            }
            return product;
          });
        });
      }
    } else {
      // remove itemdelete products from wishlist
      dispatch(actions.deleteProductFromWishlist(data));
      // update changes in product data
      data.isInWishList = false;
      dispatch(actions.updateProducts(data));

      //update local dataState, to show isInWishList checker
      //!!
      if (typeof setProductsData !== "undefined") {
        setProductsData((state) => {
          return state.map((product) => {
            if (product.id === data.id) {
              return data;
            }
            return product;
          });
        });
      }
    }
  };

  return (
    <ProductItemDiv
      onPointerLeave={() => setIsVisiableIcon((state) => !state)}
      onPointerEnter={() => setIsVisiableIcon((state) => !state)}
    >
      <ProductImageWrapper>
        <img src={product.images[0]} alt="" loading="lazy" />
        <ProductImageOverlay
          style={{
            visibility: isVisiableIcon ? "visible" : "hidden",
            top: isVisiableIcon ? "0" : "5px",
          }}
        >
          <AddToCartAndViewIcons>
            <span>
              <FaEye onClick={() => navigate(`/products/${product.id}`)} />
            </span>

            <span>
              {product.isInShoppingCart ? (
                <FaCheck />
              ) : (
                <FaCartPlus
                  onClick={() => navigate(`/products/${product.id}`)}
                />
              )}
            </span>
          </AddToCartAndViewIcons>
          <WishListIcon onClick={() => onAddToWishlist()}>
            {product.isInWishList ? (
              <FavoriteIcon
                style={{
                  color: "#bf1414",
                }}
              />
            ) : (
              <FavoriteBorderIcon style={{ color: `#666666` }} />
            )}
          </WishListIcon>
        </ProductImageOverlay>
      </ProductImageWrapper>
      <ProductContent>
        <h5>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </h5>

        <p>$ {(+product.price).toFixed(2)}</p>
      </ProductContent>
    </ProductItemDiv>
  );
};
