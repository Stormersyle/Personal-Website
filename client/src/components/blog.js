import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get } from "../utilities.js";
import "../stylesheets/blog.css";

import Waiting from "./waiting.js";
import { Display } from "./tiptap.js";
import { formatDate } from "./utilities.js";

const display_link = (title, timestamp) => {
  return (
    <li key={timestamp}>
      {formatDate(timestamp)}: <Link to={`/blog/post/${timestamp}`}>{title}</Link>;
    </li>
  );
  //note: we link to blog posts using the timestamp! because no two posts have the same timestamp, and this is easier than id.
};

//blog: list of posts
const Blog = () => {
  const [postList, setPostList] = useState();
  useEffect(() => {
    get("/api/blog").then(setPostList);
  }, []);
  if (postList) {
    return (
      <div>
        <h1>Blog</h1>
        <ul>{postList.map(display_link)}</ul>
      </div>
    );
  } else return <Waiting />;
};

//_____________________________________________________________________________________________________//
//next: each individual blog post

const display_post = (title, date, body) => {
  //note: body is in JSON
  return (
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
      <br />
      <Display content={body} />
      <Link to="/blog">Return to blog</Link>
    </div>
  );
};

//BlogPost: each individual blog post
//props: timestamp
const BlogPost = () => {
  const { timestamp } = useParams();
  const [post, setPost] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    get("/api/blogpost", { timestamp: Number(timestamp) })
      .then(setPost)
      .catch(() => {
        navigate("/blog");
      });
  }, []);
  if (post) {
    return display_post(post.title, formatDate(timestamp), post.body);
  } else return <Waiting />;
};

export { Blog, BlogPost };
