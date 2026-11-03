import React from "react";
import { Container } from "react-bootstrap";

const FACTS = [
  ["Now", "AI Engineer Intern, Performance Excellence division, PT Salam Pacific Indonesia Lines (Jul to Nov 2026)"],
  ["Study", "Information Systems, Institut Teknologi Sepuluh Nopember. GPA 3.64, graduating August 2027"],
  ["Thesis", "Bacterial vs. viral pneumonia on children's chest X-rays with RDNet-Tiny (in progress)"],
  ["Tools", "Python, Go, TypeScript, FastAPI, Next.js, Laravel, PyTorch, ONNX, PostgreSQL, Docker"],
];

function Home2() {
  return (
    <section className="home-about-section" id="about">
      <Container>
        <p className="kicker reveal">02 · About</p>
        <div className="about-grid">
          <p className="about-statement reveal">
            At work I build internal tools: fuel analytics for the fleet team, LLM-based CV screening for recruiters,
            and a document-verification engine. In my own projects I check the numbers before I publish them. That
            habit showed me that <em>63%</em> of a public sign-language dataset's validation images were near-copies of
            training images, and that one of my own forecasting results came from a one-day leak.
          </p>
          <dl className="fact-list reveal">
            {FACTS.map(([term, detail]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

export default Home2;
