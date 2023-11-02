import React from "react";
import Navbar from "./navbar";
import Icons from "./icons";
import me1 from "../images/me1.jpg";

function About() {
  return (
    <div className="landing aboutLanding">
      <Navbar />
      <div className="about">
        <img src={me1} alt="Jesse Ren" />
        <div className="aboutText">
          <p>
            I recently graduated from Environmental Engineering at the
            University of Waterloo and am seeking opportunities in
            frontend/fullstack engineering.
          </p>
          <p>
            While I am concerned about environmental issues and sustainability,
            I also have a passion for software development and find coding to be
            an enjoyable application of the engineering problem-solving skills
            I've obtained in university.
          </p>
          <p>
            On my free time I enjoy learning new development tools, playing
            softball and listening to Bangtan Sonyeondan.
          </p>
          <p>
            Feel free to{" "}
            <a href="mailto:jesse.ren@uwaterloo.ca" target="_top">
              <u>reach out</u>
            </a>{" "}
            if you'd like to talk or get to know me better!
          </p>
        </div>
      </div>
      <Icons />
    </div>
  );
}

export default About;
