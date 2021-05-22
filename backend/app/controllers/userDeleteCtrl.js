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