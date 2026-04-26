import express from "express";
import cors from "cors";
import aiRoutes from "./src/routes/airoutes.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// 🔥 Fix for ESM (__dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load .env correctly
dotenv.config({
  path: path.join(__dirname, ".env"),
});

// 🔍 Debug (remove later)
console.log("API KEY:", process.env.GOOGLE_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gemini 3 Backend Running 🚀");
});

app.use("/ai", aiRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});