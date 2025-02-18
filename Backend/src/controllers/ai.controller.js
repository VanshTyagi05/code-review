const aiService = require("../services/ai.service");

module.exports.getResponse = async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) {
      return res.status(400).send("code is required");
    }

    const response = await aiService.generateContent(code);
    res.status(200).send(response);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};
