const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// POST request to create a new user
router.post("/", userController.createUser);

// GET request to retrieve a user by ID
router.get("/:userId", userController.getUserById);

module.exports = router;
