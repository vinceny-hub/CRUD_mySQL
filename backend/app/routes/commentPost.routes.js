const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const comments = require("../controllers/commentPost.controller");
// const authRoutes = require("./auth.routes");
// const router = require("express").Router();

  // Create a new Post
//   router.post("/", auth, comments.create);

//   // Retrieve all Posts
//   router.get("/", auth, comments.findAll);

//   // Retrieve all published Posts
//   router.get("/published", auth, comments.findAllPublished);

//   // Retrieve a single Post with id
//   router.get("/:id", auth, comments.findOne);

//   // Update a Post with id
//   router.put("/:id", auth, comments.update);

//   // Delete a Post with id
//   router.delete("/:id", auth, comments.delete);

//   // Delete all Posts
//   router.delete("/", auth, comments.deleteAll);

  // Delete all Posts
  router.delete("/:id", auth, comments.deletePostComment);

  // app.use('/api/posts', router);
// };

module.exports = router;