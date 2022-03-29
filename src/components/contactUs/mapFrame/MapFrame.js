import styled from "@emotion/styled";
import React from "react";
import GoogleMapApi from "./GoogleMapApi";
export const MapFrameWrapper = styled.div`
  width: 49%;

  @media (max-width: 1024px) {
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
