import React from "react";
import "../stylesheets/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <a href="https://github.com/Stormersyle" target="_blank">
          <img src="/assets/github.png" />
        </a>
        <a href="https://www.linkedin.com/in/andrewyuan02/" target="_blank">
          <img src="/assets/linkedin.png" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
