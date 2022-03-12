import React, { useState } from "react";

import cancel from "../../assets/icons/cart/cancel.png";
import inc from "../../assets/icons/cart/inc.png";
import dec from "../../assets/icons/cart/dec.png";
import { Link } from "react-router-dom";
import { CartProductItem, ProductQuantityCart } from "./CartComponents.style";

export default function CartItem(props) {
  const [productQuantity, setProductQuantity] = useState(1);

  const deleteItem = (product) => {
    props.onDeleteItem(product);
  };
  const increaseQuantity = () => {
    setProductQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    setProductQuantity((prev) => prev - 1);
  };

  return (
    <CartProductItem>
      <div onClick={() => deleteItem(props.product)}>
        <img src={cancel} alt="" />
      </div>
      <div>
        <img src={props.product.media.smallImageUrl} alt="" />
      </div>
      <div>
        <Link to={`/products`}>{props.product.name}</Link>
      </div>
      <div>$ {props.product.retailPrice.toFixed(2)}</div>
      <div>
        <ProductQuantityCart>
          <div>{productQuantity}</div>
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

      <div>$ {(props.product.retailPrice * productQuantity).toFixed(2)}</div>
    </CartProductItem>
  );
}
