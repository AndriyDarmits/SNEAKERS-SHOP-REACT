import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BigProductImage,
  InlineBlockContainer,
  SmallProductImage,
} from "./ProductGallery.style";
import SmallImage from "./SmallImage";

export default function ProductGallery() {
  // використаємо параметр, щоб потім відфільтрувати дані
  const { id } = useParams();
  console.log(id);
  // для цього потрібний рефекторинг, мб буде використано редакс
  const [gallery, setGallery] = useState([]);
  const [activeImg, setActiveImg] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  //! тимчасово, в майбутньому дані будуть приходити через пропс ( а може і нє)
  useEffect(() => {
    fetch("https://mocki.io/v1/cae53e84-6d5d-4be6-95d8-dcb6f5f556de").then(
      (response) => {
        response.json().then((data) => {
          setTimeout(() => {
            setActiveImg(data.images[0]);
            setGallery(data.images);
            setActiveIndex(0);
          }, 1500);
        });
      }
    );
  }, []);

  const onChangePicture = (index) => {
    // приймаємо індекс фотто, на яке нажато з компонеета нижче і встановлюємо в стан
    setActiveImg(gallery[index]);
  };

  useEffect(() => {
    // встановлюємо індекс активної фотто і далі передаємо його через пропс до малих фото
    setActiveIndex(gallery.findIndex((el) => el === activeImg));
  }, [activeImg]);

  return (
    <InlineBlockContainer
      style={{
        backgroundColor: !gallery.length ? "#999999" : "",
      }}
    >
      {gallery.length ? (
        <>
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
        </>
      ) : (
        "Loading..."
      )}
    </InlineBlockContainer>
  );
}
