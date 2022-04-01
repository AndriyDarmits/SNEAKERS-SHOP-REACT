import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  LookBookContainer,
  LookBookContentCenter,
  LookBookContent,
  LookBookFlex,
  LookBookSection,
  LookBookMainImageWrapper,
  Titles,
  SmallProductImageWrapper,
  SeeMore,
} from "./LookBookPage.style";

export default function LookBookPage() {
  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;

  return (
    <LookBookSection>
      <LookBookContainer>
        <LookBookFlex>
          <LookBookMainImageWrapper>
            <img src={products[1].images[0]} alt="" />
            <div>{products[1].description}</div>
          </LookBookMainImageWrapper>
          <LookBookContentCenter>
            <LookBookContent>
              <Titles>
                <h5>New men collection 2022</h5>
                <h3>{products[1].title}</h3>
              </Titles>
              <SmallProductImageWrapper>
                <img src={products[1].images[0]} alt="" />
              </SmallProductImageWrapper>
              <SeeMore>
                <Link to={`/products/${products[1].id}`}>see more</Link>
              </SeeMore>
            </LookBookContent>
          </LookBookContentCenter>
        </LookBookFlex>
        <LookBookFlex>
          <LookBookContentCenter>
            <LookBookContent>
              <Titles>
                <h5>New men collection 2022</h5>
                <h3>{products[2].title}</h3>
              </Titles>
              <SmallProductImageWrapper>
                <img src={products[2].images[0]} alt="" />
              </SmallProductImageWrapper>
              <SeeMore>
                <Link to={`/products/${products[2].id}`}>see more</Link>
              </SeeMore>
            </LookBookContent>
          </LookBookContentCenter>
          <LookBookMainImageWrapper>
            <img src={products[2].images[0]} alt="" />
            <div>{products[2].description}</div>
          </LookBookMainImageWrapper>
        </LookBookFlex>
        <LookBookFlex>
          <LookBookMainImageWrapper>
            <img src={products[3].images[0]} alt="" />
            <div>{products[3].description}</div>
          </LookBookMainImageWrapper>
          <LookBookContentCenter>
            <LookBookContent>
              <Titles>
                <h5>New men collection 2022</h5>
                <h3>{products[3].title}</h3>
              </Titles>
              <SmallProductImageWrapper>
                <img src={products[3].images[0]} alt="" />
              </SmallProductImageWrapper>
              <SeeMore>
                <Link to={`/products/${products[3].id}`}>see more</Link>
              </SeeMore>
            </LookBookContent>
          </LookBookContentCenter>
        </LookBookFlex>
      </LookBookContainer>
    </LookBookSection>
  );
}
