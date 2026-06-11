import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPowerbi, SiMicrosoftexcel, SiMysql, SiPython, SiSap, SiGithub,
  SiPostman, SiDocker, SiGooglecloud, SiStreamlit, SiScikitlearn,
  SiJupyter, SiLaravel, SiJavascript, SiReact, SiPandas, SiMongodb,
} from "react-icons/si";
import { FaSyncAlt, FaProjectDiagram } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Data & Analytics */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <div className="tech-icons-text">Scikit-Learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
      {/* Tools & Software */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSap />
        <div className="tech-icons-text">SAP S/4HANA</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <div className="tech-icons-text">GCP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
        <div className="tech-icons-text">Excel</div>
      </Col>
      {/* Web & Programming */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <div className="tech-icons-text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
        <div className="tech-icons-text">Laravel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
        <div className="tech-icons-text">Streamlit</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      {/* Management */}
      <Col xs={4} md={2} className="tech-icons">
        <FaSyncAlt />
        <div className="tech-icons-text">Agile / Scrum</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram />
        <div className="tech-icons-text">BPMN</div>
      </Col>
    </Row>
  );
}

export default Techstack;
