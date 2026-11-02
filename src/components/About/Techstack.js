import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython, SiGo, SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiReact, SiNextdotjs, SiFastapi, SiStreamlit,
  SiPytorch, SiTensorflow, SiScikitlearn, SiPandas,
  SiPostgresql, SiMysql, SiDocker, SiGit, SiGooglecloud,
  SiPowerbi, SiMicrosoftexcel, SiMicrosoftpowerpoint,
} from "react-icons/si";

const STACK = [
  // Languages
  [SiPython, "Python"],
  [SiGo, "Go"],
  [SiJavascript, "JavaScript"],
  [SiTypescript, "TypeScript"],
  [SiHtml5, "HTML"],
  [SiCss3, "CSS"],
  // Web & APIs
  [SiReact, "React"],
  [SiNextdotjs, "Next.js"],
  [SiFastapi, "FastAPI"],
  [SiStreamlit, "Streamlit"],
  // Machine learning & data
  [SiPytorch, "PyTorch"],
  [SiTensorflow, "TensorFlow"],
  [SiScikitlearn, "scikit-learn"],
  [SiPandas, "Pandas"],
  // Databases, DevOps & cloud
  [SiPostgresql, "PostgreSQL"],
  [SiMysql, "MySQL"],
  [SiDocker, "Docker"],
  [SiGit, "Git"],
  [SiGooglecloud, "Google Cloud"],
  // Analytics & office
  [SiPowerbi, "Power BI"],
  [SiMicrosoftexcel, "Excel"],
  [SiMicrosoftpowerpoint, "PowerPoint"],
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {STACK.map(([Icon, name]) => (
        <Col xs={4} md={2} className="tech-icons" key={name}>
          <Icon aria-hidden="true" />
          <div className="tech-icons-text">{name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
