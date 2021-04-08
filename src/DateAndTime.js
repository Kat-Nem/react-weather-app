import React from "react";
import "./date-and-time.css";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function DateAndTime() {
  let computerTime = new Date();
  let timestamp = computerTime.getTime();
  let currentDate = moment(timestamp).format(`LL`);
  let currentTime = moment(timestamp).format(`LT`);

  return (
    <div>
      <Row>
        <Col className="date">{currentDate}</Col>
        <Col className="time">{currentTime}</Col>
      </Row>
    </div>
  );
}
