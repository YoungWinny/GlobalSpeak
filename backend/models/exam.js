import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema({
  examContent: {
    type: String, // You could store text or even a file path here
    required: true,
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  }
}, {
  timestamps: true
});

const ExamModel = mongoose.model('Exam', ExamSchema);
export { ExamModel as Exam };
