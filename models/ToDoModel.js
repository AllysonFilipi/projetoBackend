// models/ToDoModel.js
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("ToDo", todoSchema);
