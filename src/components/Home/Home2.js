import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";


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
              I'm a results-oriented{" "}
              <b className="purple">Information Systems</b> student at ITS with
              a strong foundation in{" "}
              <b className="purple">data analytics, dashboarding,</b> and{" "}
              <b className="purple">AI-powered applications.</b>
              <br />
              <br />
              I specialize in tools like{" "}
              <i>
                <b className="purple">Power BI, Python, and Scikit-Learn </b>
              </i>
              to build end-to-end data pipelines, machine learning models, and
              interactive dashboards.
              <br />
              <br />
              My field of interest spans{" "}
              <i>
                <b className="purple">
                  Time Series Forecasting, Computer Vision, RAG &amp; LLM,{" "}
                </b>
              </i>
              and full-stack development — from CI/CD pipelines on{" "}
              <b className="purple">Google Cloud Platform</b> to mobile asset
              management apps.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
