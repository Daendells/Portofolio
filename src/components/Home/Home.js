import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import cvPdf from "../../Assets/CV_Davin_Jonathan_Tanus_EN_New.pdf";
import { PROJECTS, USERS } from "../../Constants";
import ContourField from "../ContourField";
import { CountUp } from "../Motion";
import Home2 from "./Home2";

const STATS = [
  { value: "0.84", label: "retrieval MRR, RAG assistant" },
  { value: "98.5%", label: "held-out accuracy, BISINDO" },
  { value: "3.64", label: "GPA, Information Systems" },
  { value: "2027", label: "graduating in August" },
];

const SELECTED = ["RAG assistant", "BISINDO", "Indonesian review sentiment", "Stock forecasting", "CI/CD pipeline"].map(
  (prefix) => PROJECTS.find((project) => project.title.startsWith(prefix))
);

function WorkRow({ project, index, onHover }) {
  return (
    <article
      className="work-row reveal"
      onMouseEnter={() => onHover(project)}
      onMouseLeave={() => onHover(null)}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <span className="work-index">{String(index + 1).padStart(2, "0")}</span>
      <div className="work-main">
        <h3 className="work-title">{project.title}</h3>
        <p className="work-summary">{project.summary}</p>
      </div>
      <span className="work-meta">{project.eyebrow}</span>
      <div className="work-links">
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
            Demo <BsArrowUpRight aria-hidden="true" />
          </a>
        )}
        {project.ghLink && (
          <a href={project.ghLink} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}>
            Code <BsArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

function Home() {
  const [hovered, setHovered] = useState(null);
  const previewRef = useRef(null);

  // The preview image follows the cursor through a transform, so moving it never re-renders the list.
  const movePreview = (event) => {
    if (previewRef.current) {
      previewRef.current.style.transform = `translate3d(${event.clientX + 24}px, ${event.clientY - 90}px, 0)`;
    }
  };

  return (
    <main className="home">
      <section className="hero">
        <ContourField />
        <Container className="hero-content">
          <p className="kicker reveal">AI engineer · Information Systems at ITS</p>
          <h1 className="hero-title reveal">
            I build AI systems
            <br />
            and <em>measure</em> them.
          </h1>
          <p className="hero-lead reveal">
            AI Engineer Intern at PT Salam Pacific Indonesia Lines. On this page: a RAG assistant that cites its
            sources, sign-language recognition that runs in the browser, and two of my own results that I re-checked
            and corrected.
          </p>
          <div className="hero-actions reveal">
            <Link to="/project" className="btn btn-primary">
              See all work
            </Link>
            <a href={cvPdf} download="Davin_Jonathan_Tanus_CV.pdf" className="btn btn-ghost">
              Download CV
            </a>
          </div>
          <dl className="stats reveal" aria-label="Highlights">
            {STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <dt className="stat-value">
                  <CountUp value={stat.value} />
                </dt>
                <dd className="stat-label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="work-section" aria-label="Selected work" onMouseMove={movePreview}>
        <Container>
          <div className="section-head reveal">
            <p className="kicker">01 · Selected work</p>
            <Link to="/project" className="text-link">
              All projects <BsArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="work-list">
            {SELECTED.map((project, index) => (
              <WorkRow project={project} index={index} onHover={setHovered} key={project.title} />
            ))}
          </div>
        </Container>
        <div ref={previewRef} className={hovered && hovered.image ? "work-preview is-visible" : "work-preview"} aria-hidden="true">
          {hovered && hovered.image && <img src={hovered.image} alt="" />}
        </div>
      </section>

      <Home2 />

      <section className="contact-section">
        <Container>
          <p className="kicker reveal">03 · Contact</p>
          <h2 className="contact-title reveal">
            Looking for an AI or data role from <em>2027</em>.
          </h2>
          <div className="contact-links reveal">
            <a href={`mailto:${USERS.email}`}>{USERS.email}</a>
            <a href={USERS.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <BsArrowUpRight aria-hidden="true" />
            </a>
            <a href={USERS.social.github} target="_blank" rel="noreferrer">
              GitHub <BsArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Home;
