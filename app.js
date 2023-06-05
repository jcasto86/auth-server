require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

// Aquí invocamos las rutas
//TODO localhost/api/____________
app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log("App running on port:" + port);
});

dbConnect();
