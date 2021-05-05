// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./app/models");
// db.sequelize.sync();

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

// require("./app/routes/post.routes")(app);
// module.exports = app
 
// **************************************************************************************************

// set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });




const express = require('express')// framework basé sur node.js
const bodyParser = require('body-parser')// extraction des objets JSON
// const mongoose = require('mongoose')// plugin mongoose
const path = require('path')// chemin de fichier
const dotenv = require('dotenv').config()// module servant à masquer les informations de connexion à la base de données
const helmet = require('helmet')
var session = require('express-session');
// var session = require('cookie-session')
// routes
// const commentRoutes = require('./routes/comment')
// const userRoutes = require('./routes/user')

// mongoose.set('useNewUrlParser', true)
// mongoose.set('useFindAndModify', false)
// mongoose.set('useCreateIndex', true)
// connection à MongoDB 
// mongoose.connect(process.env.MONGODB_URI,
//   { 
//     dbName: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     pass: process.env.DB_PASS,
//     useNewUrlParser: true,
//     useUnifiedTopology: true })
//   .then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée !'))

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
    })
// expiration des cookies
// var expiryDate = new Date( Date.now() + 60 * 60 * 1000 ) // 1 hour
// app.use(session({
//   name: 'session',
//   secret: process.env.DB_PASS,
//   // keys: ['key1', 'key2'],
//   cookie: { secure: true,
//             httpOnly: true,
//             domain: 'http://localhost:8081',
//             // path: 'foo/bar',
//             expires: expiryDate
//           }
//   })
// )
// les requêtes POST sont transformées en objet JSON
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// protection X-XSS -activate a script filter for (XSS) on websites-
app.use(helmet())
// charger les images depuis le dossier 'images'
app.use('/images', express.static(path.join(__dirname,'images')))
//routes Url
// app.use('/api/sauces', sauceRoutes)
// app.use('/api/comment', commentRoutes)

// app.use('/auth', userRoutes)
// app.use('/', userRoutes)
//export vers server.js

const db = require("./app/models/index");
db.sequelize.sync();

// const dblogin = require("./app/modelsUser/index");
const Role = db.role;

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });
initial();

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

// ****

const postRoutes = require("./app/routes/post.routes");

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// require("./app/routes/post.routes")(app);
app.use('/api/posts', postRoutes);
// require("./app/routes/post.users")(app);
module.exports = app

