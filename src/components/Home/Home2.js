import React from "react";
import { Container } from "react-bootstrap";

const FACTS = [
  ["Now", "AI Engineer Intern, Performance Excellence division, PT Salam Pacific Indonesia Lines (Jul–Nov 2026)"],
  ["Study", "Information Systems at Institut Teknologi Sepuluh Nopember, GPA 3.64, graduating August 2027"],
  ["Thesis", "Bacterial vs. viral pneumonia classification on pediatric chest X-rays with RDNet-Tiny (in progress)"],
  ["Stack", "Python, Go, TypeScript, FastAPI, Next.js, PyTorch, ONNX, PostgreSQL, Docker"],
];

function Home2() {
  return (
    <section className="home-about-section" id="about">
      <Container>
        <div className="about-grid">
          <div>
            <h2 className="project-heading">About</h2>
            <p className="home-about-body">
              At work I build internal tools: fuel-consumption analytics for the fleet team, LLM-based CV screening for
              recruiters, a DISC assessment analytics dashboard, and a document-verification engine. In my own projects I take machine learning from raw
              data to a working demo, and I check the numbers before I report them. In the sign-language project
              I found that 63% of the public validation set were near-copies of training images, and re-split the
              data before measuring accuracy.
            </p>
          </div>
          <dl className="fact-list">
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
