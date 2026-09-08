import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsAward, BsBoxArrowUpRight, BsCalendar3, BsPeople } from "react-icons/bs";

function CredentialCard({ credential, type }) {
  const isActivity = type === "activity";

  return (
    <Card className="credential-card-view">
      <div className={`credential-card-accent credential-card-accent--${type}`} />
      <Card.Body className="credential-card-body">
        <div className={`credential-icon credential-icon--${type}`}>
          {isActivity ? <BsPeople /> : <BsAward />}
        </div>

        <p className="credential-kind">
          {isActivity ? "Learning Activity" : "Certificate"}
        </p>
        <Card.Title className="credential-title">{credential.title}</Card.Title>
        <p className="credential-issuer">{credential.issuer}</p>
        <p className="credential-date">
          <BsCalendar3 aria-hidden="true" /> {credential.issued}
        </p>
        <Card.Text className="credential-description">
          {credential.description}
        </Card.Text>

        <div className="tag-list" aria-label="Topics">
          {credential.skills.map((skill) => (
            <span className="content-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>

        <div className="credential-actions">
          {credential.files.map((file) => (
            <Button
              key={file.link}
              variant="primary"
              href={file.link}
              target="_blank"
              rel="noreferrer"
            >
              <BsBoxArrowUpRight aria-hidden="true" /> {file.name}
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CredentialCard;
