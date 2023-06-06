const mongoose = require("mongoose");

const JobPositionScheme = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("job-positions", JobPositionScheme);
