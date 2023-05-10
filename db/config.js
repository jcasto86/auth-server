const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
    });

    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar la DB");
  }
};

module.exports = {
  dbConnection,
};

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "proyecto_daw_database",
// });

// connection.connect(function (error) {
//   if (error) {
//     console.error("Error connecting to MySQL: " + error.stack);
//     return;
//   }
//   console.log("Connected to MySQL as id " + connection.threadId);
// });

// module.exports = { connection };
