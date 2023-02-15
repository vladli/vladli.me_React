const express = require("express");
const mongoose = require("mongoose");
// Initialize Express
const app = express();

// Create GET request
app.use(express.static("front/build"));
app.get("*/", (req, res) => {
  res.sendFile("front/build", "index.html");
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

console.log(`🚀 Server ready at http://localhost:5000/graphql`);
