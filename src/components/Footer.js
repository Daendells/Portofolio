import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { USERS } from "../Constants";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <p>Designed and built by {USERS.copyrightName}</p>
        </Col>
        <Col md="4" className="footer-copywright">
          <p>© {year} {USERS.copyrightName}</p>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {USERS.social.github && (
              <li className="social-icons">
                <a
                  href={USERS.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            )}
            {USERS.social.twitter && (
              <li className="social-icons">
                <a
                  href={USERS.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            )}
            {USERS.social.linkedin && (
              <li className="social-icons">
                <a
                  href={USERS.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            )}
            {USERS.social.instagram && (
              <li className="social-icons">
                <a
                  href={USERS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
