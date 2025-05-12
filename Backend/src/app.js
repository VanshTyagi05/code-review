const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://code-review-0m9o.onrender.com",
      "http://localhost:5173", // for local development
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use("/ai", aiRoutes);
app.get("/", function (req, res) {
  res.send("Hello World");
});

module.exports = app;
