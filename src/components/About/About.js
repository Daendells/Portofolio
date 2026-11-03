import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import { Words } from "../Motion";

function About() {
  return (
    <Container fluid className="project-section about-page">
      <Container>
        <header className="page-intro">
          <p className="section-kicker">About</p>
          <h1 className="project-heading reveal reveal-words">
            <Words text="About" /> <strong className="purple"><Words text="me" start={1} /></strong>
          </h1>
        </header>
        <Aboutcard />

        <section className="project-section-block" aria-label="Tech stack">
          <div className="section-heading-wrap">
            <p className="section-kicker">Tools</p>
            <h2 className="project-heading">
              Tech <strong className="purple">stack</strong>
            </h2>
          </div>
          <Techstack />
        </section>
      </Container>
    </Container>
  );
}

export default About;
