import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an <b className="purple">Information Systems</b> student at
              ITS and currently an{" "}
              <b className="purple">AI Engineer Intern at PT SPIL.</b>
              <br />
              <br />
              I build practical systems across{" "}
              <b className="purple">
                document intelligence, machine learning, data analytics,
              </b>{" "}
              and full-stack engineering. My internship work is presented only
              at a high level to protect company information.
              <br />
              <br />
              My recent machine-learning work includes{" "}
              <b className="purple">
                image classification, Indonesian sentiment analysis, RAG,
              </b>{" "}
              and time-series forecasting. I enjoy turning experiments into
              maintainable products with clear evaluation and thoughtful user
              experiences.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="Davin avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
