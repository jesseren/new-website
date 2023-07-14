import React, { useState, useEffect, useRef } from "react";
import Navbar from "./navbar";
import InfoBox from "./infoBox";
import { coopDescriptions } from "./descriptions";
import Icons from "./icons";
import meta from "../images/meta-logo copy.jpg";
import tulip from "../images/tulip.png";
import polar from "../images/k.png";
import tritonwear from "../images/tritonwear.png";
import economical from "../images/economical.png";
import uoft from "../images/uoft.png";

function Career() {
  return (
    <div className="landing careerLanding">
      <Navbar />
      <div className="career">
        <div className="first">
          <InfoBox
            className="meta"
            company="Meta"
            link="https://about.meta.com/"
            position="Frontend Engineer Intern"
            imgurl={meta}
            date="May 2022 - August 2022"
            description={coopDescriptions[5]}
          />
          <InfoBox
            className="tulip"
            company="Tulip"
            link="https://www.tulip.com/about-us/"
            position="Software Developer"
            imgurl={tulip}
            date="September - December 2021"
            description={coopDescriptions[0]}
          />
        </div>
        <div className="second">
          <InfoBox
            className="polar"
            company="Polar"
            link="https://www.createwithpolar.com/solutions"
            position="Software Developer"
            imgurl={polar}
            date="January - April 2021"
            description={coopDescriptions[1]}
          />
          <InfoBox
            className="tritonwear"
            company="Tritonwear"
            link="https://www.tritonwear.com"
            position="Software Engineer"
            imgurl={tritonwear}
            date="May - August 2020"
            description={coopDescriptions[2]}
          />
        </div>
        <div className="second">
          <InfoBox
            className="economical"
            company="Economical"
            link="https://www.economical.com/en/home"
            position="Access Analyst"
            imgurl={economical}
            date="September - December 2019"
            description={coopDescriptions[3]}
          />
          <InfoBox
            className="uoft"
            company="UofT"
            link="https://www.utsc.utoronto.ca/home/utsc"
            position="Engineering Assistant"
            imgurl={uoft}
            date="January - April 2019"
            description={coopDescriptions[4]}
          />
        </div>
      </div>
      <Icons />
    </div>
  );
}

export default Career;
