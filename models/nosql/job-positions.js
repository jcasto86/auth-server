const mongoose = require("mongoose");

const JobPositionScheme = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    description: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("job-positions", JobPositionScheme);
