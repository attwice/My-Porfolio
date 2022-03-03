import React from "react";
import { 
  Container, 
  Row, 
  Col,
  Carousel
} from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                WELCOME TO MY PAGE
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Bryan Usi C</strong>
              </h1>

              <div style={{ padding: 20, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={7} style={{ paddingBottom: 20 }}>
              <Carousel fade>
                <Carousel.Item interval={5650}>
                  <img
                    className="d-block w-100 sliderimg"
                    src="../slider1.webp"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5650}>
                  <img
                    className="d-block w-100 sliderimg"
                    src="../slider2.webp"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5650}>
                  <img
                    className="d-block w-100 sliderimg"
                    src="../slider3.webp"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
