import { Job } from '../models/Job.js';

// Create a new job
export const createJob = async (req, res) => {
  const { title, description, status } = req.body;
  
  try {
    const newJob = new Job({ title, description, status });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a job
export const updateJob = async (req, res) => {
  const { jobId } = req.params;
  const { title, description, status } = req.body;
  
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      { title, description, status },
      { new: true }
    );
    res.status(200).json(updatedJob);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a job
export const deleteJob = async (req, res) => {
  const { jobId } = req.params;
  
  try {
    await Job.findByIdAndDelete(jobId);
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
