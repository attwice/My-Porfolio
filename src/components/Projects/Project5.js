import React from "react";
import {
  Row,
  Col,
  Container,
  Carousel,
  Button
} from "react-bootstrap";

function Project5() {
  return (
    <Container className="my-4">
      <Row className="bg-dark p-4 purple">
        <Col md={4}>
          <h1>NFT Minting Site</h1>
          <h5 className="text-white text-left pt-4">
            Honey Bee's Smart design and animation.
          </h5>
          <h5 className="py-4 text-left">
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Smart Contract</li>
            <li>NFT</li>
            <li>Solidity</li>
          </h5>
          <a href="https://honeybeeclub.io/" target="_blank" rel="noreferrer" className="linkbtn justify-content-center mx-auto">
            <Button className="btn-primary mb-2">Show project</Button>
          </a>
        </Col>
        <Col md={8}>
          <Carousel fade>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/p-5.webp"
                alt="Zero slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/1-1.webp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/1-2.webp"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/1-3.webp"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
export default Project5;