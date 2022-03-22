import React, { useState } from "react";

import cancel from "../../assets/icons/cart/cancel.png";
import inc from "../../assets/icons/cart/inc.png";
import dec from "../../assets/icons/cart/dec.png";
import { Link } from "react-router-dom";
import { CartProductItem, ProductQuantityCart } from "./CartComponents.style";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/index";
export default function CartItem({ productCart }) {
  // get data from redux
  const redux = useSelector((state) => state);
  const { products } = redux;
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    const data = { ...productCart };
    data.count = data.count + 1;
    dispatch(actions.updateProductsCart(data));
  };
  const decreaseQuantity = () => {
    const data = { ...productCart };
    if (data.count <= 1) {
      data.count = 1;
    } else {
      data.count = data.count - 1;
    }
    dispatch(actions.updateProductsCart(data));
  };

  const deleteProductsFromCart = () => {
    const data = [
      ...products.filter((product) => product.id === productCart.id),
    ][0];
    data.isInShoppingCart = false;
    // delete product from shopping cart
    dispatch(actions.deleteProductsFromCart(productCart));
    // update isInShoppingCart prop. in products state
    dispatch(actions.updateProducts(data));
  };

  return (
    <CartProductItem>
      <div onClick={() => deleteProductsFromCart()}>
        <img src={cancel} alt="" />
      </div>
      <div>
        <img src={productCart.images[0]} alt="" />
      </div>
      <div>
        <Link to={`/products/${productCart.id}`}>{productCart.title}</Link>
      </div>
      <div>$ {(+productCart.price).toFixed(2)}</div>
      <div>
        <ProductQuantityCart>
          <div>{productCart.count}</div>
          <div>
            <div onClick={() => increaseQuantity()}>
              <img src={inc} alt="increment" />
            </div>
            <div onClick={() => decreaseQuantity()}>
              <img src={dec} alt="decrement" />
            </div>
          </div>
        </ProductQuantityCart>
      </div>

      <div>$ {(+productCart.price * productCart.count).toFixed(2)}</div>
    </CartProductItem>
  );
}
