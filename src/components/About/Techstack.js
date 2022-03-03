import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/0.webp" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/1.webp" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/2.webp" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/9.webp" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/4.webp" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/5.webp" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/3.webp" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/8.webp" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/6.webp" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/7.webp" alt=""/>
      </Col>
    </Row>
  );
}

export default Techstack;
