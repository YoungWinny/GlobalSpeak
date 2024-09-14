import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Swal from 'sweetalert2';

const CreateJob = () => {
  const [step, setStep] = useState(1);
  const [jobDetails, setJobDetails] = useState({
    title: '',
    category: '',
    jobType: '',
    experience: '',
    location: '',
    salary: '',
    files: [],
    translationText: '',
  });

  // Handle next and previous steps
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Handle change for inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  // Handle file drop for Transcriber job title
  const handleFileDrop = (acceptedFiles) => {
    setJobDetails({ ...jobDetails, files: acceptedFiles });
  };

  // Submit the form
  const handleSubmit = () => {
    // Backend logic goes here to create the job
    console.log('Form Data:', jobDetails);

    Swal.fire({
      title: 'Job created successfully!',
      text: 'Your job has been posted.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 1: Post Job Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Job Title</label>
            <input
              type="text"
              name="title"
              value={jobDetails.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Full stack developer"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={jobDetails.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Information Technology"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Job Type</label>
            <input
              type="text"
              name="jobType"
              value={jobDetails.jobType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Full-time"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Experience</label>
            <input
              type="text"
              name="experience"
              value={jobDetails.experience}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="5+ years"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={jobDetails.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Yaounde, Cameroon"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Salary</label>
            <input
              type="text"
              name="salary"
              value={jobDetails.salary}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="350,000"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={nextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && jobDetails.title.toLowerCase() === 'transcriber' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 2: Upload Files for Transcription</h2>
          <Dropzone onDrop={handleFileDrop}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-300 p-8 text-center cursor-pointer"
              >
                <input {...getInputProps()} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </div>
            )}
          </Dropzone>
          <div className="mt-4">
            <h4>Uploaded Files:</h4>
            <ul>
              {jobDetails.files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={prevStep}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 3: Translation</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Enter text to be translated here:</label>
            <textarea
              name="translationText"
              value={jobDetails.translationText}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter the text to be translated here..."
            ></textarea>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={prevStep}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Previous
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateJob;
