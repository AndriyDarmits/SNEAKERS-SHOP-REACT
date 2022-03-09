import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "../reusable-styles/reusableStyle";
import errorStatusImg from "../assets/img/notFound/404.png";
import Header from "../components/header/Header";
const NotFoundWrapper = styled(SectionWrapper)`
  background: linear-gradient(90deg, rgb(238, 190, 228), rgb(210, 245, 249))
    center no-repeat;

  margin-bottom: 0;
  margin-top: 90px;
  height: calc(100vh - 90px);
  padding: 0 15px;
  position: relative;
`;
const ErrorStatus = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  img {
    display: block;
    max-width: 1175px;
    width: 100%;
  }
`;
export default function Notfoundpage() {
  return (
    <>
      <Header />
      <NotFoundWrapper>
        <ErrorStatus>
          <img src={errorStatusImg} alt="" />
        </ErrorStatus>
      </NotFoundWrapper>
    </>
  );
}
