import React from "react";
import { Container} from "react-bootstrap";
// import Particle from "../Particle";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";
import Project7 from "./Project7";
import Project8 from "./Project8";
import Project9 from "./Project9";
import Project10 from "./Project10";
import Project11 from "./Project11";

function Projects() {
  return (
    <Container fluid className="project-section">
       
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
      <Project5 />
      <Project6 />
      <Project7 />
      <Project8 />
      <Project9 />
      <Project10 />
      <Project11 />
    </Container>
  );
}

export default Projects;
