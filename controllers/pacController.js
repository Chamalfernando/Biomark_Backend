// const logger = require("../middleware/logger");
const Pac = require("./models/PacModel");
const { v4: uuidv4 } = require("uuid");

// PAC creation endpoint
exports.createPac = async (req, res) => {
  const {
    dateOfBirth,
    timeOfBirth,
    location,
    bloodGroup,
    sex,
    heightInMeters,
    ethnicity,
    eyeColor,
  } = req.body;

  try {
    const uniqueId = uuidv4(18); // Generate a new unique identifier
    const newPac = new Pac({
      uniqueId,
      dateOfBirth,
      timeOfBirth,
      location,
      bloodGroup,
      sex,
      heightInMeters,
      ethnicity,
      eyeColor,
    });

    // Save the PAC record to MongoDB
    await newPac.save();
    req.session.userId = uniqueId; // Store uniqueId in session for user identification
    res.status(201).json({
      message: "PAC created successfully",
      //   message: logger(req, res),
      uniqueId,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating PAC",
      error,
    });
  }
};

// Get all PAC records
exports.getAllPac = async (req, res) => {
  try {
    const allPac = await Pac.find();
    res.status(200).json(allPac);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving PAC data",
      error,
    });
  }
};

// Get PAC data by unique ID
exports.getPacById = async (req, res) => {
  const { id } = req.params;

  try {
    const pac = await Pac.findById(id);
    if (!pac) {
      return res.status(404).json({
        message: "PAC not found",
      });
    }
    res.status(200).json(pac);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving PAC data",
      error,
    });
  }
};