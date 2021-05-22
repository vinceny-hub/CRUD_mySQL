
const db = require("../models/index");
const config = require("../config/auth.config");
// const token = require("../config/auth.config")
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;
// const token = req.headers.authorization.split(' ')[1]; 
// const decodedToken = jwt.verify(token, config.secret);         // Décodage du token
// user_Id = req.userId;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
            // Décodage du token
    user_Id: bcrypt.hashSync(req.body.username,1),
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          user_Id: user.user_Id,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// exports.delete = (req, res) => {
//   const id = req.body.id;
//   // comment.findOne({ where: { post_id : req.params.id } })
//   console.log(id)
//   User.destroy({
//     where: { id : id}
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Post was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Com with post=${user_Id}. Maybe Com was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Com with id=" + user_Id
//       });
//     });
// };