const fs = require("fs");

async function extractText(path) {
  // simple mock (replace with pdf-parse later)
  const data = fs.readFileSync(path);
  return data.toString();
}

module.exports = { extractText };