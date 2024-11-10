const express = require("express");
const pacController = require("../controllers/pacController");

const router = express.Router();

// POST /pac-create - Create a new PAC
router.post("/pac-create", pacController.createPac);

// GET /pac - Get all PAC data
router.get("/pac", pacController.getAllPac);

// GET /pac/:id - Get PAC data by ID
router.get("/pac/:id", pacController.getPacById);

// DELETE /pac/:id - Delete PAC by ID
router.delete("/pac/:id", pacController.deletePacById);

module.exports = router;
