import styled from "styled-components";
import { Button, SectionWrapper } from "../../reusable-styles/reusableStyle";
import { device } from "../../GlobalStyles";

export const NotFoundWrapper = styled(SectionWrapper)`
  background: linear-gradient(90deg, rgb(238, 190, 228), rgb(210, 245, 249))
    center no-repeat;
  background-size: cover;
  margin-bottom: 0;
  margin-top: 82px;
  height: calc(100vh - 82px);
  padding: 0 15px;
  position: relative;
  z-index: 0;
`;
export const ErrorStatus = styled.div`
  & > img:first-child {
    display: block;
    max-width: 1175px;
    width: 100%;
    right: 50%;
    transform: translateX(50%);
    top: 50px;
    position: absolute;
    z-index: -1;
  }
  & > img:last-child {
    display: block;
    max-width: 450px;
    width: 70vw;
    z-index: -1;
    right: 0;
    bottom: 0;
    max-height: calc(100vh - 82px);
    position: absolute;
  }
`;
export const NotFoundPageBtn = styled(Button)`
  button {
    color: #fff;
    font-size: 14px;
  }
`;

export const OppsNotification = styled.div`
  margin-left: 15vw;
  margin-top: 30vh;
  color: #333333;
  h1 {
    font-size: 90.62px;
    margin-bottom: 20px;
    font-weight: bold;
    @media (${device.tablet}) {
      font-size: 75px;
    }
    @media (${device.mobile}) {
      font-size: 60px;
    }
  }
  p {
    font-weight: 600;
    color: #666666;
    margin-bottom: 50px;
    font-size: 30px;
    /* font-family: 'Montserrat' , sans-serif; */
    @media (${device.mobile}) {
      font-size: 20px;
    }
  }
`;
