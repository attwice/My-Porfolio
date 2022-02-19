import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bryan Usi C </span>
            from <span className="purple"> San Fernando,  Philippines.</span>
            <br />I mastered web programing language and computer science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hand Drawings
            </li>
            <li className="about-activity">
              <ImPointRight /> 3D Modelings
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Bryan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
