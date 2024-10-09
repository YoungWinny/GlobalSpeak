import express from 'express';
import { createTask, updateTask, getTasksForJob, getTasksForUser, saveTaskDocument } from '../controllers/taskController.js';

const router = express.Router();

router.post('/task', createTask);
router.patch("/task/:taskId", updateTask)
router.get("/task/job/:jobId", getTasksForJob)
router.get("/task/user/:userId", getTasksForUser)
router.patch("/task/upload/:taskId", saveTaskDocument)


export default router;