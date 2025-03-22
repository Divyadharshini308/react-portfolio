import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolioImg from "../../Assets/Projects/portfolio.png";
import weatherAppImg from "../../Assets/Projects/weather.png"; // <-- Add this image file too

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
          {/* Portfolio Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImg}
              isBlog={false}
              title="Portfolio Website"
              description="A personal portfolio website built using React.js and Bootstrap. It includes sections like Home, About, Skills, Projects, and Resume to showcase my profile and work."
              ghLink="https://github.com/yourusername/your-portfolio-repo"
              demoLink="https://your-portfolio-live-link.com"
            />
          </Col>

          {/* Beginner Project - Weather App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherAppImg}
              isBlog={false}
              title="Weather App"
              description="A simple Weather App using HTML, CSS, and JavaScript. It fetches real-time weather data using OpenWeatherMap API based on the city entered by the user."
              ghLink="https://github.com/yourusername/weather-app"
              demoLink="https://your-weather-app-live-link.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
