require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnectNoSql = require("./config/mongo");
const app = express();
const ENGINE_DB = process.env.ENGINE_DB;
const { dbConnectMysql } = require("./config/mysql");
app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

const port = process.env.PORT || 3000;

// Aquí invocamos las rutas
//TODO localhost/api/____________
app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log("App running on port:" + port);
});

ENGINE_DB === "nosql" ? dbConnectNoSql() : dbConnectMysql();
