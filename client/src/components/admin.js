import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { post } from "../utilities.js";
import "../stylesheets/admin.css";
import { Editor } from "./tiptap.js";

const PostBlog = () => {
  const titleRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const submit = () => {
    if (!(titleRef && passwordRef)) return;
    if (!titleRef.current.value) {
      alert("There needs to be a title!");
      return;
    }
    const text = Editor.getJSON();
    post("/api/blog", {
      title: titleRef.current.value,
      body: text,
      password: passwordRef.current.value,
    }).then(() => navigate("/"));
  };

  return (
    <div>
      <h1>New Blog Post</h1>
      <label for="post_title">Title:</label>
      <input type="text" id="post_title" ref={titleRef} />
      <Editor />
      <label for="post_password">Password:</label>
      <input type="password" id="post_password" ref={passwordRef} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

//  name: String,
// description: String,
// screenshot_link: String,
// website_link: String,
// github_link: String,
// starred: Boolean, //true>false
// priority: Number, //higher priority comes first
// timestamp: { type: Date, default: Date.now },

const PostProject = () => {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const screenshotRef = useRef(null);
  const websiteRef = useRef(null);
  const githubRef = useRef(null);
  const starredRef = useRef(null);
  const priorityRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const submit = () => {
    if (
      nameRef &&
      descriptionRef &&
      screenshotRef &&
      websiteRef &&
      githubRef &&
      starredRef &&
      priorityRef &&
      passwordRef
    ) {
      const project_params = {
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        screenshot_link: screenshotRef.current.value,
        website_link: websiteRef.current.value,
        github_link: githubRef.current.value,
        starred: starredRef.current.checked,
        priority: Number(priorityRef.current.value),
        password: passwordRef.current.value,
      };
      post("/api/project", project_params).then(() => navigate("/"));
    }
  };

  return (
    <div>
      <h1>New Project</h1>
      <label for="name">Name:</label>
      <input type="text" id="name" ref={nameRef} />

      <label for="description">Description:</label>
      <input type="text" id="description" ref={descriptionRef} />

      <label for="screenshot">Screenshot Link:</label>
      <input type="text" id="screenshot" ref={screenshotRef} />

      <label for="website">Website Link:</label>
      <input type="text" id="website" ref={websiteRef} />

      <label for="github">Github Link:</label>
      <input type="text" id="github" ref={githubRef} />

      <label for="starred">Starred:</label>
      <input type="checkbox" id="starred" ref={starredRef} />

      <label for="priority">Priority:</label>
      <input type="number" id="priority" ref={priorityRef} />

      <label for="proj_password">Password:</label>
      <input type="password" id="proj_password" ref={passwordRef} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

const DeleteBlogPost = () => {
  const titleRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const submit = () => {
    if (!(titleRef && passwordRef)) return;
    post("/api/delete_blog", {
      title: titleRef.current.value,
      password: passwordRef.current.value,
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <h1>Delete Blog Post</h1>
      <label for="delete_title">Title</label>
      <input type="text" id="delete_title" />
      <label for="del_blog_password">Password:</label>
      <input type="password" id="del_blog_password" ref={passwordRef} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

const DeleteProject = () => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const submit = () => {
    if (!(nameRef && passwordRef)) return;
    post("/api/delete_project", {
      name: nameRef.current.value,
      password: passwordRef.current.value,
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <h1>Delete Project</h1>
      <label for="delete_name">Title</label>
      <input type="text" id="delete_name" />
      <label for="del_proj_password">Password:</label>
      <input type="password" id="del_proj_password" ref={passwordRef} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};
