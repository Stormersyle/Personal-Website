import React from "react";
import { useState, useEffect } from "react";
import { get } from "../utilities.js";
import "../stylesheets/projects.css";

import Waiting from "./waiting.js";
import { formatDate } from "./utilities.js";

//project:
//  name: String,
// description: String,
// screenshot_link: String,
// website_link: String,
// github_link: String,
// starred: Boolean, //true>false
// priority: Number, //higher priority comes first
// timestamp: { type: Date, default: Date.now },

const display_project = ({
  name,
  description,
  screenshot_link,
  website_link,
  github_link,
  timestamp,
}) => {
  return (
    <div>
      <div>
        <a href={website_link} target="_blank">
          {name}
        </a>
        <a href={github_link} target="_blank">
          <img src="../../assets/inverted_github.png" />
        </a>
        <br />
        <p>{formatDate(timestamp)}</p>
      </div>

      <div>{description}</div>
      <div>
        <img src={screenshot_link} />
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
      <div>
        <h1>Projects</h1>
        {projList.map(display_project)}
      </div>
    );
  } else return <Waiting />;
};

export default ProjectsPage;
