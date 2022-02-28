import React from "react";

export default function SmallImage(props) {
  const changePicture = (index) => {
    props.onChangePicture(index);
  };
  return (
    <div
      style={{
        border:
          props.index === props.activeIndex
            ? "3px solid red"
            : "2px solid #ebebeb",
      }}
      onClick={() => changePicture(props.index)}
    >
      <img src={props.image} alt="" />
    </div>
  );
}
