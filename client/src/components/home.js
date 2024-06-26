import React from "react";
import "../stylesheets/home.css";

const Home = () => {
  return (
    <div>
      <div id="home-part1">
        <div className="intro-container">
          <div className="bigname-container">
            <p id="bigname" className="u-block typewriter">
              Hi, I'm Andrew.
            </p>
          </div>
          <br />

          <p className=" u-mm">
            I'm a student at MIT studying math and computer science. Welcome to my personal website!
          </p>
          <div className="headshot-container">
            <img src="/assets/headshot.png" className="headshot u-block" />
          </div>
        </div>
        <div className="downarrow-container">
          <a href="#home-part2">
            <img src="/assets/downarrow.png" className="downarrow bounce" />
          </a>
        </div>
      </div>
      <div id="home-part2">
        <p className="u-block u-xl">About Me</p>
        <br />
        <p className="u-block u-mm">
          I’m a first-year at MIT double-majoring in mathematics (course 18) and computer science
          (course 6-3). Within computer science, I’m especially interested in AI/machine learning,
          and in general I'm passionate about building technology to make an impact on the world. I
          also love solving math problems, especially combinatorics. Career-wise, I'm interested
          startups, quant finance, and software engineering. My resume is available{" "}
          <a href="/assets/resume.pdf" target="_blank">
            here
          </a>
          .
        </p>
        <br />
        <p className="u-block u-mm">
          In my free time, I enjoy playing chess and volleyball. Feel free to check out my projects,
          resources/notes, or (newly started) blog!
        </p>
      </div>
    </div>
  );
};

export default Home;
