import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./stylesheets/index.css";

import Home from "./components/home.js";
import Academics from "./components/academics.js";
import ProjectsPage from "./components/projects_page.js";
import { Blog, BlogPost } from "./components/blog.js";
import Contact from "./components/contact.js";
import { NewBlog, NewProject } from "./components/new_post.js";
import Delete from "./components/delete.js";
import NavBar from "./components/navbar.js";
import Footer from "./components/footer.js";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/academics", element: <Academics /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/post/:timestamp", element: <BlogPost /> },
  { path: "/contact", element: <Contact /> }, //next three are private pages
  { path: "/newblog", element: <NewBlog /> },
  { path: "/newproject", element: <NewProject /> },
  { path: "/delete", element: <Delete /> },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <NavBar />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
