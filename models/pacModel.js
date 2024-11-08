const mongoose = require("mongoose");

const pacSchema = new mongoose.Schema(
  {
    dateOfBirth: {
      type: String,
      required: true,
    },
    timeOfBirth: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    heightInMeters: {
      type: String,
      required: true,
    },
    ethnicity: {
      type: String,
      required: true,
    },
    eyeColor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pac", pacSchema);
