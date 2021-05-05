const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models/user.model");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIwMTMxMTc3LCJleHAiOjE2MjAyMTc1Nzd9.gI4FPkbx5nwOiT_S-zpI2H-tHuHSfUPfb6mZECFEd88"

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

isModerator = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Moderator Role!"
      });
    });
  });
};

isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }

        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Moderator or Admin Role!"
      });
    });
  });
};


// isLoggedIn = (req, res, next) => {
//   try {

//     const USERID = req.userId
//     if (USERID = USERID ){ 
//     // const token = req.headers.authorization.split(' ')[1];
//     // const decoded = jwt.verify(
//     //   token,
//     //   'SECRET_KEY'
//     // );
//     // req.userData = decoded;
    
//     next();
//     }
//   } catch (err) {
//     return res.status(401).send({
//       msg: 'Your session is not valid!'
//     });
//   }
// }
// }

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin,
  // isLoggedIn: isLoggedIn
};
module.exports = authJwt;
