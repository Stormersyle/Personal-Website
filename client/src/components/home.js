import React from "react";
import "../stylesheets/home.css";

const Home = () => {
  return (
    <div>
      <div>
        <h6>Andrew Yuan</h6>
        <p>
          Hi! I'm Andrew, a freshman at MIT studying math and computer science. Welcome to my
          personal website!
        </p>
        <div>
          <img src="/assets/downarrow.png" />
        </div>
      </div>
      <div>
        <h1>About Me</h1>
        <p>
          I’m a first-year at MIT double-majoring in mathematics (course 18) and computer science
          (course 6-3). Within computer science, I’m especially interested in AI/ML, and am
          passionate about building technology to make an impact on the world. I also love solving
          math problems, especially combinatorics.
          <br />
          Outside of academics, I enjoy playing chess, volleyball, and video games, and in general
          reading about interesting things. Feel free to check out my personal projects,
          coursework/notes, and (recently started) blog. <br />
          My resume is available
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
