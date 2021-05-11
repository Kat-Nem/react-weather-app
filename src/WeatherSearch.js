import "./weather-search.css";
import React, { useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeatherInfo from "./WeatherInfo.js";

export default function WeatherSearch(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconCode: response.data.weather[0].icon,
    });
  }
  function search() {
    let apiKey = "3975788e63c7f2d707103c2c24ee6bb0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col sm={6}>
              <input
                type="text"
                placeholder="enter a city"
                className="form-element"
                autoFocus="on"
                onChange={handleChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
