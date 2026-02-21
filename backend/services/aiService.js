async function generateScript(text) {

  // Later connect LangChain microservice here
  return [
    {
      scene_title: "Intro",
      script: text
    }
  ];
}

module.exports = { generateScript };