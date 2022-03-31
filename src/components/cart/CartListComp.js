import React from "react";
import CartItem from "./CartItem";
import { CartHeader, CartList, CartListWrapper } from "./CartComponents.style";
import { useSelector } from "react-redux";

export const CartListComp = () => {
  const reduxStore = useSelector((state) => state);
  const { productsCart } = reduxStore;

  return (
    <CartListWrapper>
      <CartHeader>
        <div></div>
        <div>Product</div>
        <div>Name</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </CartHeader>
      <CartList>
        {productsCart.length > 0
          ? productsCart.map((product, index) => (
              <CartItem product={product} key={index} />
            ))
          : "The cart is empty...."}
      </CartList>
    </CartListWrapper>
  );
};
