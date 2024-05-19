// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const routes = require("./routes/ToDoRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
