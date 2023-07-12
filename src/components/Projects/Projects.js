import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portfolio"
              description="My portfolio project, developed with React.js, is a visually appealing and interactive showcase that reflects my skills, expertise, and creative journey. Through an intuitive and dynamic user interface, it presents a comprehensive display of my projects, highlighting my professional achievements, and providing insights into my passion for web development. "
              ghLink="https://github.com/chitrank123/PORTFOLIO"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FACE-RECOGNITION-ATTENDENCE"
              description="My portfolio project, developed with React.js, is a visually appealing and interactive showcase that reflects my skills, expertise, and creative journey. Through an intuitive and dynamic user interface, it presents a comprehensive display of my projects, highlighting my professional achievements, and providing insights into my passion for web development. "
              ghLink="https://github.com/chitrank123/FACE-RECOGNITION-ATTENDENCE"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
