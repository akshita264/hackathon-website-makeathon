const express = require("express");
const router = express.Router();
const { generateLesson } = require("../controllers/aiController");

router.post("/ai/process", generateLesson);

module.exports = router;