// const postsCtrl = require("../controllers/posts");
// const auth = require("../middleware/auth");
// const multer = require("../middleware/multer-config");
// const express = require('express');
const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const  userDeleteCtrl= require("../controllers/userDeleteCtrl");
const multer = require('../middleware/multer-config')
// const authRoutes = require("./auth.routes");
// const router = require("express").Router();

  // Create a new Post
  router.delete("/:id", auth, userDeleteCtrl.delete);

  // Retrieve all Posts
  router.get("/", auth,  userDeleteCtrl.findAll);

//   // Retrieve all published Posts
//   router.get("/published", auth, posts.findAllPublished);

  // Retrieve a single Post with id
  router.get("/:id", auth, userDeleteCtrl.findAnUser);

  // Update a Post with id
  router.put("/:id", auth, multer,  userDeleteCtrl.updateUser);

//   // Delete a Post with id
//   router.delete("/:id", auth, posts.delete);

//   // Delete all Posts
//   router.delete("/", auth, posts.deleteAll);

  // app.use('/api/posts', router);
// };

module.exports = router;