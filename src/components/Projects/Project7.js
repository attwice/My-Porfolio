import React from "react";
import {
  Row,
  Col,
  Container,
  Carousel,
  Button
} from "react-bootstrap";

function Project7() {
  return (
    <Container className="my-4">
      <Row className="bg-dark p-4 purple">
        <Col md={4}>
          <h1>NFT Game Design</h1>
          <h5 className="text-white text-left pt-4">
          Easily buy, sell & mint NFTs - NFTs from free-to-play games.
          </h5>
          <h5 className="py-4 text-left">
            <li>Game Design</li>
            <li>JavaScript</li>
            <li>Solidity</li>
            <li>Web3</li>
          </h5>
          <a href="https://wax.atomichub.io/" target="_blank" rel="noreferrer" className="linkbtn justify-content-center mx-auto">
            <Button className="btn-primary mb-2">Show project</Button>
          </a>
        </Col>
        <Col md={8}>
          <Carousel fade>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/p-10.webp"
                alt="Zero slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/2-1.webp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/2-2.webp"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/2-3.webp"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
export default Project7;