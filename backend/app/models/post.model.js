module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    user_Id:{
      type: Sequelize.STRING
    },
    username:{
      type: Sequelize.STRING
    },
    imageUrl: { type: Sequelize.STRING },
  
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

    
  });

 

  return Post;
};

