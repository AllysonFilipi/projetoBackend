//ToDoController.js
const moment = require('moment-timezone');
const ToDo = require("../models/ToDoModel");

const getToDo = async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveToDo = async (req, res) => {
  const { text, date } = req.body;
  try {
    const dateBrazil = moment.tz(date, "America/Sao_Paulo").startOf('day').toDate();
    // const currentDate = moment.tz(new Date(), "America/Sao_Paulo").startOf('day').toDate();

    // if (dateBrazil <= currentDate) {
    //   return res.status(400).json({ message: "A data deve ser igual ou maior que a data atual." });
    // }

    const newToDo = new ToDo({
      text,
      date: dateBrazil,
    });
    await newToDo.save();
    res.status(201).json(newToDo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateToDo = async (req, res) => {
  const { _id, text, date } = req.body;
  try {
    const dateBrazil = moment.tz(date, "America/Sao_Paulo").startOf('day').toDate();
    // const currentDate = moment.tz(new Date(), "America/Sao_Paulo").startOf('day').toDate();

    // if (dateBrazil < currentDate) {
    //   return res.status(400).json({ message: "A data deve ser igual ou maior que a data atual." });
    // }

    const updatedToDo = await ToDo.findByIdAndUpdate(_id, { text, date: dateBrazil }, { new: true });
    res.status(200).json(updatedToDo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteToDo = async (req, res) => {
  const { _id } = req.body;
  try {
    await ToDo.findByIdAndDelete(_id);
    res.status(200).json({ message: "ToDo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const toggleCompleteToDo = async (req, res) => {
  const { _id } = req.body;
  try {
    const todo = await ToDo.findById(_id);
    todo.completed = !todo.completed;
    await todo.save();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getToDo, saveToDo, updateToDo, deleteToDo, toggleCompleteToDo };
