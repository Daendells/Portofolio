import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import { PROJECTS, CERTIFICATES, RELATIVE_PATH_TO_PORTO } from "../../Constants";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects and certifications I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.image || leaf} // Use leaf as default for now, or import a generic doc image
                isBlog={false}
                isPdf={project.isPdf}
                title={project.title}
                description={project.description}
                files={project.files}
              />
            </Col>
          ))}
        </Row>

        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Achievments and Certifications.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {CERTIFICATES.map((cert, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={cert.image || leaf}
                isBlog={false}
                isPdf={cert.isPdf}
                title={cert.title}
                description={cert.description}
                files={cert.files}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
