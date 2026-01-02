import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import { USERS } from "../../Constants";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{USERS.name}</span>.
            <br />
            {USERS.desciption}
            <br />
            <br />
            Apart from coding and data visualization, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Analyzing Trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tools
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Data is not just numbers, it's a story waiting to be told!"{" "}
          </p>
          <footer className="blockquote-footer">Davin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
