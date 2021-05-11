import React from "react";
import "./icon.css";

export default function Icon(props) {
  return (
    <div>
      <img
        src={`/icons/${props.data}.png`}
        alt="weather icon"
        id="weather-icon"
      />
    </div>
  );
}
