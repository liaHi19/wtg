import React from "react";

import { LogoMarkerIcon } from "./elements/icons";

import style from "../styles/map.module.scss";

const Map = () => {
  return (
    <div className={style.map}>
      <img src={require("../assets/map.jpg")} alt="map" />
      <div className={style.position}>
        <LogoMarkerIcon />
      </div>
    </div>
  );
};

export default Map;
