import React, { useState } from "react";
import cancel from "../../assets/icons/cart/cancel.png";
import inc from "../../assets/icons/cart/inc.png";
import dec from "../../assets/icons/cart/dec.png";
import { Link } from "react-router-dom";
import { CartProductItem, ProductQuantityCart } from "./CartComponents.style";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions/index";
export default function CartItem({ product }) {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    const data = { ...product };
    data.count = data.count + 1;
    dispatch(actions.updateProductsCart(data));
  };
  const decreaseQuantity = () => {
    const data = { ...product };
    if (data.count <= 1) {
      data.count = 1;
    } else {
      data.count = data.count - 1;
    }
    dispatch(actions.updateProductsCart(data));
  };

  const deleteProductsFromCart = () => {
    const data = { ...product };
    data.isInShoppingCart = false;
    // delete product from shopping cart
    dispatch(actions.deleteProductsFromCart(data));
    // update isInShoppingCart prop. in products state
    dispatch(actions.updateProducts(data));
  };

  return (
    <CartProductItem>
      <div onClick={() => deleteProductsFromCart()}>
        <img src={cancel} alt="" />
      </div>
      <div>
        <img src={product.images[0]} alt="" />
      </div>
      <div>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </div>
      <div>$ {(+product.price).toFixed(2)}</div>
      <div>
        <ProductQuantityCart>
          <div>{product.count}</div>
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
      <div>$ {(product.price * product.count).toFixed(2)}</div>
    </CartProductItem>
  );
}
