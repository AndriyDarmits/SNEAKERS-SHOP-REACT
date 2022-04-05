import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Order, OrderHeader, OrderList, Shipping, Subtotal, Total } from './YourOrder.style';

export const YourOrder = () => {
// get data from redux store
  const reduxStore = useSelector((state) => state);
  const { productsCart } = reduxStore;
// price for a shipping
  const flatRate = 4;
  
  const [isFlatRate, setFlatRate] = useState(true);
  const [isFreeShipping, setFreeShipping] = useState(false);

  const flatRateHendler = () => {
    setFlatRate((state) => !state);
    setFreeShipping((state) => !state);
  };

  const freeShippingHendler = () => {
    setFreeShipping((state) => !state);
    setFlatRate((state) => !state);
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
        {productsCart.reduce((prev, current) => {
          return prev + current.price * current.count;
        }, 0)}
      </div>
    </Subtotal>

    <Shipping>
      {/* TODO: стейти і вивід остаточної суми включаючи доставку */}
      <div>Shipping</div>
      <div>
        <div>
          <input
            type="checkbox"
            name=""
            id=""
            checked={isFlatRate}
            onChange={() => flatRateHendler()}
          />{" "}
          <label htmlFor="">Flat rate : $ {flatRate.toFixed(2)}</label>
        </div>
        <div>
          <input
            type="checkbox"
            name=""
            id=""
            checked={isFreeShipping}
            onChange={() => freeShippingHendler()}
          />{" "}
          <label htmlFor="">Free shipping</label>
        </div>
      </div>
    </Shipping>
    <Total>
      <div>Total</div>
      <div>${/*суми включаючи доставкц*/}</div>
    </Total>
  </Order>
  )
}
