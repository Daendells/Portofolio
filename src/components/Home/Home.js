import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import cvPdf from "../../Assets/CV_Davin_Jonathan_Tanus_EN_New.pdf";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import { USERS } from "../../Constants";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineDownload,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const HIGHLIGHT_STATS = [
  { value: "18", label: "Selected projects" },
  { value: "92.17%", label: "Best model test accuracy" },
  { value: "28", label: "Credentials & activities" },
  { value: "3.64", label: "GPA at ITS" },
];

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> {USERS.name}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              <div className="home-cta">
                <Button
                  as={Link}
                  to="/project"
                  variant="primary"
                  className="home-cta-button"
                >
                  <AiOutlineFundProjectionScreen aria-hidden="true" /> View My Work
                </Button>
                <Button
                  href={cvPdf}
                  download="Davin_Jonathan_Tanus_CV.pdf"
                  variant="outline-light"
                  className="home-cta-button"
                >
                  <AiOutlineDownload aria-hidden="true" /> Download CV
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <dl className="home-stats" aria-label="Highlights">
                {HIGHLIGHT_STATS.map((stat) => (
                  <div className="home-stat" key={stat.label}>
                    <dt className="home-stat-value">{stat.value}</dt>
                    <dd className="home-stat-label">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {USERS.social.github && (
                <li className="social-icons">
                  <a
                    href={USERS.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
              )}
              {USERS.social.twitter && (
                <li className="social-icons">
                  <a
                    href={USERS.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
              )}
              {USERS.social.linkedin && (
                <li className="social-icons">
                  <a
                    href={USERS.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              )}
              {USERS.social.instagram && (
                <li className="social-icons">
                  <a
                    href={USERS.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
