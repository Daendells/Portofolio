import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPowerbi, SiMicrosoftexcel, SiMysql, SiPython, SiSap, SiGithub } from "react-icons/si";
import { FaSyncAlt, FaProjectDiagram, FaAward, FaCogs } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSap />
        <div className="tech-icons-text">SAP S/4HANA</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
        <div className="tech-icons-text">Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCogs />
        <div className="tech-icons-text">Odoo</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram />
        <div className="tech-icons-text">BPMN</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAward />
        <div className="tech-icons-text">ISO Standards</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSyncAlt />
        <div className="tech-icons-text">Agile</div>
      </Col>
    </Row>
  );
}

export default Techstack;
