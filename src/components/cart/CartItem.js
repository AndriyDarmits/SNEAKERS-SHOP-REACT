import React, { useState } from "react";
import styled from "styled-components";
import cancel from "../../assets/icons/cart/cancel.png";
import inc from "../../assets/icons/cart/inc.png";
import dec from "../../assets/icons/cart/dec.png";
import { Link } from "react-router-dom";
import { ProductQuantity } from "../../reusable-styles/reusableStyle";
const border = `1px solid #ebebeb`;
const CartProductItem = styled.li`
  display: flex;
  align-items: center;
  border: ${border};
  background: #fff;
  width: 100%;
  padding: 15px 0;

  & > div:nth-of-type(1) {
    width: 5.5%;
    text-align: center;
  }
  & > div:nth-of-type(2) {
    width: 11.5%;
    img {
      max-width: 100px;
      width: 100%;
      height: auto;
      display: block;
    }
  }
  & > div:nth-of-type(3) {
    width: 35%;
    padding-left: 10px;
    a {
      color: #333333;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 14px;
    }
  }
  & > div:nth-of-type(4) {
    width: 17%;
  }
  & > div:nth-of-type(5) {
    width: 15.5%;
  }
`;
// потрібно ці стилі зробити реюзабельні
const ProductQuantityCart = styled(ProductQuantity)`
  border: 1px solid #ebebeb;

  & > div:last-child {
    border-left: 1px solid #ebebeb;
    & > div:last-child {
      border-top: 1px solid #ebebeb;
    }
  }
`;

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
