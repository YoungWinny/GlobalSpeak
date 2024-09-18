import { Task } from '../models/Task.js';

// Create a new task
export const createTask = async (req, res) => {
  const { job, assignedTo, status } = req.body;
  
  try {
    const newTask = new Task({ job, assignedTo, status });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update task status
export const updateTaskStatus = async (req, res) => {
  const { taskId } = req.params;
  const { status, rating } = req.body;
  
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { status, rating },
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all tasks for a job
export const getTasksForJob = async (req, res) => {
  const { jobId } = req.params;
  
  try {
    const tasks = await Task.find({ job: jobId });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
