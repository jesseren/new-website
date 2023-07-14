import React from "react";
import { Link } from "react-router-dom";
import resume from "../Graduation Resume 2.0.pdf";
import home from "../images/home.png";

function Navbar() {
  return (
    <div style={{ zIndex: "3" }} className="">
      <Link className="home" to="/">
        <img src={home} alt="home" />
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
