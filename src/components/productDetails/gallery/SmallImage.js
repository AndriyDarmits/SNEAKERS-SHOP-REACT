import React from "react";

export default function SmallImage(props) {
  const changePicture = (index) => {
    props.onChangePicture(index);
  };
  return (
    <div
      style={{
        transition: "all 0.1s linear",
        /* якщо індекси збігаються, малюємо рамку */
        border:
          props.index === props.activeIndex
            ? "2px solid #666666"
            : "2px solid #ebebeb",
      }}
      onClick={() => changePicture(props.index)}
    >
      <img src={props.image} alt="" />
    </div>
  );
}
