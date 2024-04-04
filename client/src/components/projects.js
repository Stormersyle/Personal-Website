import React from "react";
import { useState, useEffect } from "react";
import { get } from "../utilities.js";

import Waiting from "./waiting.js";

//project:
//  name: String,
// description: String,
// website_link: String,
// github_link: String,
// image_link: String,
// starred: Boolean, //true>false
// priority: Number, //higher priority comes first
// timestamp: { type: Date, default: Date.now },

const display_project = ({ name, description, website_link, github_link, image_link, starred }) => {
  return (
    <div className="u-width-fill u-flex u-align-start project" key={name}>
      <div className="u-height-fill u-flex-col words-container">
        <div className="u-height-fit u-flex u-justify-start u-align-center">
          {website_link ? (
            <a href={website_link} target="_blank" className="u-inline-block">
              <p className="u-ll">{name}</p>
            </a>
          ) : (
            <p className="u-inline-block u-ll">{name}</p>
          )}
          {github_link ? (
            <a
              href={github_link}
              target="_blank"
              className="u-flex u-align-center u-justify-center"
            >
              <img src="/assets/inverted_github.png" className="small-github-icon" />
            </a>
          ) : null}
          {starred ? <img src={"/assets/star.png"} className="u-inline-block star-icon" /> : null}
        </div>
        <div className="linebreak-1"></div>
        <p className="u-mm u-block">{description}</p>
      </div>
      <img src={image_link} className="u-block proj-image" />
    </div>
  );
};

const ProjectsPage = () => {
  const [projList, setProjList] = useState();
  useEffect(() => {
    get("/api/projects").then(setProjList);
  }, []);
  if (projList) {
    return (
      <div className="page-container">
        <div>
          <p className="u-xl">Projects</p>
        </div>
        {projList.map(display_project)}
      </div>
    );
  } else return <Waiting />;
};

export default ProjectsPage;
