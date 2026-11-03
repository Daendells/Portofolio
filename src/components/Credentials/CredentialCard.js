import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { tilt } from "../Motion";

const getPreviewType = (link) =>
  link.toLowerCase().endsWith(".pdf") ? "pdf" : "image";

function CredentialCard({ credential, onPreview, type }) {
  const isActivity = type === "activity";

  return (
    <Card className="credential-card-view tilt" {...tilt}>
      <div className={`credential-card-accent credential-card-accent--${type}`} />
      <Card.Body className="credential-card-body">

        <p className="credential-kind">
          {isActivity ? "Learning Activity" : "Certificate"}
        </p>
        <Card.Title className="credential-title">{credential.title}</Card.Title>
        <p className="credential-issuer">{credential.issuer}</p>
        <p className="credential-date">
          {credential.issued}
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
              : `${credential.title}: ${fileLabel}`;

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
                Preview {buttonLabel}
              </Button>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CredentialCard;
