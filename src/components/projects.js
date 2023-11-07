import React from "react";
import Navbar from "./navbar";
import ProjectBox from "./projectBox";
import { projectsDescriptions } from "./descriptions";
import Icons from "./icons";
import valineupsImg from "../images/valineups.png";
import spaceInvadersImg from "../images/spaceinvaders.png";
import feedMe from "../images/feed_me.jpeg";
import LOR from "../images/LOR.png";
import PhotoBase from "../images/PhotoBase.png";

function Projects(props) {
  const valineups = null;
  const spaceInvaders = (
    <p>
      A video demo is located{" "}
      <a
        href="https://www.youtube.com/watch?v=ZdFEAYNoAao&ab_channel=JesseRen"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </p>
  );

  return (
    <div className="landing projectLanding">
      <Navbar />
      <div className="projects">
        <div className="row">
          <ProjectBox
            description={projectsDescriptions[4]}
            imgurl={PhotoBase}
            className="PhotoBase"
            github="https://github.com/jesseren/PhotoBase"
          />
          <ProjectBox
            description={projectsDescriptions[3]}
            imgurl={LOR}
            className="lor"
            github="https://github.com/billwang80/leftonread"
          />
        </div>
        <div className="row">
          <ProjectBox
            description={projectsDescriptions[0]}
            imgurl={valineupsImg}
            className="valineups"
            custom={valineups}
            github="https://github.com/billwang80/valineups-app"
          />
          <ProjectBox
            description={projectsDescriptions[1]}
            imgurl={feedMe}
            className="feedme"
            github="https://github.com/stephhsu/feed-me"
          />
        </div>
        <div className="row">
          <ProjectBox
            description={projectsDescriptions[2]}
            imgurl={spaceInvadersImg}
            className="spaceinvaders"
            custom={spaceInvaders}
            github="https://github.com/jesseren/SpaceInvaders"
          />
        </div>
      </div>

      <Icons />
    </div>
  );
}

export default Projects;
