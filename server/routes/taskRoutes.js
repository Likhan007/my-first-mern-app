import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const newTask = new Task({
    text: req.body.text,
  });

  const savedTask = await newTask.save();

  res.json(savedTask);
});

export default router;