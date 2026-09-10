import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  BsCodeSlash,
  BsDownload,
  BsEye,
  BsGithub,
  BsShieldLock,
} from "react-icons/bs";
import { CgFileDocument, CgWebsite } from "react-icons/cg";
import { RELATIVE_PATH_TO_PORTO } from "../../Constants";

function ProjectCards(props) {
  const openPreview = (src, title, type) => {
    props.onPreview({ src, title, type });
  };

  return (
    <Card className="project-card-view">
      {props.imgPath ? (
        <button
          type="button"
          className="project-image-preview"
          onClick={() => openPreview(props.imgPath, props.title, "image")}
          aria-label={`Preview ${props.title}`}
        >
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={`${props.title} preview`}
          />
          <span className="project-image-preview-label">
            <BsEye aria-hidden="true" /> Preview image
          </span>
        </button>
      ) : (
        <div className="project-card-placeholder" aria-hidden="true">
          {props.confidential ? (
            <BsShieldLock />
          ) : props.isPdf ? (
            <CgFileDocument />
          ) : (
            <BsCodeSlash />
          )}
          <span>
            {props.confidential
              ? "Private work"
              : props.isPdf
                ? "Documented case study"
                : "Project case study"}
          </span>
        </div>
      )}

      <Card.Body className="project-card-body">
        {props.eyebrow && <p className="project-eyebrow">{props.eyebrow}</p>}
        <Card.Title>{props.title}</Card.Title>
        {props.metrics?.length > 0 && (
          <div className="metric-list" aria-label="Key results">
            {props.metrics.map((metric) => (
              <span className="metric-chip" key={metric.label}>
                <strong>{metric.value}</strong> {metric.label}
              </span>
            ))}
          </div>
        )}
        <Card.Text className="project-description">{props.description}</Card.Text>

        {props.tags?.length > 0 && (
          <div className="tag-list" aria-label="Technologies">
            {props.tags.map((tag) => (
              <span className="content-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="project-actions">
          {props.files?.map((file) => {
            const fileLink = `${RELATIVE_PATH_TO_PORTO}/${file.link}`;
            const isPreviewable = file.type === "pdf" || file.type === "image";

            if (file.type === "notebook") {
              return (
                <Button
                  key={file.link}
                  variant="primary"
                  href={fileLink}
                  download
                >
                  <BsCodeSlash /> {file.name}
                </Button>
              );
            }

            return isPreviewable ? (
              <Button
                key={file.link}
                variant="primary"
                type="button"
                onClick={() =>
                  openPreview(fileLink, `${props.title} — ${file.name}`, file.type)
                }
              >
                {file.type === "pdf" ? <CgFileDocument /> : <BsEye />} {file.name}
              </Button>
            ) : (
              <Button
                key={file.link}
                variant="primary"
                href={fileLink}
                download
              >
                <BsDownload /> {file.name}
              </Button>
            );
          })}

          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" rel="noreferrer">
              <BsGithub /> GitHub
            </Button>
          )}

          {props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" rel="noreferrer">
              <CgWebsite /> {props.demoLink.includes("colab.research.google.com") ? "Google Colab" : "Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
