import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiPython, DiJava } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaCuttlefish } from "react-icons/fa";

function Skill() {
  const sectionStyle = {
    paddingTop: "100px",
    paddingBottom: "60px",
    backgroundColor: "#0d0b1f",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: "40px",
  };

  const highlightStyle = {
    color: "#b45cff",
  };

  const iconContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
    color: "#ffffff",
  };

  const iconStyle = {
    fontSize: "4rem",
    color: "#b45cff",
    marginBottom: "10px",
  };

  const labelStyle = {
    fontSize: "1rem",
    fontWeight: "500",
  };

  return (
    <div style={sectionStyle}>
      <h2 style={headingStyle}>
        Professional <span style={highlightStyle}>Skillset</span>
      </h2>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={6} md={2} style={iconContainerStyle}>
          <FaCuttlefish style={iconStyle} />
          <div style={labelStyle}>C</div>
        </Col>
        <Col xs={6} md={2} style={iconContainerStyle}>
          <CgCPlusPlus style={iconStyle} />
          <div style={labelStyle}>C++</div>
        </Col>
        <Col xs={6} md={2} style={iconContainerStyle}>
          <DiPython style={iconStyle} />
          <div style={labelStyle}>Python</div>
        </Col>
        <Col xs={6} md={2} style={iconContainerStyle}>
          <DiJava style={iconStyle} />
          <div style={labelStyle}>Java</div>
        </Col>
        <Col xs={6} md={2} style={iconContainerStyle}>
          <DiJavascript1 style={iconStyle} />
          <div style={labelStyle}>JavaScript</div>
        </Col>
        <Col xs={6} md={2} style={iconContainerStyle}>
          <DiReact style={iconStyle} />
          <div style={labelStyle}>React</div>
        </Col>
        <Col xs={6} md={2} style={iconContainerStyle}>
          <FaHtml5 style={iconStyle} />
          <div style={labelStyle}>HTML</div>
        </Col>
        <Col xs={6} md={2} style={iconContainerStyle}>
          <FaCss3Alt style={iconStyle} />
          <div style={labelStyle}>CSS</div>
        </Col>
      </Row>
    </div>
  );
}

export default Skill;
