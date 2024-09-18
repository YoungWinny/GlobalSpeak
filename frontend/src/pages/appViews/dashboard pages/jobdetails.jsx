import { useParams, Link } from "react-router-dom";

// Simulated job details for different job IDs
const jobDetailsData = [
  {
    id: 1,
    title: "Full Stack Developer",
    location: "Cameroon",
    type: "Full-time",
    summary: "Develop and maintain full-stack applications...",
    qualifications: [
      "5+ years of experience",
      "Experience with MERN stack",
      "Good communication skills",
    ],
    responsibilities: [
      "Develop full-stack applications",
      "Collaborate with the team",
      "Optimize code for performance",
    ],
    salary: "350,000",
    category: "Information Technology",
    postedDate: "July 20, 2023",
  },
  {
    id: 2,
    title: "Transcription Specialist",
    location: "Remote",
    type: "Part-time",
    summary: "Transcribe audio files into text with high accuracy...",
    qualifications: [
      "2+ years of transcription experience",
      "Familiar with transcription tools",
      "Strong attention to detail",
    ],
    responsibilities: [
      "Transcribe audio and video files",
      "Ensure accurate and timely delivery",
      "Collaborate with the editing team",
    ],
    salary: "150,000",
    category: "Media and Communications",
    postedDate: "August 15, 2023",
  },
  // Add more jobs as needed
];

const JobDetails = () => {
  const { id } = useParams(); // Get job ID from URL params
  const jobId = parseInt(id); // Ensure ID is parsed as a number
  const job = jobDetailsData.find((job) => job.id === jobId); // Find the job by ID

  if (!job) {
    return (
      <div className="max-w-6xl mx-auto mt-8 p-4">
        <Link to="/dashboard/apply" className="text-blue-500 mb-4 inline-block">
          &lt; Back to all jobs
        </Link>
        <div className="bg-red-100 p-4 rounded-lg text-red-500">
          <h2 className="text-xl font-bold">Job not found</h2>
          <p>Sorry, the job you are looking for does not exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-8 p-4">
      <Link to="/dashboard/apply" className="text-blue-500 mb-4 inline-block">
        &lt; Back to all jobs
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Job Summary */}
        <div className="col-span-2 bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
          <p className="text-gray-600 text-lg mb-4">
            {job.location} • {job.type}
          </p>
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p className="mb-4">{job.summary}</p>

          <h2 className="text-xl font-semibold mb-2">Key Qualifications</h2>
          <ul className="list-disc list-inside mb-4">
            {job.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
          <ul className="list-disc list-inside mb-4">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        {/* Job Details Sidebar */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Job Details</h2>
          <p className="mb-2">
            <strong>ID:</strong> J-2023-{job.id}
          </p>
          <p className="mb-2">
            <strong>Posted Date:</strong> {job.postedDate}
          </p>
          <p className="mb-2">
            <strong>Category:</strong> {job.category}
          </p>
          <p className="mb-2">
            <strong>Job Type:</strong> {job.type}
          </p>
          <p className="mb-2">
            <strong>Experience:</strong> {job.qualifications[0]}
          </p>
          <p className="mb-2">
            <strong>Location:</strong> {job.location}
          </p>
          <p className="mb-2">
            <strong>Salary:</strong> {job.salary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
