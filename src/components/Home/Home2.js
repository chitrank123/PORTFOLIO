import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Introducing myself as a passionate programmer, I have fallen in love with the art of coding and have gained expertise in <span className="purple"><i> Python, Django, and React.js</i></span>. My focus lies in crafting innovative web technologies and products, with a special interest in exploring the vast potential of these technologies.

            To bring my ideas to life, I rely on the power of Python for its versatility and extensive ecosystem. With Django, I can efficiently develop robust and scalable web applications, simplifying complex tasks and accelerating the development process.

            In the realm of frontend development, I harness the power of React.js, a modern JavaScript library that enables me to build dynamic and interactive user interfaces. Its component-based architecture allows for modular and reusable code, making the development process efficient and maintainable.

            By combining <span className="purple"> <i>Python, Django, and React.js</i></span>, I create user-friendly and visually captivating web applications that deliver seamless user experiences. I prioritize not only the functionality of my projects but also their aesthetics and usability.

            Additionally, I am continuously exploring emerging technologies and trends to expand my skill set. I am particularly intrigued by the possibilities of machine learning and its integration with Python. Leveraging machine learning algorithms and techniques, I aim to develop intelligent and data-driven applications that provide personalized experiences.

            Join me on my programming journey as I leverage my expertise in <span className="purple"><i> Python, Django, and React.js</i></span> to build cutting-edge web applications. Let's shape the future together through innovative and <span className="purple"><i>user-friendly code!</i></span>
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
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chitrank123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/chitrank_tak"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chitrank-tak-465042212/?originalSubdomain=in"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/chitrank_tak20/"
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
