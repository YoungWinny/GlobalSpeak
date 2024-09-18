import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  jobSeeker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // References the Job Seeker applying
    required: true,
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job', // References the Job being applied for
    required: true,
  },
  status: {
    type: String,
    enum: ['accepted', 'rejected'],
    default: 'pending',
  }
}, {
  timestamps: true
});

const ApplicationModel = mongoose.model('Application', ApplicationSchema);
export { ApplicationModel as Application };
