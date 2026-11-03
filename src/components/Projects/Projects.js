import React, { useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PROJECTS } from "../../Constants";
import MediaPreviewModal from "../MediaPreviewModal";
import ProjectCard from "./ProjectCards";
import { RevealCard, Words } from "../Motion";

const CATEGORY_FILTERS = [
  "All",
  "Machine Learning",
  "AI Applications",
  "Cloud & DevOps",
];

function matchesQuery(project, query) {
  if (!query) {
    return true;
  }
  const haystack = [project.title, project.description, project.eyebrow, ...(project.tags || [])]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((token) => haystack.includes(token));
}

function Projects() {
  const [preview, setPreview] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const internshipItems = useMemo(
    () => PROJECTS.filter((project) => project.category === "Internship Work"),
    []
  );

  const courseworkItems = useMemo(
    () => PROJECTS.filter((project) => project.category === "Coursework"),
    []
  );

  const selectedItems = useMemo(
    () =>
      PROJECTS.filter(
        (project) =>
          project.category !== "Internship Work" &&
          project.category !== "Coursework" &&
          (activeCategory === "All" || project.category === activeCategory) &&
          matchesQuery(project, query)
      ),
    [activeCategory, query]
  );

  return (
    <Container fluid className="project-section">
      <Container>
        <header className="page-intro">
          <p className="section-kicker">Work</p>
          <h1 className="project-heading reveal reveal-words">
            <Words text="All" /> <strong className="purple"><Words text="projects" start={1} /></strong>
          </h1>
          <p className="section-description section-description--centered">
            Internship systems, my own projects, and coursework. Each one links to code, a demo, or a report.
          </p>
        </header>

        <section className="project-section-block" aria-label="Internship work">
          <div className="section-heading-wrap">
            <p className="section-kicker">{internshipItems.length} selected projects</p>
            <h2 className="project-heading">Internship Work</h2>
            <p className="section-description">
              Built during my internship in the Performance Excellence division of PT Salam Pacific Indonesia Lines. Company data and code are private, so these stay at a high level.
            </p>
          </div>
          <Row className="project-grid">
            {internshipItems.map((project, index) => (
              <Col
                lg={6}
                md={6}
                className="project-card"
                key={project.title}
              >
                <RevealCard index={index}>
                  <ProjectCard
                    {...project}
                    imgPath={project.image}
                    onPreview={setPreview}
                  />
                </RevealCard>
              </Col>
            ))}
          </Row>
        </section>

        <section className="project-section-block" aria-label="Selected projects">
          <div className="section-heading-wrap">
            <p className="section-kicker">{selectedItems.length} selected projects</p>
            <h2 className="project-heading">Selected Projects</h2>
            <p className="section-description">
              My own projects. Each has code, a demo, or a write-up with its evaluation.
            </p>
          </div>

          <div className="project-filters">
            <div
              className="filter-pills"
              role="group"
              aria-label="Filter projects by category"
            >
              {CATEGORY_FILTERS.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter-pill${activeCategory === category ? " filter-pill--active" : ""}`}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <input
              className="project-search"
              type="search"
              placeholder="Search, for example sentiment or forecasting"
              aria-label="Search projects"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          {selectedItems.length > 0 ? (
            <Row className="project-grid">
              {selectedItems.map((project, index) => (
                <Col
                  lg={4}
                  md={6}
                  className="project-card"
                  key={project.title}
                >
                  <RevealCard index={index}>
                    <ProjectCard
                      {...project}
                      imgPath={project.image}
                      onPreview={setPreview}
                    />
                  </RevealCard>
                </Col>
              ))}
            </Row>
          ) : (
            <p className="project-empty" role="status">
              No projects match this filter yet. Try a different category or search term.
            </p>
          )}
        </section>

        <section className="project-section-block" aria-label="Coursework">
          <div className="section-heading-wrap">
            <p className="section-kicker">{courseworkItems.length} course projects</p>
            <h2 className="project-heading">Coursework</h2>
            <p className="section-description">
              Information-systems, data, and security projects from ITS courses, documented in their final reports.
            </p>
          </div>
          <Row className="project-grid">
            {courseworkItems.map((project, index) => (
              <Col
                lg={4}
                md={6}
                className="project-card"
                key={project.title}
              >
                <RevealCard index={index}>
                  <ProjectCard
                    {...project}
                    imgPath={project.image}
                    onPreview={setPreview}
                  />
                </RevealCard>
              </Col>
            ))}
          </Row>
        </section>

        <MediaPreviewModal
          preview={preview}
          onHide={() => setPreview(null)}
        />
      </Container>
    </Container>
  );
}

export default Projects;
