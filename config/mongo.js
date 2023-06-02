const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.BD_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
    });

    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error DB");
  }
};

module.exports = dbConnect;
