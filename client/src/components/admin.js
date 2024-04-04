import React from "react";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { get, post } from "../utilities.js";
import { Editor } from "./tiptap.js";

// Post
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
      <Editor
        setContent={setContent}
        defaultContent={`{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Click here to write something!"}]}]}`}
      />
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
  const imageRef = useRef(null);
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
      imageRef &&
      starredRef &&
      priorityRef &&
      passwordRef
    ) {
      const project_params = {
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        website_link: websiteRef.current.value,
        github_link: githubRef.current.value,
        image_link: imageRef.current.value,
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
        <div className="u-width-fit">
          <label htmlFor="image">Image:</label>
          <input type="text" id="image" ref={imageRef} />
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

//Delete
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

//Edit
const EditBlog = () => {
  const [content, setContent] = useState();
  const [defaultContent, setDefaultContent] = useState(
    `{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Click here to write something!"}]}]}`
  );
  const [titleDisabled, setTitleDisabled] = useState(false);
  const titleRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const confirmTitle = () => {
    if (!titleRef) return;
    get("/api/blog_content", { title: titleRef.current.value })
      .then(({ body }) => {
        setDefaultContent(body);
        setTitleDisabled(true);
      })
      .catch(() => alert("bad title!"));
  };

  const submit = () => {
    if (!(titleRef && passwordRef)) return;
    console.log("content", JSON.stringify(content));
    post("/api/edit_blog", {
      title: titleRef.current.value,
      body: JSON.stringify(content),
      password: passwordRef.current.value,
    }).then(() => navigate("/admin"));
  };

  console.log(defaultContent);

  return (
    <div className="page-container newblog">
      <p className="u-xl">Edit Blog Post</p>
      <br />
      <div>
        <label htmlFor="post_title">Title: </label>
        <input type="text" id="post_title" ref={titleRef} disabled={titleDisabled} />
      </div>
      <br />
      <Editor setContent={setContent} defaultContent={defaultContent} />
      <br />
      <div className="proj-link-container">
        <label htmlFor="post_password">Password: </label>
        <input type="password" id="post_password" ref={passwordRef} />
      </div>
      <div className="u-flex u-justify-center">
        <button onClick={() => navigate("/admin")}>Back</button>
        <button onClick={confirmTitle}>Confirm Title</button>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

const EditProject = () => {
  const [defaults, setDefaults] = useState({
    description: "",
    website_link: "",
    github_link: "",
    image_link: "",
    starred: false,
    priority: 0,
  });
  const [nameDisabled, setNameDisabled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const websiteRef = useRef(null);
  const githubRef = useRef(null);
  const imageRef = useRef(null);
  const starredRef = useRef(null);
  const priorityRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const confirmName = () => {
    if (!nameRef) return;
    get("/api/proj_content", { name: nameRef.current.value })
      .then((info) => {
        setDefaults(info);
        setNameDisabled(true);
        setIsChecked(info.starred);
      })
      .catch(() => alert("bad name!"));
  };

  console.log("starred", defaults.starred);

  const submit = () => {
    if (
      nameRef &&
      descriptionRef &&
      websiteRef &&
      githubRef &&
      imageRef &&
      starredRef &&
      priorityRef &&
      passwordRef
    ) {
      const project_params = {
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        website_link: websiteRef.current.value,
        github_link: githubRef.current.value,
        image_link: imageRef.current.value,
        starred: starredRef.current.checked,
        priority: Number(priorityRef.current.value),
        password: passwordRef.current.value,
      };
      post("/api/edit_project", project_params).then(() => navigate("/admin"));
    }
  };

  return (
    <div className="page-container newproject">
      <p className="u-xl">Edit Project</p>
      <br />
      <p>Type in the name of the project, then click confirm.</p>
      <br />
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} disabled={nameDisabled} />
      </div>
      <br />
      <div className="u-flex u-align-center">
        <label htmlFor="description">Description:</label>
        <textarea id="description" ref={descriptionRef} defaultValue={defaults.description} />
      </div>
      <br />
      <div className="u-flex u-justify-start">
        <div className="u-width-fit">
          <label htmlFor="website">Website:</label>
          <input type="text" id="website" ref={websiteRef} defaultValue={defaults.website_link} />
        </div>
        <div className="u-width-fit">
          <label htmlFor="github">Github:</label>
          <input type="text" id="github" ref={githubRef} defaultValue={defaults.github_link} />
        </div>
        <div className="u-width-fit">
          <label htmlFor="image">Image:</label>
          <input type="text" id="image" ref={imageRef} defaultValue={defaults.image_link} />
        </div>
      </div>
      <div className="u-flex u-justify-start u-align-center">
        <div className="u-width-fit">
          <div className="u-flex u-justify-start u-align-center">
            <label htmlFor="starred">Starred:</label>
            <input
              type="checkbox"
              id="starred"
              ref={starredRef}
              className="u-block"
              checked={isChecked}
              onChange={(event) => setIsChecked(event.target.checked)}
            />
            {/* Note: you need to use checked+onChange to make the checkbox input's default value change upon re-render; can't use defaultChecked, bc it only applies to initial mount*/}
          </div>
        </div>
        <div className="u-width-fit">
          <div className="u-flex u-justify-start u-align-center">
            <label htmlFor="priority">Priority:</label>
            <input type="number" id="priority" ref={priorityRef} defaultValue={defaults.priority} />
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
        <button onClick={confirmName}>Confirm Name</button>
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
          Welcome to the admin dashboard! Here is where I post/edit/delete blogs and projects. Even
          though you can submit a post/edit/deletion, the server will reject it unless you enter the
          correct password, which is very long and only I have access to.
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
      <div>
        <p className="u-l">Edit Blog/Project</p>
        <div className="button-container">
          <button onClick={() => navigate("/editblog")}>Edit Blog Post</button>
          <button onClick={() => navigate("/editproject")}>Edit Project</button>
        </div>
      </div>
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

export { PostBlog, PostProject, DeleteBlog, DeleteProject, EditBlog, EditProject, Admin };
