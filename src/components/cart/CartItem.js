import React, { useState } from "react";
import styled from "styled-components";
import cancel from "../../assets/icons/cart/cancel.png";
import inc from "../../assets/icons/cart/inc.png";
import dec from "../../assets/icons/cart/dec.png";
import { Link } from "react-router-dom";

export default function CartItem(props) {
  const border = `1px solid #ebebeb`;

  const [productQuantity, setProductQuantity] = useState(1);
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

  const ProductQuantityWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    border: ${border};
  `;
  const ProductQuantity = styled.div`
    font-size: 16px;
    line-height: 22px;
    color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  `;
  const ProductQuantityBtn = styled.div`
    width: 50%;
    border-left: ${border};
    text-align: center;
    & > :nth-of-type(1) {
      border-bottom: ${border};
    }
    & {
      cursor: pointer;
    }
  `;

  const deleteItem = (product) => {
    props.onDeleteItem(product);
  };
  const increaseQuantity = () => {};
  const decreaseQuantity = () => {};

  return (
    <CartProductItem>
      <div onClick={() => deleteItem(props.product)}>
        <img src={cancel} alt="" />
      </div>
      <div>
        <img
          src={props.product.media.smallImageUrl}
          alt=""
          style={{
            maxWidth: "100px",
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>
      <div>
        <Link to="/products/:itemId">{props.product.name}</Link>
      </div>
      <div>$ {props.product.retailPrice.toFixed(2)}</div>
      <div>
        <ProductQuantityWrapper>
          <ProductQuantity>{productQuantity}</ProductQuantity>
          <ProductQuantityBtn>
            <div onClick={() => increaseQuantity()}>
              <img src={inc} alt="increment" />
            </div>
            <div onClick={() => decreaseQuantity()}>
              <img src={dec} alt="decrement" />
            </div>
          </ProductQuantityBtn>
        </ProductQuantityWrapper>
      </div>

      <div>$ {(props.product.retailPrice * productQuantity).toFixed(2)}</div>
    </CartProductItem>
  );
}
