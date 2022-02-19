import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/0.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/1.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/2.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/9.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/4.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/5.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/3.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/8.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/6.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/7.png" alt=""/>
      </Col>
    </Row>
  );
}

export default Techstack;
