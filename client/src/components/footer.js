import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p className="u-inline">© 2024. Designed & developed by Andrew Yuan. </p>
      <a
        href="https://github.com/Stormersyle/Personal-Website"
        target="_blank"
        className="source-code u-m"
      >
        Source Code
      </a>
    </div>
  );
};

export default Footer;
