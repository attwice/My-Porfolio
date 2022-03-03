import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import {BsTelegram} from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright @ {year} Bryan Usi C</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>The template is made by © Bryan</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/attwice"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/Billibear"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <BsTelegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.freelancer.com/u/bruicanlas"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../lancer-s.webp" alt="" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.freelancer.com/u/bruicanlas"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
