import React from "react";
import {
  Row,
  Col,
  Container,
  Carousel,
  Button
} from "react-bootstrap";

function Project10() {
  return (
    <Container className="my-4">
      <Row className="bg-dark p-4 purple">
        <Col md={8}>
          <Carousel fade>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/p-12.webp"
                alt="Zero slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/m-1.webp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/m-2.webp"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/m-3.webp"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={4}>
          <h1>3D Game Modeling</h1>
          <h5 className="text-white text-left pt-4">
            Lowpoly modeling and optimized design. Smart game texturing and shading.
          </h5>
          <h5 className="py-4 text-left">
            <li>Autodesk 3Ds Max</li>
            <li>Autodesk Maya</li>
            <li>Blender</li>
            <li>Adobe Photoshop</li>
          </h5>
          <a href="https://play.google.com/store/apps/details?id=com.falcons.airxfight" target="_blank" rel="noreferrer" className="linkbtn justify-content-center mx-auto">
            <Button className="btn-primary mb-2">Show project</Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default Project10;