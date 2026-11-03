import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import cvPdf from "../../Assets/CV_Davin_Jonathan_Tanus_EN_New.pdf";
import { PROJECTS, USERS } from "../../Constants";
import ContourField from "../ContourField";
import { CountUp, RevealCard, tilt, Words } from "../Motion";
import Home2 from "./Home2";

const STATS = [
  { value: "0.84", label: "retrieval MRR, RAG assistant" },
  { value: "98.5%", label: "held-out accuracy, BISINDO" },
  { value: "3.64", label: "GPA, Information Systems" },
  { value: "2027", label: "graduating in August" },
];

const SELECTED = ["RAG assistant", "BISINDO", "LLM extraction", "Indonesian review sentiment", "Stock forecasting"].map(
  (prefix) => PROJECTS.find((project) => project.title.startsWith(prefix))
);

function WorkCard({ project, index }) {
  return (
    <RevealCard index={index < 2 ? index : index - 2} className={index < 2 ? "work-cell work-cell-wide" : "work-cell"}>
      <article className="work-card tilt" {...tilt}>
        <div className="work-card-image">
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        </div>
        <div className="work-card-body">
          <p className="work-meta">
            <span>{String(index + 1).padStart(2, "0")}</span> {project.eyebrow}
          </p>
          <h3 className="work-title">{project.title}</h3>
          <p className="work-summary">{project.summary}</p>
          <div className="work-links">
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
                Demo
              </a>
            )}
            {project.ghLink && (
              <a href={project.ghLink} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}>
                Code
              </a>
            )}
          </div>
        </div>
      </article>
    </RevealCard>
  );
}

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <ContourField />
        <Container className="hero-content">
          <p className="kicker reveal">AI engineer · Information Systems at ITS</p>
          <h1 className="hero-title reveal reveal-words">
            <Words text="I build AI systems" />
            <br />
            <Words text="and" start={4} /> <em><Words text="measure" start={5} /></em> <Words text="them." start={6} />
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

      <section className="work-section" aria-label="Selected work">
        <Container>
          <div className="section-head reveal">
            <p className="kicker">01 · Selected work</p>
            <Link to="/project" className="text-link">
              All projects
            </Link>
          </div>
          <div className="work-grid">
            {SELECTED.map((project, index) => (
              <WorkCard project={project} index={index} key={project.title} />
            ))}
          </div>
        </Container>
      </section>

      <Home2 />

      <section className="contact-section">
        <Container>
          <p className="kicker reveal">03 · Contact</p>
          <h2 className="contact-title reveal reveal-words">
            <Words text="Looking for an AI or data role from" /> <em><Words text="2027." start={8} /></em>
          </h2>
          <div className="contact-links reveal">
            <a href={`mailto:${USERS.email}`}>{USERS.email}</a>
            <a href={USERS.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={USERS.social.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Home;
