import React from "react";
import Card from "react-bootstrap/Card";


function ExperienceCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am currently working as a Software Developer Trainee at <span className="purple">Acuvisor Insurance Brokers</span> for the past year, where I have been honing my skills in Django, React, Postman, MySQL, Express, and MongoDB.

During my time at <span className="purple">Acuvisor Insurance Brokers</span>, I have gained hands-on experience in developing web applications using the Django framework. With Django's robust features and efficient development process, I have been able to create scalable and secure applications that meet client requirements.

In addition to Django, I have been working extensively with React, a powerful JavaScript library for building dynamic user interfaces. Using React, I have developed interactive and responsive components that enhance the user experience and make applications more intuitive.

To ensure smooth API testing and documentation, I utilize Postman, a popular tool for API development and testing. With Postman, I can efficiently test API endpoints, track requests, and collaborate with team members, ensuring the reliability and functionality of the applications I develop.

For data storage and management, I have worked with both MySQL and MongoDB. MySQL provides a reliable relational database solution, while MongoDB offers flexibility and scalability for handling large amounts of data in a NoSQL environment. By leveraging these databases, I have created efficient data models and implemented data retrieval and manipulation operations.

Moreover, I have gained exposure to Express, a flexible and minimalist web application framework for Node.js. With Express, I have developed server-side applications and APIs, enabling seamless communication between the frontend and backend components of web applications.

Through my experience at <span className="purple">Acuvisor Insurance Brokers</span>, I have deepened my understanding of software development best practices, gained proficiency in a variety of tools and technologies, and refined my skills in Django, React, Postman, MySQL, Express, and MongoDB.

I am excited to continue my growth as a software developer, applying my expertise to build innovative and high-quality web applications.
          </p>



        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
