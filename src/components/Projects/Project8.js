import React from "react";
import {
  Row,
  Col,
  Container,
  Carousel,
  Button
} from "react-bootstrap";

function Project8() {
  return (
    <Container className="my-4">
      <Row className="bg-dark p-4 purple">
        <Col md={8}>
          <Carousel fade>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/p-11.webp"
                alt="Zero slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/1.webp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/2.webp"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 sliderimg"
                src="../projects/3.webp"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={4}>
          <h1>10K NFT Art Design</h1>
          <h5 className="text-white text-left pt-4">
            Client's idea-based and competitable with BAYC. 100+ art traits and rarity building.
            Perfect NFTs and metadata.
          </h5>
          <h5 className="py-4 text-left">
            <li>Sketch and concep art design</li>
            <li>Prototype NFT and traits design</li>
            <li>10K NFT and metadata generation</li>
          </h5>
          <a href="https://opensea.io/collection/kasual-kangaroo-clubofficial" target="_blank" rel="noreferrer" className="linkbtn justify-content-center mx-auto">
            <Button className="btn-primary mb-2">Show project</Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default Project8;