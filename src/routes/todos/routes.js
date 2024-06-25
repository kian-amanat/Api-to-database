import express from "express";
import { getTodos, getTodoById, createTodo } from "../../model/todos/index.js";
const router = express.Router();

router.get("/api/todos", async (req, res) => {
  try {
    const todoList = await getTodos();
    res.json(todoList);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "this is error",
      error: error,
    });
  }
});

router.get("/api/todo/:id", async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await getTodoById(todoId);
    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "this is error",
      error: error,
    });
  }
});

router.post("/api/todo", async (req, res) => {
  try {
    const { title, description, isCompleted } = req.body;
    const createRes = await createTodo(title, description, isCompleted);
    res.status(201).json({
      message: `you todo is add`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "this is error",
      error: error,
    });
  }
});

export { router };
