import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SmallImage from "./SmallImage";

const BigProductImage = styled.div`
  margin-bottom: 10px;
  img {
    max-width: 470px;
    width: 100%;
  }
`;
const SmallProductImage = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    img {
      max-width: 150px;
      width: 100%;
    }
  }
`;

export default function ProductGallery() {
  const [gallery, setGallery] = useState([
    "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-Pokemon-Poke-Ball.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1641606351",
    "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-Pokemon-Jigglypuff-TD.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1641606350",
    "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Stage-Haze.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1641324076",
  ]);

  const [activeImg, setActiveImg] = useState(gallery[0]);
  const onChangePicture = (index) => {
    setActiveImg(gallery[index]);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setActiveIndex(gallery.findIndex((el) => el === activeImg));
  }, [activeImg]);

  return (
    <div
      style={{
        display: "inline-block",
      }}
    >
      <BigProductImage>
        <img src={activeImg} alt="" />
      </BigProductImage>
      <SmallProductImage>
        {gallery.map((image, index) => (
          <SmallImage
            index={index}
            image={image}
            activeIndex={activeIndex}
            onChangePicture={() => onChangePicture(index)}
          />
        ))}
      </SmallProductImage>
    </div>
  );
}
