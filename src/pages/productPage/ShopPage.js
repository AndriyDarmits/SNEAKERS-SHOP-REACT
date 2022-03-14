import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function ShopPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/7d2ddf44-4043-4d06-adf6-7789bfecefae").then(
      (response) => {
        response.json().then((data) => {
          setData(data);
        });
      }
    );
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((element) => (
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
