const { extractText } = require("../services/pdfService");

exports.uploadPDF = async (req, res) => {
  try {
    const text = await extractText(req.file.path);
    res.json({ text });
  } catch (err) {
    res.status(500).send("Upload failed");
  }
};