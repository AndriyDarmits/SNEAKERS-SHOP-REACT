import styled from "@emotion/styled";
import React from "react";
import GoogleMapApi from "./GoogleMapApi";
import { device } from "../../../GlobalStyles";
export const MapFrameWrapper = styled.div`
  width: 49%;

  @media (${device.laptop}) {
    width: 100%;
  }
`;

export const MapFrame = () => {
  return (
    <MapFrameWrapper>
      <GoogleMapApi />
    </MapFrameWrapper>
  );
};
