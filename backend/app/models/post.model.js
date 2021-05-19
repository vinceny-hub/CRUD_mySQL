module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    user_Id:{
      type: Sequelize.STRING
    },
    username:{
      type: Sequelize.STRING
    },
    imageUrl: { type: Sequelize.STRING },
    // post_id:{
    //   type: Sequelize.STRING
    // },

    // title: {
    //   type: Sequelize.STRING
    // },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    },

    // createdAt: Sequelize.DATE,
    //   updatedAt: Sequelize.DATE,

    
  });

  // Post.associate = function (models) {
  //   //Associations can be define here//
  //   Post.belongsTo(models.User, {
  //     foreignKey: 'user_Id',
  //     as: 'user',
  //     onDelete: 'CASCADE', // Si on supprime un user, on supprime ses messages //
  //   });
  //   Post.hasMany(models.comment.model, {
  //     foreignKey: 'comment',
  //     as: 'answers', //Sequelize defaults to using the pluralized model name//
  //     //Un message peut avoir plusieurs réponses//
  //   }); 
  // }

  return Post;
};


// user_id: req.body.user_id,
// post_id: req.body.post_id,
// title: req.body.title,
// description: req.body.description,
// published: req.body.published ? req.body.published : false