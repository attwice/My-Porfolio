import React from "react";
import { Col, Row } from "react-bootstrap";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/15.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/11.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/13.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/12.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="skillimg" src="../skills/14.png" alt=""/>
      </Col>
    </Row>
  );
}

export default Toolstack;
