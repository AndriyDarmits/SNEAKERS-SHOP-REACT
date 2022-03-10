import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ShopPage() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://mocki.io/v1/cae53e84-6d5d-4be6-95d8-dcb6f5f556de").then(
      (response) => {
        response.json().then((data) => {
          setData(data);
        });
      }
    );
  }, []);
  return (
    <div
      style={{
        marginTop: "200px",
      }}
    >
      <NavLink to={`/products/${data.id}`}>Details</NavLink>
    </div>
  );
}
