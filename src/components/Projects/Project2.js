import React from "react";
import {
  Row,
  Col,
  Container,
  Carousel,
  Button
} from "react-bootstrap";

function Project2() {
  return (
    <Container className="my-4">
      <Row className="bg-dark p-4 purple">
        <Col md={8}>
          <Carousel fade>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/p-2.webp"
                alt="Zero slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/w-4.webp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/w-5.webp"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/w-6.webp"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={4}>
          <h1>E-Commerce Site</h1>
          <h5 className="text-white text-left pt-4">
            Advanced design & Quality Appareal made easy. Easy to use with shopify design.
          </h5>
          <h5 className="py-4 text-left">
            <li>Shopify</li>
            <li>Animate.css</li>
            <li>jQuery</li>
            <li>NFT</li>
            <li>Solidity</li>
          </h5>
          <a href="https://jogowear.com.au/" target="_blank" rel="noreferrer" className="linkbtn justify-content-center mx-auto">
            <Button className="btn-primary mb-2">Show project</Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default Project2;