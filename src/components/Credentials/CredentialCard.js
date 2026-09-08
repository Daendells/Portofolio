import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsAward, BsCalendar3, BsEye, BsPeople } from "react-icons/bs";

const getPreviewType = (link) =>
  link.toLowerCase().endsWith(".pdf") ? "pdf" : "image";

function CredentialCard({ credential, onPreview, type }) {
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
          {credential.files.map((file) => {
            const fileLabel = file.name.replace(/^View\s+/i, "");
            const isGenericCredential = fileLabel.toLowerCase() === "credential";
            const buttonLabel = isGenericCredential
              ? isActivity
                ? "activity document"
                : "certificate"
              : fileLabel;
            const previewTitle = isGenericCredential
              ? credential.title
              : `${credential.title} — ${fileLabel}`;

            return (
              <Button
                key={file.link}
                variant="primary"
                type="button"
                onClick={() =>
                  onPreview({
                    src: file.link,
                    title: previewTitle,
                    type: getPreviewType(file.link),
                  })
                }
              >
                <BsEye aria-hidden="true" /> Preview {buttonLabel}
              </Button>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CredentialCard;
