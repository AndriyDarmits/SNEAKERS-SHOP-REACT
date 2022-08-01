import React from "react";
import { SmallImageDiv } from "./ProductGallery.style";

export default function SmallImage(props) {
  const changePicture = (index) => {
    props.onChangePicture(index);
  };
  return (
    <SmallImageDiv
      index={props.index}
      activeIndex={props.activeIndex}
      onClick={() => changePicture(props.index)}
    >
      <img src={props.image} alt="" />
    </SmallImageDiv>
  );
}
