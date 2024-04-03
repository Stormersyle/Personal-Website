import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { get } from "../utilities.js";

import Waiting from "./waiting.js";
import { formatDate } from "../utilities.js";
import { Display } from "./tiptap.js";

const display_link = ({ title, timestamp }) => {
  return (
    <li key={timestamp}>
      {formatDate(timestamp)}: <Link to={`/blog/post/${timestamp}`}>{title}</Link>
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
      <div className="page-container blogroll">
        <div>
          <p className="u-xl">Blog</p>
          <br />
          <ul>{postList.map(display_link)}</ul>
        </div>
      </div>
    );
  } else return <Waiting />;
};

//_____________________________________________________________________________________________________//
//next: each individual blog post

const display_post = (title, date, body) => {
  //note: body is a JSON string
  return (
    <div className="page-container">
      <div>
        <p className="u-xl">{title}</p>
        <p className="u-m">{date}</p>
      </div>
      <br />
      <Display content={body} />
      <br />

      <div className="u-flex-center-col">
        <hr className="end-blog" />

        <Link to="/blog" className="return">
          Return to blog
        </Link>
      </div>
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
