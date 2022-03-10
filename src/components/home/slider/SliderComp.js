import React from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ShowNowBtn,
  SliderContainer,
  SliderItemFirst,
  SliderItemSecond,
  SliderItemThird,
} from "./Slider.customSlider";
import { SectionWrapper } from "../../../reusable-styles/reusableStyle";
import { useNavigate } from "react-router-dom";

export const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "ease-out",
    autoplay: true,
  };
  const navigate = useNavigate();
  return (
    <SectionWrapper>
      <SliderContainer>
        <Slider {...settings}>
          <SliderItemFirst>
            <div>
              <ShowNowBtn>
                <button onClick={() => navigate("products")}>Shop now</button>
              </ShowNowBtn>
            </div>
            <div></div>
          </SliderItemFirst>
          <SliderItemSecond>
            <div>
              <ShowNowBtn>
                <button>Shop now</button>
              </ShowNowBtn>
            </div>
            <div></div>
          </SliderItemSecond>
          <SliderItemThird>
            <div>
              <ShowNowBtn>
                <button>Shop now</button>
              </ShowNowBtn>
            </div>
            <div></div>
          </SliderItemThird>
        </Slider>
      </SliderContainer>
    </SectionWrapper>
  );
};
