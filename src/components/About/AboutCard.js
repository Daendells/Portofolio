import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { USERS } from "../../Constants";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            {USERS.description}
          </p>
          <p style={{ textAlign: "left" }}>What I focus on:</p>
          <ul>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> Machine learning with honest evaluation, from data cleaning to a live demo
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> Internal tools that save people repetitive work
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> Data analysis and dashboards that answer a clear business question
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
