import React from "react";
import { useState, useEffect } from "react";
import { get } from "../utilities.js";

import Waiting from "./waiting.js";

//project:
//  name: String,
// description: String,
// website_link: String,
// github_link: String,
// starred: Boolean, //true>false
// priority: Number, //higher priority comes first
// timestamp: { type: Date, default: Date.now },

const display_project = ({ name, description, website_link, github_link }) => {
  return (
    <div className="u-width-fill u-flex-col u-justify-start project">
      <div className="u-height-fit u-flex u-justify-start u-align-center">
        {website_link ? (
          <a href={website_link} target="_blank" className="u-inline-block">
            <p className="u-ll">{name}</p>
          </a>
        ) : (
          <p className="u-inline-block u-ll">{name}</p>
        )}
        {github_link ? (
          <a href={github_link} target="_blank" className="u-inline-block">
            <img src="/assets/inverted_github.png" className="small-github-icon" />
          </a>
        ) : null}
      </div>
      <div className="proj-space-div"></div>
      <div>
        <p className="u-mm">{description}</p>
      </div>
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
