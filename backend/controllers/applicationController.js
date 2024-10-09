import { ApplicationModel } from "../models/application.js";
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

// Create a new application
export const createApplication = async (req, res) => {
  const files = req.files;

  if (!files || files.length === 0) {
    console.error("No files uploaded");
    return res.status(400).json({ error: "No files uploaded" });
  }

  const { job, user, score, motivation } = req.body

  try {
    const newApplication = new ApplicationModel({ 
      job, user, score, motivation, presentation: files.map(file => file.path)
    });
    await newApplication.save();
    res.status(201).json(newApplication);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Accept or reject an application
export const updateApplication = async (req, res) => {
  const { applicationId } = req.params;
  
  try {
    const updatedApplication = await ApplicationModel.findByIdAndUpdate(
      applicationId,
      { ...req.body }
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
    const applications = await ApplicationModel.find({ job: jobId }).populate('user').populate('job');
    res.status(200).json(applications);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getApplicationsForUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const applications = await ApplicationModel.find({ user: userId }).populate('user').populate('job');
    res.status(200).json(applications);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const applications = await ApplicationModel.find().populate('user').populate('job');
    res.status(200).json(applications);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteApplications = async (req, res) => {
  const { id } = req.params;
  
  try {
    const applications = await ApplicationModel.findByIdAndDelete(id);
    res.status(200).json(applications);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
