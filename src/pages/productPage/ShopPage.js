import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/index";
import { store } from "../../redux/reducers/store";
export default function ShopPage() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;
  useEffect(() => {
    fetch("https://mocki.io/v1/7d2ddf44-4043-4d06-adf6-7789bfecefae").then(
      (response) => {
        response.json().then((data) => {
          const addedReviewsProperty = data.map((el) => {
            el.reviews = "";
            return el;
          });
          dispatch(actions.setProductFromApi(addedReviewsProperty));
          setData(addedReviewsProperty);
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
