const express = require("express");
const BlogPost = require("./models/blogpost.js");
const Project = require("./models/project.js");
const BackupBlog = require("./models/blogpost_backup.js");
const BackupProject = require("./models/project_backup.js");

const router = express.Router(); //mounted on /api
const password = process.env.PASSWORD; //password used to post blog and projects

//when posting, ensure password is correct
router.post("*", (req, res, next) => {
  if (req.body.password === password) next();
  else {
    res.send({ error: "failed to post" });
    console.log("wrong password!");
  }
  return;
});

router.get("/blog", (req, res) => {
  const remove_body = (post) => {
    return { title: post.title, timestamp: post.timestamp };
  };
  BlogPost.find()
    .sort({ timestamp: -1 })
    .then((posts) => {
      res.send(posts.map(remove_body));
    });
});

router.get("/blogpost", (req, res) => {
  BlogPost.findOne({ timestamp: req.query.timestamp }).then((post) => res.send(post));
});

router.get("/projects", (req, res) => {
  Project.find()
    .sort({ starred: -1, priority: 1, timestamp: -1 })
    .then((projects) => {
      res.send(projects);
    });
});

router.post("/blog", (req, res) => {
  const newPost = new BlogPost({ title: req.body.title, body: req.body.body }); //blog post should be just a string; formatting should be done using symbols
  newPost.save().then(res.send({ title: req.body.title, body: req.body.body }));
  const newBackUp = new BackupBlog({ title: req.body.title, body: req.body.body });
  newBackUp.save();
});

router.post("/project", (req, res) => {
  let project_fields = {
    name: req.body.name,
    description: req.body.description,
    website_link: req.body.website_link,
    github_link: req.body.github_link,
    starred: req.body.starred,
    priority: req.body.priority,
  };
  const newProject = new Project(project_fields);
  newProject.save().then(res.send({ project_fields }));
  const newBackUp = new BackupProject(project_fields);
  newBackUp.save();
});

router.post("/delete_blog", (req, res) => {
  //deletes everything that matches title... really we should only have one post per title
  BlogPost.deleteMany({ title: req.body.title }).then(() => res.send({}));
});

router.post("/delete_project", (req, res) => {
  //deletes all projects that match name
  Project.deleteMany({ name: req.body.name }).then(() => res.send({}));
});

module.exports = router;
