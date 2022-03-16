import { logRoles } from "@testing-library/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { WishlistItem } from "../../components/wishlist/WishlistItem";
import {
  WishListContainer,
  WishListDiv,
  WishListWrapper,
} from "./Wishlist.style";

export const WishlistPage = () => {
  const redux = useSelector((state) => state);
  const { wishlist } = redux;
  console.log(wishlist);

  return (
    <WishListWrapper>
      <WishListContainer>
        <WishListDiv>
          {wishlist.length ? (
            wishlist.map((wishProduct) => (
              <WishlistItem wishProduct={wishProduct} />
            ))
          ) : (
            <h2>No products in wishlist</h2>
          )}
        </WishListDiv>
      </WishListContainer>
    </WishListWrapper>
  );
};
