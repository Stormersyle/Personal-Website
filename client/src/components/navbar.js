import React from "react";
import "../stylesheets/navbar.css";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  return (
    <div className="hamburger-container u-width-fill">
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <a className="menu__item" href="/">
              Home
            </a>
          </li>
          {/* <li>
            <a className="menu__item" href="/academics">
              Academics
            </a>
          </li> */}
          <li>
            <a className="menu__item" href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a className="menu__item" href="/blog">
              Blog
            </a>
          </li>
          <li>
            <a className="menu__item" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="Navbar u-width-fill">
      <div className="navlink-container name-container">
        <Link to="/" className="nav-link u-mmm">
          Andrew Yuan
        </Link>
      </div>
      <div className="navlink-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
        {/* <Link to="/academics" className="nav-link">
          Academics
        </Link> */}
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/blog" className="nav-link">
          Blog
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <a href="https://github.com/Stormersyle" target="_blank" className="navicon-container">
          <img src="/assets/github.png" className="nav-icon github" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrewyuan02/"
          target="_blank"
          className="navicon-container"
        >
          <img src="/assets/linkedin.png" className="nav-icon linkedin" />
        </a>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="u-width-fill u-height-fit">
      <Navbar />
      <HamburgerMenu />
    </div>
  );
};

export default Nav;
