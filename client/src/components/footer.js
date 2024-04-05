import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p className="u-inline u-text-center u-m">© 2024. Designed & developed by Andrew Yuan. </p>
      <div className="u-flex u-justify-center u-align-center">
        <a
          href="https://github.com/Stormersyle/Personal-Website"
          target="_blank"
          className="source-code u-m"
        >
          Source Code
        </a>
        &nbsp;|&nbsp;
        <Link to="/admin" className="u-m">
          Admin Panel
        </Link>
      </div>
    </div>
  );
};

export default Footer;
