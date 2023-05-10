const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "proyecto_daw_database",
});

connection.connect(function (error) {
  if (error) {
    console.error("Error connecting to MySQL: " + error.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});

module.exports = connection;
