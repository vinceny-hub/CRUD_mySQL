module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    user_Id:{
      type: Sequelize.STRING
    },
    // post_id:{
    //   type: Sequelize.STRING
    // },

    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Post;
};


// user_id: req.body.user_id,
// post_id: req.body.post_id,
// title: req.body.title,
// description: req.body.description,
// published: req.body.published ? req.body.published : false