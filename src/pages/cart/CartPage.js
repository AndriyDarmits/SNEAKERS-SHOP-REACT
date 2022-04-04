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
  const [discount, setDiscount] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(1);

  return (
    <CartWrapper>
      <Container>
        <CartListComp />
        {productsCart.length > 0 && (
          <>
            <ApplyCoupon>
              <Coupon
                setDiscount={setDiscount}
                setDiscountAmount={setDiscountAmount}
              />
            </ApplyCoupon>
            <CartTotalComp
              discount={discount}
              discountAmount={discountAmount}
            />
            {/* TODO: перевірити, може зробити приватний роут */}
            {productsCart.length ? (
              <Link to="/checkout">
                <CheckOut>
                  <button>Process to check out</button>
                </CheckOut>
              </Link>
            ) : null}
          </>
        )}
      </Container>
    </CartWrapper>
  );
}
