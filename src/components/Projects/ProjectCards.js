import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsCodeSlash, BsDownload, BsGithub, BsShieldLock } from "react-icons/bs";
import { CgFileDocument, CgWebsite } from "react-icons/cg";
import { RELATIVE_PATH_TO_PORTO } from "../../Constants";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath ? (
        <Card.Img variant="top" src={props.imgPath} alt={`${props.title} preview`} />
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
          {props.files?.map((file) => (
            <Button
              key={file.link}
              variant="primary"
              href={`${RELATIVE_PATH_TO_PORTO}/${file.link}`}
              target="_blank"
              rel="noreferrer"
            >
              {file.type === "pdf" ? <CgFileDocument /> : <BsDownload />} {file.name}
            </Button>
          ))}

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
