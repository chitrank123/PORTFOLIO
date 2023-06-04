import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import Company from "./company";
import exImg from "../../Assets/experience.png";
import acuvisorImg from "../../Assets/acuvisor1.webp";


function Experience() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My Work <strong className="purple">Experience </strong>
            </h1>
            <ExperienceCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={exImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Acuvisor Insurance Brokers </strong>
            </h1>

            <Company />
          </Col>
          <Col>            <div style={{marginLeft:"100px"}}>
            <img src={acuvisorImg} alt="about" className="img-fluid" style={{width:"400px",height:"150px"}} />
            </div></Col>
          
        </Row>

      </Container>
    </Container>
  );
}

export default Experience;
