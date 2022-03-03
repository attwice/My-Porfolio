import React from "react";
import { Col, Row } from "react-bootstrap";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/15.webp" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/11.webp" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/13.webp" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/12.webp" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/14.webp" alt=""/>
      </Col>
    </Row>
  );
}

export default Toolstack;
