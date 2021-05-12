module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      user_Id: {
        type:  Sequelize.STRING
      }
    });


    // User.associate = function (models) {
    //   //Associations can be define here//
    //   User.hasMany(models.Message,{
    //     foreignKey: 'user_Id',
    //     as: 'messages', //Sequelize defaults to using the pluralized model name//
    //     //Un utilisateur peut envoyer plusieurs messages//
    //   }); 
    // };
  
    return User;
  };