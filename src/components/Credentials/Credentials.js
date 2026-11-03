import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MediaPreviewModal from "../MediaPreviewModal";
import CredentialCard from "./CredentialCard";
import { RevealCard, Words } from "../Motion";
import { ACTIVITIES, CERTIFICATES } from "../../data/credentials";

function CredentialSection({ description, items, onPreview, title, type }) {
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
        {items.map((item, index) => (
          <Col lg={4} md={6} className="credential-card" key={item.title}>
            <RevealCard index={index}>
              <CredentialCard
                credential={item}
                type={type}
                onPreview={onPreview}
              />
            </RevealCard>
          </Col>
        ))}
      </Row>
    </section>
  );
}

function Credentials() {
  const [preview, setPreview] = useState(null);

  return (
    <Container fluid className="project-section credentials-page">
      <Container>
        <header className="page-intro">
          <p className="section-kicker">Learning</p>
          <h1 className="project-heading reveal reveal-words">
            <Words text="Credentials &" /> <strong className="purple"><Words text="Activities" start={2} /></strong>
          </h1>
          <p className="section-description section-description--centered">
            Courses I completed, listed apart from the events I attended.
          </p>
        </header>

        <CredentialSection
          title="Certifications"
          description="Verified course completions, technical credentials, and competitive achievements."
          items={CERTIFICATES}
          type="certificate"
          onPreview={setPreview}
        />
        <CredentialSection
          title="Learning Activities"
          description="Technical events, campus training, and professional-development sessions I participated in."
          items={ACTIVITIES}
          type="activity"
          onPreview={setPreview}
        />

        <MediaPreviewModal
          preview={preview}
          onHide={() => setPreview(null)}
        />
      </Container>
    </Container>
  );
}

export default Credentials;
