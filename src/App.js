import "./App.css";
import Container from "react-bootstrap/Container";

import DateAndTime from "./DateAndTime.js";
import WeatherSearch from "./WeatherSearch.js";

function App() {
  return (
    <div className="App">
      <Container>
        <DateAndTime />
        <WeatherSearch defaultCity="London" />
      </Container>
      <p className="links">
        <a
          href="https://github.com/Kat-Nem/react-weather-app"
          alt="link to GitHub"
          target="_blank"
          rel="noreferrer noopener"
        >
          Open source code
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/katerina-nemcova-52bb0b203/"
          alt="link to LinkedIn"
          target="_blank"
          rel="noreferrer noopener"
        >
          Katerina Nemcova
        </a>
      </p>
    </div>
  );
}

export default App;
