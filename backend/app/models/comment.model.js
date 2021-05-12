module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
      user_Id:{
        type: Sequelize.STRING
      },
      username:{
        type: Sequelize.STRING
      },
      post_id:{
        type: Sequelize.STRING
      },
  
      // title: {
      //   type: Sequelize.STRING
      // },
      description: {
        type: Sequelize.STRING
      },

      content_Id: {
        type: Sequelize.STRING
      },
    //   published: {
    //     type: Sequelize.BOOLEAN
    //   }
    });

//    Comment.associate = function (models) {
//         //Associations can be define here//
//         Comment.belongsTo(models.user.model, {
//           foreignKey: 'user_Id',
         
//         });
//         Comment.belongsTo(models.post.model, {
//           foreignKey: 'post',
//           onDelete: 'CASCADE', // Si on supprime un message, on supprime ses réponses //
//         });
//       }
  
    return Comment;
  };