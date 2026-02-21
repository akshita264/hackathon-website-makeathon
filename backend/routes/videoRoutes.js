const express = require("express");
const { buildVideo } = require("../controllers/videoController");

const router = express.Router();

router.post("/build", buildVideo);

module.exports = router;