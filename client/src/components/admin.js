import React from "react";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
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
    }).then(() => navigate("/admin"));
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
      <div className="u-flex u-justify-center">
        <button onClick={() => navigate("/admin")}>Back</button>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

//  name: String,
// description: String,
// website_link: String,
// github_link: String,
// starred: Boolean, //true>false
// priority: Number, //higher priority comes first
// timestamp: { type: Date, default: Date.now },

const PostProject = () => {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
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
      websiteRef &&
      githubRef &&
      starredRef &&
      priorityRef &&
      passwordRef
    ) {
      const project_params = {
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        website_link: websiteRef.current.value,
        github_link: githubRef.current.value,
        starred: starredRef.current.checked,
        priority: Number(priorityRef.current.value),
        password: passwordRef.current.value,
      };
      post("/api/project", project_params).then(() => navigate("/admin"));
    }
  };

  return (
    <div className="page-container newproject">
      <p className="u-xl">New Project</p>
      <br />
      <p>
        Type in the info to post a new project here. If there's no website link or no github link,
        leave the corresponding link empty. Remember to include the HTTPS in your links! (If you
        have them.)
      </p>
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
        <div className="u-width-fit">
          <label htmlFor="website">Website:</label>
          <input type="text" id="website" ref={websiteRef} />
        </div>
        <div className="u-width-fit">
          <label htmlFor="github">Github:</label>
          <input type="text" id="github" ref={githubRef} />
        </div>
      </div>
      <div className="u-flex u-justify-start u-align-center">
        <div className="u-width-fit">
          <div className="u-flex u-justify-start u-align-center">
            <label htmlFor="starred">Starred:</label>
            <input type="checkbox" id="starred" ref={starredRef} className="u-block" />
          </div>
        </div>
        <div className="u-width-fit">
          <div className="u-flex u-justify-start u-align-center">
            <label htmlFor="priority">Priority:</label>
            <input type="number" id="priority" ref={priorityRef} />
          </div>
        </div>
        <div className="u-width-fit">
          <div>
            <label htmlFor="proj_password">Password:</label>
            <input type="password" id="proj_password" ref={passwordRef} />
          </div>
        </div>
      </div>
      <div className="u-flex u-justify-center">
        <button onClick={() => navigate("/admin")}>Back</button>
        <button onClick={submit}>Submit</button>
      </div>
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
      navigate("/admin");
    });
  };

  return (
    <div className="page-container delete-container">
      <p className="u-xl">Delete Blog Post</p>
      <br />
      <div className="u-flex u-justify-start">
        <label htmlFor="delete_title">Title:&nbsp;</label>
        <input type="text" id="delete_title" ref={titleRef} />
      </div>
      <br />
      <div className="u-flex u-justify-start">
        <label htmlFor="del_blog_password">Password:&nbsp;</label>
        <input type="password" id="del_blog_password" ref={passwordRef} />
      </div>
      <div className="u-flex u-justify-center">
        <button onClick={() => navigate("/admin")}>Back</button>
        <button onClick={submit}>Submit</button>
      </div>
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
      navigate("/admin");
    });
  };

  return (
    <div className="page-container delete-container">
      <p className="u-xl">Delete Project</p>
      <br />
      <div className="u-flex u-justify-start">
        <label htmlFor="delete_name">Name:&nbsp;</label>
        <input type="text" id="delete_name" ref={nameRef} />
      </div>
      <br />
      <div className="u-flex u-justify-start">
        <label htmlFor="del_proj_password">Password:&nbsp;</label>
        <input type="password" id="del_proj_password" ref={passwordRef} />
      </div>
      <div className="u-flex u-justify-center">
        <button onClick={() => navigate("/admin")}>Back</button>
        <button onClick={submit}>Submit</button>
      </div>
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
          Welcome to the admin dashboard! Here is where I post/delete blogs and projects. Even
          though you can submit a post/deletion, the server will reject it unless you enter the
          correct password, which only I have access to.
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
