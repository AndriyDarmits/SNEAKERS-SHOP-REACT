import React, { useState } from "react";
import { useSelector } from "react-redux";
import { WishlistItem } from "../../components/wishlist/WishlistItem";
import {
  WishListContainer,
  WishListDiv,
  WishListWrapper,
} from "./Wishlist.style";
import { color } from "../../GlobalStyles";

export const WishlistPage = () => {
  const redux = useSelector((state) => state);
  const { wishlist } = redux;

  return (
    <WishListWrapper>
      <WishListContainer>
        <WishListDiv>
          {wishlist.length ? (
            wishlist.map((wishProduct) => (
              <WishlistItem wishProduct={wishProduct} key={wishlist.id} />
            ))
          ) : (
            <h2
              style={{
                textAlign: "center",
              }}
            >
              No products in wishlist
            </h2>
          )}
        </WishListDiv>
      </WishListContainer>
    </WishListWrapper>
  );
};
