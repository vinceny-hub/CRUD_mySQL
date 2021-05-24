const db = require("../models/");
require('../middleware/auth')
const fs = require('fs')

const User = db.user;
// const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving posts."
        });
      });
  };



exports.delete = (req, res) => {
    // req.params.id = 4
    const id = req.params.id
    // comment.findOne({ where: { post_id : req.params.id } })
    console.log(id)
    User.destroy({
      where: { id : id}
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "USER was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete USER with post=${id}. Maybe USER was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete USER with id=" + id
        });
      });
  };

  exports.updateUser = (req, res) => {
    const id = req.query.id;
  
    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Post was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Comment with id=${id}. Maybe Comment was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Post with id=" + id
        });
      });
  };

    
//   exports.findOne = (req, res) => {
//     const user_Id = req.params.user_Id;
  
//     User.findByPk(user_Id)
//       .then(data => {
//         res.send(data);
//         console.log(data)
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error retrieving User with User_Id=" + user_Id
//         });
//       });
//   };

// exports.findAnUser = (req, res) => {
// const username = req.params.id;


// User.findOne({ where : { username : username, } })
// console.log(username)
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.status(500).send({
//       message:
//         err.message || "Some error occurred while retrieving posts."
//     });
//   })
 
 

//  }


exports.findAnUser = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { username : id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Comment with id=${id}. Maybe Comment was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Post with id=" + id
      });
    });
};


// exports.findAnUser = (req, res) => {
//   const username = req.params.id;

//   User.findByPk(username)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Post with id=" + id
//       });
//     });
// };