const { Sequelize } = require("sequelize");
const NODE_ENV = process.env.NODE_ENV;

const host = process.env.MYSQL_HOST;
const username = process.env.MYSQL_USERNAME;
const password = process.env.MYSQL_PASSWORD;
const database =
  NODE_ENV === "test" ? process.env.MYSQL_DB_TEST : process.env.MYSQL_DB;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});

const dbConnectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to MySQL");
  } catch (error) {
    console.log("MySQL DB Connection ERROR", error);
  }
};

module.exports = { sequelize, dbConnectMysql };
