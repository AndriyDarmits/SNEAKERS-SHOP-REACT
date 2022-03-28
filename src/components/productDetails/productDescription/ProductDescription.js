import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDataFromLocalStorage } from "../../../helper";
import { DescriptionContainer } from "./ProductDescription.style";

export const ProductDescription = () => {
  let { id } = useParams();

  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;

  const [descriptionData, setDescriptionData] = useState({});
  useEffect(() => {
    if (products.length) {
      setDescriptionData(...products.filter((product) => product.id === id));
    } else {
      setDescriptionData(getDataFromLocalStorage("product"));
    }
  }, [products]);

  return (
    <DescriptionContainer>
      <p>{descriptionData.description}</p>
      <ul>
        <li>
          <span>Material </span>: 100 % cotton
        </li>
        <li>
          <span>Guarantee</span> : 3 months
        </li>
      </ul>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores
      </p>
    </DescriptionContainer>
  );
};
