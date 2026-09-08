import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import CredentialCard from "./CredentialCard";
import { ACTIVITIES, CERTIFICATES } from "../../data/credentials";

function CredentialSection({ description, items, title, type }) {
  return (
    <section className="credential-section-block" aria-labelledby={`${type}-heading`}>
      <div className="section-heading-wrap">
        <p className="section-kicker">{items.length} documented entries</p>
        <h2 className="project-heading" id={`${type}-heading`}>
          {title}
        </h2>
        <p className="section-description">{description}</p>
      </div>

      <Row className="credential-grid">
        {items.map((item) => (
          <Col lg={4} md={6} className="credential-card" key={item.title}>
            <CredentialCard credential={item} type={type} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

function Credentials() {
  return (
    <Container fluid className="project-section credentials-page">
      <Particle />
      <Container>
        <header className="page-intro">
          <p className="section-kicker">Continuous learning, documented</p>
          <h1 className="project-heading">
            Credentials &amp; <strong className="purple">Activities</strong>
          </h1>
          <p className="section-description section-description--centered">
            Course completions are separated from event participation so each
            entry clearly represents what was achieved and what was explored.
          </p>
        </header>

        <CredentialSection
          title="Certifications"
          description="Verified course completions, technical credentials, and competitive achievements."
          items={CERTIFICATES}
          type="certificate"
        />
        <CredentialSection
          title="Learning Activities"
          description="Technical events, campus training, and professional-development sessions I participated in."
          items={ACTIVITIES}
          type="activity"
        />
      </Container>
    </Container>
  );
}

export default Credentials;
