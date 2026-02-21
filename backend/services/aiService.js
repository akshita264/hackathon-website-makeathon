const axios = require("axios");

const FASTAPI_URL = "http://127.0.0.1:8000/process-content";

async function processAIContent(text, level = "beginner") {
  try {
    const response = await axios.post(FASTAPI_URL, {
      text: text,
      level: level
    });

    return response.data;
  } catch (error) {
    console.error("FastAPI Error:", error.response?.data || error.message);
    throw error;
  }
}

module.exports = { processAIContent };