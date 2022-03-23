import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getDataFromLocalStorage } from "../../helper";

const DescriptionContainer = styled.div`
  color: #666666;
  line-height: 22px;
  padding: 60px;
  font-weight: 600;
  border: 1px solid #ebebeb;
  border-top: 0;
  @media (max-width: 375px) {
    line-height: 16px;
    font-size: 13px;
    padding: 20px;
  }
  @media (max-width: 768px) {
    line-height: 18px;
    font-size: 14px;
    padding: 30px;
  }
  & > p:nth-of-type(1) {
    margin-bottom: 25px;
  }
  ul {
    margin-bottom: 25px;
  }

  span {
    font-weight: 600;
    color: #333333;
  }
`;

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
