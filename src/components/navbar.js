import React from "react";
import { Link } from "react-router-dom";
import resume from "../W2023 Resume.pdf";

function Navbar() {
  return (
    <div style={{ zIndex: "3" }} className="">
      <Link className="home" to="/">
        <img src="home.png" alt="home" />
      </Link>
      <div className="navbar">
        <Link to="/career">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About Me</Link>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
