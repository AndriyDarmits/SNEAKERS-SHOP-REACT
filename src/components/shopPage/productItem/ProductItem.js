import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ProductContent,
  ProductImageWrapper,
  ProductItemDiv,
  ProductImageOverlay,
  AddToCartAndViewIcons,
  WishListIcon,
} from "./ProductItem.style";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import actions from "../../../redux/actions/index";
import { FaEye, FaCartPlus, FaCheck } from "react-icons/fa";

export const ProductItem = ({ product }) => {
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
    } else {
      // remove itemdelete products from wishlist
      dispatch(actions.deleteProductFromWishlist(data));
      // update changes in product data
      data.isInWishList = false;
      dispatch(actions.updateProducts(data));
    }
  };

  return (
    <ProductItemDiv
      onMouseLeave={() => setIsVisiableIcon((state) => !state)}
      onMouseEnter={() => setIsVisiableIcon((state) => !state)}
    >
      <ProductImageWrapper>
        <img src={product.images[0]} alt="" />
        <ProductImageOverlay
          style={{
            visibility: isVisiableIcon ? "visible" : "hidden",
            top: isVisiableIcon ? "0" : "5px",
          }}
        >
          <AddToCartAndViewIcons>
            <span>
              <FaEye onClick={() => navigate(`${product.id}`)} />
            </span>

            <span>
              {product.isInShoppingCart ? (
                <FaCheck />
              ) : (
                <FaCartPlus onClick={() => navigate(`${product.id}`)} />
              )}
            </span>
          </AddToCartAndViewIcons>
          <WishListIcon onClick={() => onAddToWishlist()}>
            {product?.isInWishList ? (
              <FavoriteIcon
                style={{
                  color: "red",
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
          <Link to={`${product.id}`}>{product.title}</Link>
        </h5>

        <p>$ {(+product.price).toFixed(2)}</p>
      </ProductContent>
    </ProductItemDiv>
  );
};
