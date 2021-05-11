import React from "react";
import Icon from "./Icon.js";
import Temperature from "./Temperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div>
        <ul>
          <li>{props.data.city} </li>
          <li>
            <Temperature data={props.data.temperature} />
          </li>
          <li>humidity: {props.data.humidity}%</li>
          <li>wind: {props.data.wind} Km/h</li>
          <li>weather: {props.data.description}</li>
          <li>
            icon: <Icon data={props.data.iconCode} />
          </li>
        </ul>
      </div>
    </div>
  );
}
