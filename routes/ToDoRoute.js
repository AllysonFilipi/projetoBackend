// routes/ToDoRoute.js
const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo, toggleCompleteToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);
router.post("/toggle-complete", toggleCompleteToDo);

module.exports = router;
