import "./App.css";
import Container from "react-bootstrap/Container";

import DateAndTime from "./DateAndTime.js";
import WeatherSearch from "./WeatherSearch.js";

function App() {
  return (
    <div className="App">
      <Container>
        <DateAndTime />
        <WeatherSearch />
      </Container>
    </div>
  );
}

export default App;
