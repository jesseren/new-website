import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import Navbar from "./navbar";
import Icons from "./icons";

function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <div className="content">
        <p>Hi, I'm Jesse Ren.</p>
        <p>
          An engineering student who loves coding, learning, and meeting new
          people!
        </p>
      </div>
      <Icons />
    </div>
  );
}

export default Landing;
