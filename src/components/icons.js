import React from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";

function Icons() {
  return (
    <div className="icons">
      <a
        href="https://github.com/jesseren"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github"></img>
      </a>
      <a
        href="https://www.linkedin.com/in/jesse-ren/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="linkedin"></img>
      </a>
      <a href="mailto:jesse.ren@uwaterloo.ca" target="_top">
        <img src={email} alt="email"></img>
      </a>
    </div>
  );
}

export default Icons;
