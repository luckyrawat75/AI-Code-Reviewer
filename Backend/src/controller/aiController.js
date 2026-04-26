import { generateContent } from "../services/aiservices.js";

export const getreview = async (req, res) => {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(400).send("code is required");
    }

    const response = await generateContent(code);

    res.send(response);

  } catch (error) {
    res.status(500).send("Server error");
  }
};