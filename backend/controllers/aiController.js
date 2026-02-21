const { generateAdaptiveContent } = require("../services/aiService");

exports.generateScenes = async (req, res) => {
  try {
    const { text, level, impairment } = req.body;

    const result = await generateAdaptiveContent(
      text,
      level,
      { impairment }
    );

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Python pipeline failed");
  }
};