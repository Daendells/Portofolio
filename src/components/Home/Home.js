import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { BsArrowRight, BsBoxArrowUpRight } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import cvPdf from "../../Assets/CV_Davin_Jonathan_Tanus_EN_New.pdf";
import { PROJECTS, USERS } from "../../Constants";
import Home2 from "./Home2";

const HIGHLIGHT_STATS = [
  { value: "0.84", label: "Retrieval MRR of the RAG assistant on 60 test questions" },
  { value: "98.5%", label: "BISINDO accuracy on a held-out test set" },
  { value: "3.64", label: "GPA, Information Systems at ITS" },
  { value: "Aug 2027", label: "Expected graduation" },
];

const FEATURED = ["RAG Academic Assistant", "BISINDO Fingerspelling", "Indonesian App Review Sentiment Analysis"].map(
  (prefix) => PROJECTS.find((project) => project.title.startsWith(prefix))
);

const shortTitle = (title) => title.split(" — ")[0];

function FeaturedProject({ project }) {
  const name = shortTitle(project.title);
  return (
    <article className="featured-card">
      <img src={project.image} alt="" className="featured-image" loading="lazy" />
      <div className="featured-body">
        <p className="project-eyebrow">{project.eyebrow}</p>
        <h3 className="featured-title">{name}</h3>
        <p className="featured-summary">{project.summary}</p>
        <div className="featured-links">
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noreferrer" aria-label={`${name} live demo`}>
              Live demo <BsBoxArrowUpRight aria-hidden="true" />
            </a>
          )}
          {project.ghLink && (
            <a href={project.ghLink} target="_blank" rel="noreferrer" aria-label={`${name} source code`}>
              Code <AiFillGithub aria-hidden="true" />
            </a>
          )}
          {!project.demoLink && (
            <Link to="/project" aria-label={`${name} details`}>
              Details <BsArrowRight aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function Home() {
  return (
    <main>
      <section className="home-section" id="home">
        <Container className="home-content">
          <p className="section-kicker">AI Engineer · Information Systems, ITS</p>
          <h1 className="heading-name">{USERS.name}</h1>
          <p className="home-lead">
            I build AI products end to end and measure them: a RAG assistant that cites the exact article of
            a university regulation, sign-language recognition that runs in the browser, and LLM-based CV
            screening at my internship.
          </p>
          <div className="home-cta">
            <Button as={Link} to="/project" variant="primary" className="home-cta-button">
              View projects <BsArrowRight aria-hidden="true" />
            </Button>
            <Button href={cvPdf} download="Davin_Jonathan_Tanus_CV.pdf" variant="outline-primary" className="home-cta-button">
              <AiOutlineDownload aria-hidden="true" /> Download CV
            </Button>
          </div>
          <dl className="home-stats" aria-label="Highlights">
            {HIGHLIGHT_STATS.map((stat) => (
              <div className="home-stat" key={stat.label}>
                <dt className="home-stat-value">{stat.value}</dt>
                <dd className="home-stat-label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="featured-section" aria-label="Featured projects">
        <Container>
          <div className="section-heading-row">
            <h2 className="project-heading">Featured projects</h2>
            <Link to="/project" className="text-link">
              All projects <BsArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="featured-grid">
            {FEATURED.map((project) => (
              <FeaturedProject project={project} key={project.title} />
            ))}
          </div>
        </Container>
      </section>

      <Home2 />

      <section className="contact-section">
        <Container>
          <h2 className="project-heading">Get in touch</h2>
          <p className="section-description">
            Open to internship and graduate roles in AI, data, and software engineering.
          </p>
          <div className="contact-links">
            <a href={`mailto:${USERS.email}`} className="btn btn-primary">
              <AiOutlineMail aria-hidden="true" /> {USERS.email}
            </a>
            <a href={USERS.social.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              <FaLinkedinIn aria-hidden="true" /> LinkedIn
            </a>
            <a href={USERS.social.github} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              <AiFillGithub aria-hidden="true" /> GitHub
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Home;
