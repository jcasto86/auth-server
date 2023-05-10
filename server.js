const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./db/mysql-db");

const app = express();

app.use(bodyParser.json());

app.get("/api/data", (req, res) => {
  mysqlConnection.query("SELECT * FROM users", (error, results, fields) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.json(results);
    }
  });
});

// app.get("/users", function (req, res) {
//   mysqlConnection.query("SELECT * FROM users", function (error, results) {
//     if (error) {
//       console.error("Error executing MySQL query: " + error.stack);
//       res.status(500).json({ error: "Error executing MySQL query" });
//       return;
//     }
//     res.json(results);
//   });
// });

app.listen(3000, function () {
  console.log("Node.js server started on port 3000");
});
