import React from "react";

import Me from "../assets/me.jpeg";

function About() {
  return (
    <>
      <section className="aboutContainer">
        <div className="me">
          <h3>About me</h3>
          <p className="tagline" id="purpleItem">
            - Get To Know Me -
          </p>
          <div className="myImage">
            <img src={Me}></img>
          </div>
        </div>
        <div className="aboutMe">
          <h3 className="heading">A Little About Ryan</h3>
          <div className="myWords">
            You are welcome to my website, feel free to get to know me through
            this website. My passion for software development comes from way
            back in 2016 since my initial computer interactions while I was in
            highschool and it all started from there. With a knack for
            problem-solving and serendipity I've honed my skills in software
            development and agile methodologies. Continuously learning and
            evolving, I seek not just to code but to craft elegant, efficient,
            and user-centric software, to contribute impactful, forward-looking
            solutions in the ever-evolving tech landscape.
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
