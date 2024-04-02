import React from "react";
import "../stylesheets/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navlink-container name-container">Andrew Yuan</div>
      <div className="navlink-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/academics" className="nav-link">
          Academics
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/blog" className="nav-link">
          Blog
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <a href="https://github.com/Stormersyle" target="_blank">
          <img src="/assets/github.png" className="nav-icon github" />
        </a>
        <a href="https://www.linkedin.com/in/andrewyuan02/" target="_blank">
          <img src="/assets/linkedin.png" className="nav-icon linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
