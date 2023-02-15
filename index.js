const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// Initialize Express
const app = express();

// Create GET request
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
