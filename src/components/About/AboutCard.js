import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div style={{ marginTop: "0px", paddingTop: "0px" }}>
      <Card
        className="quote-card-view"
        style={{
          marginTop: "0px",
          paddingTop: "0px",
          border: "none", // Optional: looks cleaner
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Optional styling
        }}
      >
        <Card.Body style={{ paddingTop: "0px", marginTop: "0px" }}>
          <blockquote className="blockquote mb-0" style={{ marginTop: "0px", paddingTop: "0px" }}>
            <p style={{ textAlign: "justify", marginTop: "0px", paddingTop: "0px" }}>
              Hi Everyone, I am <span className="purple">Divyadharshini </span>
              from <span className="purple">India.</span>
              <br />
              I'm someone who genuinely enjoys learning new things — not just to keep up with trends,
              but because I'm curious about how things work under the hood.
              Whether it’s building smooth interfaces with <strong className="purple">React.js</strong>,
              diving into backend logic with <strong className="purple">Node.js</strong>, or experimenting
              with <strong className="purple">Next.js</strong> and modern tech stacks — I love every bit of it.
              <br />
              <br />
              What makes me excited about tech isn’t just the tools or frameworks —
              it’s the power to build something useful, meaningful, and impactful.
              I believe that good development is not just about writing code,
              it’s about solving real-world problems and creating value for users.
            </p>
            <p style={{ color: "rgb(155 126 172)", marginBottom: "15px" }}>
              "Strive to build things that make a difference!"{" "}
            </p>
            <footer className="blockquote-footer">Divyadharshini</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;
