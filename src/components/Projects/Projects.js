import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PROJECTS } from "../../Constants";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

const projectSections = [
  {
    title: "Internship Work",
    category: "Internship Work",
    description:
      "Selected systems from my AI Engineering internship at PT Salam Pacific Indonesia Lines. Descriptions are intentionally general and no internal assets are published.",
  },
  {
    title: "Machine Learning",
    category: "Machine Learning",
    description:
      "Reproducible computer-vision and natural-language-processing projects with documented evaluation results.",
  },
  {
    title: "Selected Work",
    category: null,
    description:
      "A broader selection of data, software engineering, cloud, analytics, and information-systems projects.",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <header className="page-intro">
          <p className="section-kicker">Applied engineering &amp; research</p>
          <h1 className="project-heading">
            Selected <strong className="purple">Projects</strong>
          </h1>
          <p className="section-description section-description--centered">
            Work across AI engineering, machine learning, data, cloud, and
            product development.
          </p>
        </header>

        {projectSections.map((section) => {
          const items = PROJECTS.filter((project) =>
            section.category
              ? project.category === section.category
              : !project.category
          );

          return (
            <section className="project-section-block" key={section.title}>
              <div className="section-heading-wrap">
                <p className="section-kicker">{items.length} selected projects</p>
                <h2 className="project-heading">{section.title}</h2>
                <p className="section-description">{section.description}</p>
              </div>
              <Row className="project-grid">
                {items.map((project) => (
                  <Col
                    lg={items.length === 2 ? 6 : 4}
                    md={6}
                    className="project-card"
                    key={project.title}
                  >
                    <ProjectCard {...project} imgPath={project.image} />
                  </Col>
                ))}
              </Row>
            </section>
          );
        })}
      </Container>
    </Container>
  );
}

export default Projects;
