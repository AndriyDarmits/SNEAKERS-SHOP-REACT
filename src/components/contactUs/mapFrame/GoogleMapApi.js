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
  //TODO: доробити, отримати білінговий ключ
  return (
    <LoadScript googleMapsApiKey="AIzaSyADB9mqHtKIEoO0nh4py340wXCJ0PseaJI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={options}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};
export default React.memo(GoogleMapApi);
