const jwt = require('jsonwebtoken');   
const config = require("../config/auth.config.js");         // Importation du package jsonwebtoken (authentification par token)

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; 
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIwMTMxMTc3LCJleHAiOjE2MjAyMTc1Nzd9.gI4FPkbx5nwOiT_S-zpI2H-tHuHSfUPfb6mZECFEd88"
                  //  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIwMTMzOTg1LCJleHAiOjE2MjAyMjAzODV9._eig8cJ9Xhkt-61YLfKZz0Xh0I2-WdBrHoc4Ps30vb8"
    // token.split(' ')[1]; 
    console.log(token)                   // Extraction du token du header authorization
    const decodedToken = jwt.verify(token, config.secret);         // Décodage du token
    const userId = decodedToken.userId;
    console.log(decodedToken.userId)
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
      
    } else {
      next();
    }
  } catch {
    res.status(408).json({
      error: new Error('Erreur d\'authentification')
    });
  }
};