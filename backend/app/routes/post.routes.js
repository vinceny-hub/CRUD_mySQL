// const postsCtrl = require("../controllers/posts");
// const auth = require("../middleware/auth");
// const multer = require("../middleware/multer-config");
// const express = require('express');
const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const posts = require("../controllers/post.controller");
// const authRoutes = require("./auth.routes");
// const router = require("express").Router();

  // Create a new Post
  router.post("/", auth, posts.create);

  // Retrieve all Posts
  router.get("/", auth, posts.findAll);

  // Retrieve all published Posts
  router.get("/published", auth, posts.findAllPublished);

  // Retrieve a single Post with id
  router.get("/:id", auth, posts.findOne);

  // Update a Post with id
  router.put("/:id", auth, posts.update);

  // Delete a Post with id
  router.delete("/:id", auth, posts.delete);

  // Delete all Posts
  router.delete("/", auth, posts.deleteAll);

  // app.use('/api/posts', router);
// };

module.exports = router;