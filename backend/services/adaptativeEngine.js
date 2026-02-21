const { generateScript } = require("./aiService");

async function runAdaptiveEngine(text, level, impairment) {

  let adaptedText = text;

  if (level === "school") {
    adaptedText = "Simplified: " + text;
  }

  if (impairment === "blind") {
    adaptedText += " Add spatial audio description.";
  }

  if (impairment === "deaf") {
    adaptedText += " Use caption-focused structure.";
  }

  return generateScript(adaptedText);
}

module.exports = { runAdaptiveEngine };