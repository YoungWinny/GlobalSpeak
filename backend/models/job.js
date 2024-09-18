import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open',
  },
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
  },
  assignedTask: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  }]
}, {
  timestamps: true // Automatically creates `createdAt` and `updatedAt`
});

const JobModel = mongoose.model('Job', JobSchema);
export { JobModel as Job };
