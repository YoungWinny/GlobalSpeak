import { Application } from '../models/Application.js';

// Create a new application
export const createApplication = async (req, res) => {
  const { jobSeeker, job } = req.body;
  
  try {
    const newApplication = new Application({ jobSeeker, job });
    await newApplication.save();
    res.status(201).json(newApplication);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Accept or reject an application
export const updateApplicationStatus = async (req, res) => {
  const { applicationId } = req.params;
  const { status } = req.body;
  
  try {
    const updatedApplication = await Application.findByIdAndUpdate(
      applicationId,
      { status },
      { new: true }
    );
    res.status(200).json(updatedApplication);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all applications for a job
export const getApplicationsForJob = async (req, res) => {
  const { jobId } = req.params;
  
  try {
    const applications = await Application.find({ job: jobId });
    res.status(200).json(applications);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
