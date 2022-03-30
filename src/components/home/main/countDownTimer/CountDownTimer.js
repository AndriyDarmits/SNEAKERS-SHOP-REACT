import React from "react";
import {
  CountDownTimerFlex,
  CountDownTimerImage,
  CountDownTimerSection,
  CountDownTimerContent,
  ProductPrice,
  TimerBody,
  AddToCartBtn,
  Description,
} from "./CountDownTimer.style";
import { Container } from "../../../../reusable-styles/reusableStyle";
import Countdown from "react-countdown";
import main from "../../../../assets/img/timer/main.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <TimerBody>
        <div>
          <div>{days}</div>
          <div>days</div>
        </div>
        <div>
          <div>{hours}</div>
          <div>hours</div>
        </div>
        <div>
          <div>{minutes}</div>
          <div>mins</div>
        </div>
        <div>
          <div>{seconds}</div>
          <div>secs</div>
        </div>
      </TimerBody>
    );
  }
};
export const CountDownTimer = () => {
  const redux = useSelector((state) => state);
  const { products } = redux;
  const navigate = useNavigate();
  return (
    <CountDownTimerSection>
      <Container>
        <CountDownTimerFlex>
          <CountDownTimerImage>
            <img src={main} alt="" />
          </CountDownTimerImage>
          <CountDownTimerContent>
            <h2>{products[0]?.title}</h2>
            <ProductPrice>
              <span>$ {products[0]?.price}</span>
              <span>$ {products[0]?.price * 0.6}</span>
            </ProductPrice>
            <Description>{products[0]?.description}</Description>
            <Countdown date={Date.now() + 1000000000} renderer={renderer}>
              <Completionist />
            </Countdown>
            <AddToCartBtn>
              <button onClick={() => navigate(`products/${products[0]?.id}`)}>
                {products[0]?.isInShoppingCart ? "In the cart" : "Add to cart"}
              </button>
            </AddToCartBtn>
          </CountDownTimerContent>
        </CountDownTimerFlex>
      </Container>
    </CountDownTimerSection>
  );
};
