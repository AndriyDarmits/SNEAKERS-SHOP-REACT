import React, { useState } from "react";

import cancel from "../../assets/icons/cart/cancel.png";
import inc from "../../assets/icons/cart/inc.png";
import dec from "../../assets/icons/cart/dec.png";
import { Link } from "react-router-dom";
import { CartProductItem, ProductQuantityCart } from "./CartComponents.style";

export default function CartItem({ product }) {
  const [productQuantity, setProductQuantity] = useState(1);

  /* const deleteItem = (product) => {
    props.onDeleteItem(product);
  }; */
  const increaseQuantity = () => {
    setProductQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    setProductQuantity((prev) => prev - 1);
  };

  return (
    <CartProductItem>
      <div>
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

      <div>$ {(+product.price * product.count).toFixed(2)}</div>
    </CartProductItem>
  );
}
