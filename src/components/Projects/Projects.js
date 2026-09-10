import React, { useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PROJECTS } from "../../Constants";
import MediaPreviewModal from "../MediaPreviewModal";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

const CATEGORY_FILTERS = [
  "All",
  "Machine Learning",
  "Time Series",
  "AI Applications",
  "Software Engineering",
  "Cloud & DevOps",
  "Data & Analytics",
  "Info Systems",
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

  const selectedItems = useMemo(
    () =>
      PROJECTS.filter(
        (project) =>
          project.category !== "Internship Work" &&
          (activeCategory === "All" || project.category === activeCategory) &&
          matchesQuery(project, query)
      ),
    [activeCategory, query]
  );

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

        <section className="project-section-block" aria-label="Internship work">
          <div className="section-heading-wrap">
            <p className="section-kicker">{internshipItems.length} selected projects</p>
            <h2 className="project-heading">Internship Work</h2>
            <p className="section-description">
              Selected systems from my AI Engineering internship at PT Salam Pacific Indonesia Lines. Descriptions are intentionally general and no internal assets are published.
            </p>
          </div>
          <Row className="project-grid">
            {internshipItems.map((project) => (
              <Col
                lg={6}
                md={6}
                className="project-card"
                key={project.title}
              >
                <ProjectCard
                  {...project}
                  imgPath={project.image}
                  onPreview={setPreview}
                />
              </Col>
            ))}
          </Row>
        </section>

        <section className="project-section-block" aria-label="Selected projects">
          <div className="section-heading-wrap">
            <p className="section-kicker">{selectedItems.length} selected projects</p>
            <h2 className="project-heading">Selected Projects</h2>
            <p className="section-description">
              Machine learning, data, cloud, analytics, software engineering, and information-systems work in one collection.
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
              placeholder="Search projects, e.g. sentiment, LSTM, dashboard…"
              aria-label="Search projects"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          {selectedItems.length > 0 ? (
            <Row className="project-grid">
              {selectedItems.map((project) => (
                <Col
                  lg={4}
                  md={6}
                  className="project-card"
                  key={project.title}
                >
                  <ProjectCard
                    {...project}
                    imgPath={project.image}
                    onPreview={setPreview}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <p className="project-empty" role="status">
              No projects match this filter yet. Try a different category or search term.
            </p>
          )}
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
