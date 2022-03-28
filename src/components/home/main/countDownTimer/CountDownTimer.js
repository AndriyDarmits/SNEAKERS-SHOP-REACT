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
const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <CountDownTimerContent>
        <h2>EMBROIDERED SWEATSHIR</h2>
        <ProductPrice>
          <span>$ 100.00</span>
          <span>$ 60.00</span>
        </ProductPrice>
        <Description>Description</Description>
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
        <AddToCartBtn>
          <button>Add to cart</button>
        </AddToCartBtn>
      </CountDownTimerContent>
    );
  }
};
export const CountDownTimer = () => {
  return (
    <CountDownTimerSection>
      <Container>
        <CountDownTimerFlex>
          <CountDownTimerImage>
            <img src={main} alt="" />
          </CountDownTimerImage>
          <Countdown date={Date.now() + 1000000000} renderer={renderer}>
            <Completionist />
          </Countdown>
        </CountDownTimerFlex>
      </Container>
    </CountDownTimerSection>
  );
};
