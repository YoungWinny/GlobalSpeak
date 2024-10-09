import { TaskModel } from "../models/task.js";
import multer from 'multer';
import fs from 'fs';
import path from 'path'
const __dirname = path.dirname(import.meta.url);


// Ensure the 'uploads/' directory exists before storing files
const uploadDir = path.join(process.cwd(), 'uploads'); // __dirname might not work, use process.cwd()
if (!fs.existsSync(uploadDir)) {
  console.log("Creating 'uploads/' directory");
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Now continue with the multer storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("Storing file in 'uploads/'");
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    console.log("Generating unique filename for:", file.originalname);
    cb(null, Date.now() + '-' + file.originalname);
  },
});

export const upload = multer({ storage });

// Create a new task
export const createTask = async (req, res) => {
  const { job, assignedTo } = req.body;
  
  try {
    const newTask = new TaskModel({ job, assignedTo });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update task status
export const updateTask = async (req, res) => {
  const { taskId } = req.params;
  
  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      taskId,
      { ...req.body}
    );
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update task status
export const saveTaskDocument = async (req, res) => {
  const { taskId } = req.params;
  const files = req.files;

  if (!files || files.length === 0) {
    console.error("No files uploaded");
    return res.status(400).json({ error: "No files uploaded" });
  }
  
  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      taskId,
      {
        files: files.map(file => file.path)
      }
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
    const tasks = await TaskModel.find({ job: jobId });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getTasksForUser = async (req, res) => {
  const { userId } = req.params;
  
  try {
    const tasks = await TaskModel.find({ assignedTo: userId });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
