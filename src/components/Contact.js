import React from "react";

function Contact() {
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#0d0b1f",
    color: "#fff",
    fontFamily: "sans-serif",
  };

  const mainContentStyle = {
    flex: "1",
    padding: "100px 40px 40px", // top padding to avoid navbar overlap
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#fff",
    textAlign: "center",
  };

  const emailStyle = {
    fontSize: "18px",
    color: "#ccc",
    marginBottom: "30px",
    textAlign: "center",
  };

  const formStyle = {
    width: "100%",
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const inputStyle = {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#1d1b2f",
    color: "#fff",
    fontSize: "16px",
  };

  const textAreaStyle = {
    ...inputStyle,
    minHeight: "120px",
    resize: "vertical",
  };

  const buttonStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#8e2de2",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <div style={mainContentStyle}>
        <h2 style={headingStyle}>Contact Us</h2>
        <p style={emailStyle}>divyadharshinig608@gmail.com</p>

        <form style={formStyle}>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <input type="text" placeholder="Subject (optional)" style={inputStyle} />
          <textarea placeholder="Enter Your Message..." style={textAreaStyle}></textarea>
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
