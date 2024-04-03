import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../utilities.js";
import { Editor } from "./tiptap.js";

const PostBlog = () => {
  const [content, setContent] = useState();
  const titleRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const submit = () => {
    if (!(titleRef && passwordRef)) return;
    post("/api/blog", {
      title: titleRef.current.value,
      body: JSON.stringify(content),
      password: passwordRef.current.value,
    }).then(() => navigate("/"));
  };

  return (
    <div className="page-container newblog">
      <p className="u-xl">New Blog Post</p>
      <br />
      <div>
        <label htmlFor="post_title">Title: </label>
        <input type="text" id="post_title" ref={titleRef} />
      </div>
      <br />
      <Editor setContent={setContent} />
      <br />
      <div className="proj-link-container">
        <label htmlFor="post_password">Password: </label>
        <input type="password" id="post_password" ref={passwordRef} />
      </div>
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
    <div className="page-container newproject">
      <p className="u-xl">New Project</p>
      <br />
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <br />
      <div className="u-flex u-align-center">
        <label htmlFor="description">Description:</label>
        <textarea id="description" ref={descriptionRef} />
      </div>
      <br />
      <div className="u-flex u-justify-start">
        <div>
          <label htmlFor="screenshot">Screenshot:</label>
          <input type="text" id="screenshot" ref={screenshotRef} />
        </div>
        <div>
          <label htmlFor="website">Website:</label>
          <input type="text" id="website" ref={websiteRef} />
        </div>
        <div>
          <label htmlFor="github">Github:</label>
          <input type="text" id="github" ref={githubRef} />
        </div>
      </div>
      <div className="u-flex u-justify-start">
        <div>
          <label htmlFor="starred">Starred:</label>
          <input type="checkbox" id="starred" ref={starredRef} />
        </div>
        <div>
          <label htmlFor="priority">Priority:</label>
          <input type="number" id="priority" ref={priorityRef} />
        </div>
        <div className="u-flex u-justify-start">
          <label htmlFor="proj_password">Password:</label>
          <input type="password" id="proj_password" ref={passwordRef} />
        </div>
      </div>
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
    <div className="page-container">
      <p className="u-xl">Delete Blog Post</p>
      <br />
      <label htmlFor="delete_title">Title:</label>
      <input type="text" id="delete_title" ref={titleRef} />
      <br />
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
    <div className="page-container">
      <p className="u-xl">Delete Project</p>
      <br />
      <label htmlFor="delete_name">Name</label>
      <input type="text" id="delete_name" ref={nameRef} />
      <br />
      <label htmlFor="del_proj_password">Password:</label>
      <input type="password" id="del_proj_password" ref={passwordRef} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <div>
        <p className="u-xl">Admin Dashboard</p>
        <br />
        <p>
          Welcome to the admin dashboard! Here you can post/delete blogs and projects. However, the
          post and deletion functions are locked behind a password (no, it's not in the GitHub
          repo), so if I didn't give you it then you can't do anything.
        </p>
      </div>
      <br />
      <div>
        <p className="u-l">New Blog/Project</p>
        <div className="button-container">
          <button onClick={() => navigate("/newblog")}>New Blog Post</button>
          <button onClick={() => navigate("/newproject")}>New Project</button>
        </div>
      </div>
      <br />
      <div>
        <p className="u-l">Delete Blog/Project</p>
        <div className="button-container">
          <button onClick={() => navigate("/deleteblog")}>Delete Blog Post</button>
          <button onClick={() => navigate("/deleteproject")}>Delete Project</button>
        </div>
      </div>
    </div>
  );
};

export { PostBlog, PostProject, DeleteBlog, DeleteProject, Admin };
