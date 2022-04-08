import React, { useEffect, useState } from "react";
import { Container } from "../../../../reusable-styles/reusableStyle";
import {
  FeaturedProductsList,
  FeaturedProductsSection,
  NavButton,
  Title,
  TitleAndNavbtn,
} from "./FeaturedProducts.style";
import { useMediaQuery } from "react-responsive";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ProductItem } from "../../../shopPage/productItem/ProductItem";
export const FeaturedProducts = () => {
  //get data from redux
  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;
  const isLaptopTo = useMediaQuery({ maxWidth: 1024 });
  const isTabletTo = useMediaQuery({ maxWidth: 768 });
  const isMobileTo = useMediaQuery({ maxWidth: 425 });
  const isLaptopFrom = useMediaQuery({ minWidth: 769 });
  const isTabletFrom = useMediaQuery({ minWidth: 426 });
  const isMobileFrom = useMediaQuery({ minWidth: 0 });
  // product quantity
  const [produtsQuantityToDisplay, setProductsQuantityToDisplay] = useState(8);
  // current slice to display
  const [currentSlice, setCurentSlice] = useState(1);
  //index calculating
  const lastIndex = produtsQuantityToDisplay * currentSlice;
  const fistIndex = lastIndex - produtsQuantityToDisplay;
  // sliceQuantity
  const sliceQuantity = Math.ceil(products.length / produtsQuantityToDisplay);
  //display previous slice
  const prevSlice = () => {
    if (currentSlice === 1) {
      return;
    }
    setCurentSlice((state) => state - 1);
  };
  //display next slice
  const nextSlice = () => {
    if (currentSlice >= sliceQuantity) {
      return;
    }
    setCurentSlice((state) => state + 1);
  };
  //change products quantity to display depended on the screen width
  useEffect(() => {
    //TODO:fix width range
    setProductsQuantityToDisplay((state) => {
      return isLaptopTo && isLaptopFrom
        ? 6
        : isTabletTo && isTabletFrom
        ? 4
        : isMobileTo && isMobileFrom
        ? 1
        : 8;
    });
  }, [
    isLaptopTo,
    isLaptopFrom,
    isTabletTo,
    isTabletFrom,
    isMobileTo,
    isMobileFrom,
  ]);
  return (
    <FeaturedProductsSection>
      <Container>
        <TitleAndNavbtn>
          <Title>
            <h2>Featured products</h2>
          </Title>
          <NavButton>
            <div onClick={() => prevSlice()}>
              <FaChevronLeft />
            </div>
            <div onClick={() => nextSlice()}>
              <FaChevronRight />
            </div>
          </NavButton>
        </TitleAndNavbtn>
        <FeaturedProductsList>
          {products.slice(fistIndex, lastIndex).map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </FeaturedProductsList>
      </Container>
    </FeaturedProductsSection>
  );
};
