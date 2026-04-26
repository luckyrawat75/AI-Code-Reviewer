import axios from "axios";

//const API_URL = "http://localhost:3000/ai/get-review";
const API_URL = "https://ai-code-reviewer-2-xj9x.onrender.com/ai/get-review";

export const reviewCode = async (code) => {
  try {
    const res = await axios.post(API_URL, {
      code: code,
    });

    return res.data;
  } catch (error) {
    console.error(error);
    return "Error fetching response";
  }
};
