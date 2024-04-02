import React from "react";
import "../stylesheets/home.css";

const Home = () => {
  return (
    <div>
      <div id="home-part1">
        <div className="intro-container">
          <div className="bigname-container">
            <p className="u-block u-huge typewriter">Hi, I'm Andrew.</p>
          </div>
          <br />

          <p className=" u-m2">
            I'm a student at MIT studying math and computer science. Welcome to my personal website!
          </p>
          <br />
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
        <p className="u-block u-m2">
          I’m a first-year at MIT double-majoring in mathematics (course 18) and computer science
          (course 6-3). Within computer science, I’m especially interested in AI/machine learning,
          and in general I'm passionate about building technology to make an impact on the world. I
          also love solving math problems, especially combinatorics. Career-wise, I'm interested in
          the fields of entrepreneurship, ML research, and quantitative finance.
          <br />
          <br />
          Outside of academics, I enjoy playing chess, volleyball, and video games. Feel free to
          check out my personal projects, coursework/notes, and (recently started) blog. <br />
          <br />
          My resume is available{" "}
          <a href="/assets/resume.pdf" target="_blank">
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Home;
