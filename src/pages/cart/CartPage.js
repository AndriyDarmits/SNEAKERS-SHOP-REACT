import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartListComp } from "../../components/cart/CartListComp";
import CartTotalComp from "../../components/cart/CartTotalComp";
import Coupon from "../../components/cart/Coupon";
import { scrollUp } from "../../helper";
import { Container } from "../../reusable-styles/reusableStyle";
import { CartWrapper, CheckOut } from "./CartPage.style";
export default function CartPage() {
  const redux = useSelector((state) => state);
  const { productsCart } = redux;

  // scroll
  useEffect(() => scrollUp(0), []);
  return (
    <CartWrapper>
      <Container>
        <CartListComp />
        {productsCart.length > 0 && (
          <>
            <Coupon />
            <CartTotalComp />
            <Link to="/checkout">
              <CheckOut>
                <button>Process to check out</button>
              </CheckOut>
            </Link>
          </>
        )}
      </Container>
    </CartWrapper>
  );
}
