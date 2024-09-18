import { Exam } from '../models/Exam.js';

// Create a new exam
export const createExam = async (req, res) => {
  const { examContent, job } = req.body;
  
  try {
    const newExam = new Exam({ examContent, job });
    await newExam.save();
    res.status(201).json(newExam);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Assign exam to a job
export const assignExamToJob = async (req, res) => {
  const { examId } = req.params;
  const { jobId } = req.body;
  
  try {
    const exam = await Exam.findByIdAndUpdate(examId, { job: jobId }, { new: true });
    res.status(200).json(exam);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
