const { Schema, model } = require("mongoose");

const JobPositionSchema = Schema({
  logoHref: {
    type: String,
    required: true,
  },
  logoSrc: {
    type: String,
    required: true,
    unique: true,
  },
  logoAltText: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  remote: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = model("JobPosition", JobPositionSchema);
