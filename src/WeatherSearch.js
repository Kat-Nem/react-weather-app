import "./weather-search.css";
import React, { useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherSearch() {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState(null);
  function updateCity(event) {
    setCity(event.target.value);
  }
  function displayWeather(response) {
    if (city) {
      console.log(response.data);
      setWeather(
        <div>
          <ul>
            <li>searched city: {response.data.name}</li>
            <li>temperature: {Math.round(response.data.main.temp)} °C</li>
            <li>humidity: {response.data.main.humidity}%</li>
            <li>wind: {response.data.wind.speed} Km/h</li>
            <li>weather: {response.data.weather[0].description}</li>
            <li>
              icon:{" "}
              <img
                src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`}
                alt="weather icon"
              />
            </li>
          </ul>
        </div>
      );
    } else setWeather(null);
  }
  let apiKey = `3975788e63c7f2d707103c2c24ee6bb0`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(displayWeather);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col sm={6}>
            <input
              type="text"
              placeholder="enter a city"
              className="form-element"
              onChange={updateCity}
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
      {weather}
    </div>
  );
}
