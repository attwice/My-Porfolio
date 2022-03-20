import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.webp";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              I <span className="purple"> SHOW UP </span>
            </h1>
            <p className="home-about-body">
              I am a proactive and passionate developer.
              <br />
              <br />
              <h3 className="purple">Top 2% React.js Developer</h3>
              I am a senior Web front-end developer with strong skills and mature experience in modern web development.
              I have hands-on experience in building highly customized web applications based on Javascript such as
              <i>
                <b className="purple"> React.js and Vue.js. </b>
              </i>
              <br />
              <br />
              <h3 className="purple">Top 3% NFT Developer</h3>
              Last several years, a remarkable advance was made in Blockchain and crypto fields. Including &nbsp;
              <i>
                <b className="purple">Defi, Dapp and Market Place building</b> and
                also in areas related to{" "}
                <b className="purple">
                  Non-Fungable Token.
                </b>
              </i>
              <br />
              <br />
              When I get an idea for specific NFT, I can build from
              <b className="purple">
                NFT concept art design, 100+ NFT art traits design, Rarity of each traits, 10K NFTs and their metadata generation, Upload them to IPFS</b> and
              <i>
                <b className="purple">
                  {" "}
                  NFT website building + deployment.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">contact </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/attwice"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/Billibear"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.freelancer.com/u/bruicanlas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <img
                    className="home-social-icons"
                    src="../lancer.webp" alt="" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.freelancer.com/u/bruicanlas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
