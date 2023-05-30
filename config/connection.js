/*
  This version of the connection file will work locally,
  as well as when you deploy a MySQL app to Heroku.

  JAWS_DB is an add-on offered by Heroku that provides 
  you with a hosted MySQL database.

*/

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(process.env.MYSQL_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "0.0.0.0",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
