import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/girl.png";
import Tilt from "react-parallax-tilt";
import AboutCard from "./AboutCard";

function About() {
  return (
    <Container fluid className="about-section" style={{ padding: "60px 20px", backgroundColor: "#0d0b1e" }}>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              paddingTop: "30px",
              paddingBottom: "20px",
              color: "white",
              textAlign: "justify",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            
            {/* ✅ Include the AboutCard here */}
            <AboutCard />
          </Col>
          <Col md={5} style={{ paddingTop: "80px", paddingBottom: "20px" }}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="about" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
