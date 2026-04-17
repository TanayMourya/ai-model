const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/ai", (req, res) => {
  const { question } = req.body;

  res.json({
    answer: "AI says: " + question
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});