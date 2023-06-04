import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chitrank Tak </span>
            from <span className="purple"> Jaipur ,Rajasthan, India.</span>
            <br /> 

I am a passionate Software Developer.<br/> With 1 year of experience in <span className="purple">Python, Django, React, Express, MongoDB, My Sql, PostmanAPI. </span>I specialize in <span className="purple">Rest Api, Api integration, Python, Django Rest Framework</span>.
I have a strong background in Software Development. Throughout my journey, I have worked on various projects, collaborating with clients and teams to deliver high-quality results. I am dedicated to continuously expanding my knowledge and staying updated with the latest industry trends and technologies.

My goal is to provide solutions to national problem through software industry. I am driven by a desire to make such an impact in the industry where i will be on top in one search. I approach every project with creativity, attention to detail, and a commitment to excellence.

In addition to my technical skills, I possess strong communication and problem-solving abilities. I am a collaborative team player and enjoy working in dynamic environments. I am constantly seeking new challenges that allow me to grow both personally and professionally.

When I'm not working, I enjoy .<ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Webs and Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging out with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>  
          If you have any questions or would like to discuss potential collaborations, please feel free to get in touch.<br/>
          Thank you for visiting my portfolio!

          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is like a guitar,<br/> we have to press every string properly to get a perfect TUNE!"{" "}
          </p>
          <footer className="blockquote-footer">Chitrank</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
