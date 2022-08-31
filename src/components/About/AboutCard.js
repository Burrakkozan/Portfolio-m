import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" , margin:'10px'}} >
            Hi Everyone, &nbsp;I am apply &nbsp;<span className="purple">Burak Ozcan&nbsp;</span>
            from&nbsp; <span className="purple"> Turkey</span>
            <br />I do content on Design and Development. I really enjoy learning languages and frameworks 
            like React-Nextjs and React Native, as well as work in Animation like a three.js. 
            I also enjoy wireframing 3D, UI & UX, and design in general.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Burak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
