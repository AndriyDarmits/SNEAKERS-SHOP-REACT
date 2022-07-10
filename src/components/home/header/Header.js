import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useNavigate } from "react-router-dom";
import slide1 from "../../../assets/img/slider/slide1.webp";
import slide2 from "../../../assets/img/slider/slide2.webp";
import slide3 from "../../../assets/img/slider/slide3.webp";
import slide4 from "../../../assets/img/slider/slide4.jpg";
import {
  BackgroundSlider,
  FashionInstaP,
  HeaderContainer,
  HeaderContent,
  HeaderInner,
  Like,
  SectionSliderWrapper,
  ShowNowBtn,
} from "./Header.style";
export const Header = () => {
  const settings = {
    dots: true,
    arrows: false,
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
  const navigateToProducts = () => navigate("products");

  return (
    <SectionSliderWrapper>
      <BackgroundSlider {...settings}>
        <img src={slide1} alt="" />
        <img src={slide2} alt="" />
        <img src={slide3} alt="" />
        <img src={slide4} alt="" />
      </BackgroundSlider>
      <HeaderContainer>
        <HeaderInner>
          <HeaderContent>
            <Like>
              <span>Dress</span> <span>like</span> <span>a</span>
            </Like>
            <FashionInstaP>Fashionista</FashionInstaP>
            <ShowNowBtn>
              <button onClick={navigateToProducts}>Shop now</button>
            </ShowNowBtn>
          </HeaderContent>
        </HeaderInner>
      </HeaderContainer>
    </SectionSliderWrapper>
  );
};
