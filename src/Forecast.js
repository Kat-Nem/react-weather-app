import axios from "axios";
import React, { useState } from "react";
import moment from "moment";

export default function Forecast(props) {
  let apiKey = `3975788e63c7f2d707103c2c24ee6bb0`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
  let [forecast, setForecast] = useState(null);
  function displayForecast(response) {
    console.log(response);
    let timestamp = response.data.daily[1].dt * 1000;
    let day = moment(timestamp).format("ddd");
    setForecast(
      <div>
        <ul>
          <li>{day}</li>
        </ul>
      </div>
    );
  }
  axios.get(apiUrl).then(displayForecast);

  return <div>{forecast}</div>;
}
