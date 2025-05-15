import React from "react";

const Contact = () => {
  return (
    <div className="page-container">
      <div className="contact">
        <p className="u-xl">Contact</p>
        <br />
        <p>
          You can reach me through email at:{" "}
          <a href="azyuan@mit.edu" onclick="_blank">
            azyuan@mit.edu
          </a>
          <br />
          <br />
          I do my best to respond to all emails—please follow up if I'm not getting back to you.
          <br />
        </p>
      </div>
    </div>
  );
};

export default Contact;
