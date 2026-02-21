const { runAdaptiveEngine } = require("../services/adaptativeEngine");

exports.generateScenes = async (req, res) => {
  try {
    const { text, level, impairment } = req.body;

    const scenes = await runAdaptiveEngine(text, level, impairment);

    res.json({ scenes });
  } catch (err) {
    console.log(err);
    res.status(500).send("AI failed");
  }
};