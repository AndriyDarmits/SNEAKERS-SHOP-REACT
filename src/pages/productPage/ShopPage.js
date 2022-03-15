import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ShopPage() {
  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products.map((element) => (
          <div
            style={{
              width: "200px",
              height: "300px",
              backgroundColor: "#333333",
              marginRight: "5px",
              marginTop: "5px",
              marginLeft: "5px",
              marginBottom: "5px",
            }}
          >
            <NavLink to={`/products/${element.id}`}>Details</NavLink>
          </div>
        ))}
      </div>
    </>
  );
}
