import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./components/home.js";
import Academics from "./components/academics.js";
import ProjectsPage from "./components/projects.js";
import { Blog, BlogPost } from "./components/blog.js";
import Contact from "./components/contact.js";
import NavBar from "./components/navbar.js";
import Footer from "./components/footer.js";
import { PostBlog, PostProject, DeleteBlog, DeleteProject, Admin } from "./components/admin.js";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post/:timestamp" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/newblog" element={<PostBlog />} />
        <Route path="/newproject" element={<PostProject />} />
        <Route path="/deleteblog" element={<DeleteBlog />} />
        <Route path="/deleteproject" element={<DeleteProject />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
