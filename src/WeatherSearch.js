import "./weather-search.css";
import React, { useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherSearch(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <form>
          <Row>
            <Col sm={6}>
              <input
                type="text"
                placeholder="enter a city"
                className="form-element"
              />
            </Col>
            <Col>
              <button type="submit" className="form-element">
                Search
              </button>
            </Col>
            <Col>
              <button className="form-element">Current Location</button>
            </Col>
          </Row>{" "}
        </form>
        <div>
          <ul>
            <li>searched city:{weatherData.city} </li>
            <li>temperature: {Math.round(weatherData.temperature)}°C</li>
            <li>humidity: {weatherData.humidity}%</li>
            <li>wind: {weatherData.wind} Km/h</li>
            <li>weather: {weatherData.humidity}</li>
            <li>
              icon:
              <img src={weatherData.iconUrl} alt="weather icon" />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    let city = props.defaultCity;
    let apiKey = "3975788e63c7f2d707103c2c24ee6bb0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return <div>Loading...</div>;
  }
}
