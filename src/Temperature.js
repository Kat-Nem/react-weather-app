import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        temperature: {Math.round(props.data)} °C |
        <a href="/" onClick={showFahrenheit}>
          {" "}
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          temperature: {Math.round(props.data * (9 / 5) + 32)}{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </div>
      </div>
    );
  }
}
