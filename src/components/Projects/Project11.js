import React from "react";
import {
  Row,
  Col,
  Container,
  Carousel,
  Button
} from "react-bootstrap";

function Project11() {
  return (
    <Container className="my-4">
      <Row className="bg-dark p-4 purple">
        <Col md={4}>
          <h1>3D Product Design</h1>
          <h5 className="text-white text-left pt-4">
            Detail-oriented modeling and photorealistic rendering. Smart textures and shaders.
          </h5>
          <h5 className="py-4 text-left">
            <li>Autodesk 3Ds Max</li>
            <li>Autodesk Maya</li>
            <li>Blender</li>
          </h5>
          <a href="http://cornichewatches.com/" target="_blank" rel="noreferrer" className="linkbtn justify-content-center mx-auto">
            <Button className="btn-primary mb-2">Show project</Button>
          </a>
        </Col>
        <Col md={8}>
          <Carousel fade>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/p-13.webp"
                alt="Zero slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/3d-1.webp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/3d-2.webp"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/3d-3.webp"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
export default Project11;