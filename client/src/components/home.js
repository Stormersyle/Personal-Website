import React from "react";
import { useNavigate } from "react-router-dom";

import "../stylesheets/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div id="home-part1">
        <div className="intro-container">
          <br />
          <div className="bigname-container">
            <p id="bigname" className=" typewriter">
              Hi! I'm Andrew.
            </p>
          </div>
          <br />

          <div id="text-pic-container">
            <div className="text-intro-container">
              <p className="u-mmm">
                I'm a student at MIT studying math and computer science. Welcome to my personal
                website!
              </p>
              <br />
              <div className="u-flex  u-width-fill u-height-fill u-justify-center">
                <button onClick={() => window.open("/assets/resume.pdf", "_blank")}>
                  <p>View Resume</p>
                </button>
                <button onClick={() => navigate("/contact")}>
                  <p>Contact Me</p>
                </button>
              </div>
            </div>
            <div className="filler-img-container">
              <img src="/assets/filler_photo.png" className="filler-img u-block" />
            </div>
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
        <div className="u-flex">
          <div className="headshot-container">
            <img src="/assets/headshot2.jpg" id="headshot" />
          </div>
          <div className="about-container">
            <p className="u-mm">
              I’m a sophomore at MIT double-majoring in mathematics (course 18) and computer science
              (course 6-3). Within these fields, I'm especially interested in AI/machine learning,
              probability/statistics, and computational mathematics. I'm passionate about building
              technology to make an impact on the world, and I hope to focus my career on doing
              this.
              <br />
              <br />
              In my free time, I enjoy playing chess, volleyball, and video games, as well as
              listening to music and reading various things I find interesting. I also have a cat
              named{" "}
              <a href="/assets/fuzzy_pic.jpg" target="_blank">
                Fuzzy
              </a>
              . Feel free to check out my projects, resources/notes, or (newly started) blog!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
