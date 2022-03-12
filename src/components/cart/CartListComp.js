import React, { useState } from "react";
import CartItem from "./CartItem";
import { CartHeader, CartList, CartListWrapper } from "./CartComponents.style";

export const CartListComp = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "31058c20-8d08-43d4-84ad-69d8c5f666cb",
      brand: "Converse",
      colorway: "White/Black",
      gender: "men",
      name: "Pokemon Poke Ball",
      releaseDate: "2022-12-07",
      retailPrice: 70,
      shoe: "Converse Chuck Taylor All-Star",
      styleId: "A01651C",
      title: "Converse Chuck Taylor All-Star Pokemon Poke Ball",
      year: 2022,
      media: {
        imageUrl:
          "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-Pokemon-Poke-Ball.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1641606351",
        smallImageUrl:
          "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-Pokemon-Poke-Ball.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1641606351",
        thumbUrl:
          "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-Pokemon-Poke-Ball.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1641606351",
      },
    },
    {
      id: "56a2a964-75cc-43fa-a062-359a42817167",
      brand: "Converse",
      colorway: "Pink/White",
      gender: "toddler",
      name: "Pokemon Jigglypuff (TD)",
      releaseDate: "2022-12-07",
      retailPrice: 40,
      shoe: "Converse Chuck Taylor All-Star",
      styleId: "A01232F",
      title: "Converse Chuck Taylor All-Star Pokemon Jigglypuff (TD)",
      year: 2022,
      media: {
        imageUrl:
          "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-Pokemon-Jigglypuff-TD.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1641606350",
        smallImageUrl:
          "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-Pokemon-Jigglypuff-TD.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1641606350",
        thumbUrl:
          "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-Pokemon-Jigglypuff-TD.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1641606350",
      },
    },
  ]);

  // !temp
  const onDeleteItem = (productToDelete) => {
    let prom = new Promise((resolve, reject) => {
      const filteredList = cartItems.filter(
        (item) => item.id !== productToDelete.id
      );
      setTimeout(() => {
        resolve(filteredList);
      }, 2000);
    });
    prom.then((del) => {
      setCartItems([...del]);
    });
    // temp
  };
  return (
    <CartListWrapper>
      <CartHeader>
        <div></div>
        <div>Product</div>
        <div></div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </CartHeader>
      <CartList>
        {cartItems.map((product) => (
          <CartItem
            product={product}
            onDeleteItem={(productToDelete) => onDeleteItem(productToDelete)}
          />
        ))}
      </CartList>
    </CartListWrapper>
  );
};
