import React from "react";
import errorStatusImg from "../../assets/img/notFound/404.png";
import woman from "../../assets/img/notFound/woman.png";
import {
  ErrorStatus,
  NotFoundPageBtn,
  NotFoundWrapper,
  OppsNotification,
} from "./NotFound.style";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";

export default function Notfoundpage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <NotFoundWrapper>
        <ErrorStatus>
          <img src={errorStatusImg} alt="" />
          <img src={woman} alt="" />
        </ErrorStatus>
        <OppsNotification>
          <h1>Opps !</h1>
          <p>We can’t seem to find the page you’r looking for !</p>
          <NotFoundPageBtn>
            <button onClick={() => navigate("products")}>
              Back to homepage
            </button>
          </NotFoundPageBtn>
        </OppsNotification>
      </NotFoundWrapper>
    </>
  );
}
