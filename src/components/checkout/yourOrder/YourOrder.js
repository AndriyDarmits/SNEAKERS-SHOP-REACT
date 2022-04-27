import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Order,
  OrderHeader,
  OrderList,
  Shipping,
  Subtotal,
  Total,
} from "./YourOrder.style";

export const YourOrder = () => {
  // get data from redux store
  const reduxStore = useSelector((state) => state);
  const { productsCart, discount } = reduxStore;
  // price for a shipping
  const flatRate = 4;
  const [isFreeShipping, setFreeShipping] = useState(false);

  const freeShippingHendler = () => {
    setFreeShipping((state) => !state);
  };
  return (
    <Order>
      <h4>Your order</h4>
      <OrderHeader>
        <div>Product</div>
        <div>Total</div>
      </OrderHeader>
      {productsCart.map((product) => {
        return (
          <OrderList key={product.id}>
            <div>{product.title}</div>
            <div>$ {product.price * product.count}</div>
          </OrderList>
        );
      })}
      <Subtotal>
        <div>Subtotal</div>

        <div>
          <span>$ </span>
          {(
            productsCart.reduce((prev, current) => {
              return prev + current.price * current.count;
            }, 0) * (discount ? 0.8 : 1)
          ).toFixed(2)}
        </div>
      </Subtotal>

      <Shipping>
        <div>Shipping</div>
        <div>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              checked={!isFreeShipping}
              onChange={() => freeShippingHendler()}
            />
            <label htmlFor="">Flat rate : $ {flatRate.toFixed(2)}</label>
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              checked={isFreeShipping}
              onChange={() => freeShippingHendler()}
            />
            <label htmlFor="">Free shipping</label>
          </div>
        </div>
      </Shipping>
      <Total>
        <div>Total</div>
        <div>
          ${" "}
          {(
            productsCart.reduce((prev, current) => {
              return prev + current.price * current.count;
            }, 0) *
              (discount ? 0.8 : 1) -
            (isFreeShipping ? 0 : flatRate)
          ).toFixed(2)}
        </div>
      </Total>
    </Order>
  );
};
