import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartListComp } from "../../components/cart/CartListComp";
import CartTotalComp from "../../components/cart/CartTotalComp";
import Coupon from "../../components/cart/Coupon";

import { Container } from "../../reusable-styles/reusableStyle";
import { ApplyCoupon, CartWrapper, CheckOut } from "./CartPage.style";
export default function CartPage() {
  const redux = useSelector((state) => state);
  const { productsCart } = redux;

  return (
    <CartWrapper>
      <Container>
        <CartListComp />
        <ApplyCoupon>
          <Coupon />
        </ApplyCoupon>
        <CartTotalComp />
        {/* TODO: перевірити, може зробити приватний роут */}
        {productsCart.length ? (
          <Link to="/checkout">
            <CheckOut>
              <button>Process to check out</button>
            </CheckOut>
          </Link>
        ) : (
          ""
        )}
      </Container>
    </CartWrapper>
  );
}
