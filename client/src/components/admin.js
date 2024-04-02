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
    post("/api/blog", {
      title: titleRef.current.value,
      body: Editor.getJSON(),
      password: passwordRef.current.value,
    }).then(() => navigate("/"));
  };

  return (
    <div>
      <h1>New Blog Post</h1>
      <label htmlFor="post_title">Title:</label>
      <input type="text" id="post_title" ref={titleRef} />
      <Editor />
      <label htmlFor="post_password">Password:</label>
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
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" ref={nameRef} />

      <label htmlFor="description">Description:</label>
      <input type="text" id="description" ref={descriptionRef} />

      <label htmlFor="screenshot">Screenshot Link:</label>
      <input type="text" id="screenshot" ref={screenshotRef} />

      <label htmlFor="website">Website Link:</label>
      <input type="text" id="website" ref={websiteRef} />

      <label htmlFor="github">Github Link:</label>
      <input type="text" id="github" ref={githubRef} />

      <label htmlFor="starred">Starred:</label>
      <input type="checkbox" id="starred" ref={starredRef} />

      <label htmlFor="priority">Priority:</label>
      <input type="number" id="priority" ref={priorityRef} />

      <label htmlFor="proj_password">Password:</label>
      <input type="password" id="proj_password" ref={passwordRef} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

const DeleteBlog = () => {
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
      <label htmlFor="delete_title">Title</label>
      <input type="text" id="delete_title" />
      <label htmlFor="del_blog_password">Password:</label>
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
      <label htmlFor="delete_name">Title</label>
      <input type="text" id="delete_name" />
      <label htmlFor="del_proj_password">Password:</label>
      <input type="password" id="del_proj_password" ref={passwordRef} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>New Blog/Project</h2>
        <button onClick={() => navigate("/newblog")}>New Blog Post</button>
        <button onClick={() => navigate("/newproject")}>New Project</button>
      </div>
      <div>
        <h2>Delete Blog/Project</h2>
        <button onClick={() => navigate("/deleteblog")}>Delete Blog Post</button>
        <button onClick={() => navigate("/deleteproject")}>Delete Project</button>
      </div>
    </div>
  );
};

export { PostBlog, PostProject, DeleteBlog, DeleteProject, Admin };
