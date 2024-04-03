import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p className="u-inline">© 2024. Designed & developed by Andrew Yuan. </p>
      <div className="u-flex u-justify-center u-align-center">
        <a
          href="https://github.com/Stormersyle/Personal-Website"
          target="_blank"
          className="source-code"
        >
          Source Code
        </a>
        &nbsp;|&nbsp;
        <Link to="/admin">Admin Panel</Link>
      </div>
    </div>
  );
};

export default Footer;
