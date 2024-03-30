import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { post } from "../utilities.js";
import "../stylesheets/admin.css";
import { Editor } from "./tiptap.js";

const PostBlog = () => {
  const titleRef = useRef(null);

  const makePost = () => {
    if (!titleRef) return;
    if (!titleRef.current.value) {
      alert("There needs to be a title!");
      return;
    }
    const text = Editor.getJSON();
    post("/api/blog", { title: titleRef.current.value, body: text });
  };

  return (
    <div>
      <label for="post_title">Title:</label>
      <input type="text" id="post_title" />
      <Editor />
      <label for="post_password">Password:</label>
      <input type="password" id="post_password" />
      <button onClick={() => makePost()}>Submit</button>
    </div>
  );
};
