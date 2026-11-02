import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "2.6em" }}>
              About <span className="purple">Me</span>
            </h2>
            <p className="home-about-body">
              I study <b className="purple">Information Systems</b> at ITS
              (expected graduation August 2027) and work as an{" "}
              <b className="purple">AI Engineer Intern at PT SPIL</b>, where I
              build internal tools for document verification, CV screening,
              and candidate assessment analytics.
              <br />
              <br />
              Outside work I take machine-learning projects from raw data to a
              working product: an{" "}
              <b className="purple">in-browser sign-language recognizer</b>, a{" "}
              <b className="purple">RAG assistant for campus regulations</b>,
              and Indonesian sentiment analysis. I check results carefully; in
              the sign-language project I found and fixed data leakage in the
              public dataset before reporting accuracy.
              <br />
              <br />
              My undergraduate thesis classifies{" "}
              <b className="purple">bacterial and viral pneumonia</b> in
              pediatric chest X-rays with RDNet-Tiny.
              <br />
              <br />
            </p>
            <Button
              as={Link}
              to="/project"
              variant="primary"
              className="home-cta-button"
            >
              Explore selected projects <BsArrowRight aria-hidden="true" />
            </Button>
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
