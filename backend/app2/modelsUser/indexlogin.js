const config = require("../config/dblogin.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const dblogin = {};

dblogin.Sequelize = Sequelize;
dblogin.sequelize = sequelize;

dblogin.user = require("../modelsUser/user.model.js")(sequelize, Sequelize);
dblogin.role = require("../modelsUser/role.model.js")(sequelize, Sequelize);

dblogin.role.belongsToMany(dblogin.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
dblogin.user.belongsToMany(dblogin.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

dblogin.ROLES = ["user", "admin", "moderator"];

module.exports = dblogin;
