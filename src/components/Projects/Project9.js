import React from "react";
import {
  Row,
  Col,
  Container,
  Carousel,
  Button
} from "react-bootstrap";

function Project9() {
  return (
    <Container className="my-4">
      <Row className="bg-dark p-4 purple">
        <Col md={4}>
          <h1>Unity 3D project</h1>
          <h5 className="text-white text-left pt-4">
            Multi-platform and realistic simulation.
            Fully functioned and optimization.
          </h5>
          <h5 className="py-5 text-left">
            <li>Unity 3D</li>
            <li>C#</li>
            <li>Shader Script</li>
            <li>Android, Web3 and WebGL platform</li>
          </h5>
          <a href="https://play.google.com/store/apps/details?id=com.falcons.airxfight" target="_blank" rel="noreferrer" className="linkbtn justify-content-center mx-auto">
            <Button className="btn-primary mb-2">Show project</Button>
          </a>
        </Col>
        <Col md={8}>
          <Carousel fade>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/unity.webp"
                alt="Zero slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/a-1.webp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/a-2.webp"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/a-3.webp"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
export default Project9;