const express = require("express");
const { generateScenes } = require("../controllers/aiController");

const router = express.Router();

router.post("/generate", generateScenes);

module.exports = router;