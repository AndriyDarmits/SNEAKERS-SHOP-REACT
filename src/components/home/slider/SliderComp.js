import React, { createElement } from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FashionInstaP,
  Like,
  ShowNowBtn,
  SlideNumber,
  SliderContainer,
  SliderContentContainer,
  SliderFlexDiv,
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
    autoplay: false,
  };
  const navigate = useNavigate();
  const navigateToProducts = () => navigate("products");

  return (
    <SectionWrapper>
      <SliderContainer>
        <Slider {...settings}>
          <SliderItemFirst>
            <SliderContentContainer>
              <SliderFlexDiv>
                <div>
                  <Like>
                    <span>Dress</span> <span>like</span> <span>a</span>
                  </Like>
                  <FashionInstaP>Fashionista</FashionInstaP>
                  <ShowNowBtn>
                    <button onClick={navigateToProducts}>Shop now</button>
                  </ShowNowBtn>
                </div>
                <SlideNumber>01</SlideNumber>
              </SliderFlexDiv>
            </SliderContentContainer>
          </SliderItemFirst>
          <SliderItemSecond>
            <SliderContentContainer>
              <SliderFlexDiv>
                <div>
                  <Like>
                    <span>Dress</span> <span>like</span> <span>a</span>
                  </Like>
                  <FashionInstaP>Fashionista</FashionInstaP>
                  <ShowNowBtn>
                    <button onClick={navigateToProducts}>Shop now</button>
                  </ShowNowBtn>
                </div>
                <SlideNumber>02</SlideNumber>
              </SliderFlexDiv>
            </SliderContentContainer>
          </SliderItemSecond>
          <SliderItemThird>
            <SliderContentContainer>
              <SliderFlexDiv>
                <div>
                  <Like>
                    <span>Dress</span> <span>like</span> <span>a</span>
                  </Like>
                  <FashionInstaP>Fashionista</FashionInstaP>
                  <ShowNowBtn>
                    <button onClick={navigateToProducts}>Shop now</button>
                  </ShowNowBtn>
                </div>
                <SlideNumber>03</SlideNumber>
              </SliderFlexDiv>
            </SliderContentContainer>
          </SliderItemThird>
        </Slider>
      </SliderContainer>
    </SectionWrapper>
  );
};
