import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import mapCustomStyle from "./mapCustomStyle.js";
const containerStyle = {
  width: "100%",
  minHeight: "550px",
  height: "100%",
};

const center = {
  lat: 48.90384398125531,
  lng: 24.714494244242058,
};

const options = {
  styles: mapCustomStyle /* не працює */,
};

const GoogleMapApi = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCaqgKD8JpCG-8tUi9w3U7ug55NYKZhWXw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={options}
      ></GoogleMap>
    </LoadScript>
  );
};
export default React.memo(GoogleMapApi);
