const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/config");
require("dotenv").config();

// Crear el servidor - aplicación express
const app = express();

// Base de datos

dbConnection();

// Directorio público
app.use(express.static("public"));

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

/**
 * DESDE AQUÍ ES LO DE MYSQL
 */

const router = express.Router();
const db = require("./db/mysql-db");

router.get("/data", (req, res) => {
  db.query("SELECT * FROM data", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.use(cors());

module.exports = router;
