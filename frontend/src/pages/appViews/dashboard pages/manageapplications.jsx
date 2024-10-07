import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaCheck, FaEye, FaTimes } from "react-icons/fa";

// Simulated applications data
const applicationsData = [
  {
    id: 1,
    jobTitle: "Full Stack Developer",
    applicantName: "John Doe",
    experience: "5 years",
    status: "Pending",
  },
  {
    id: 2,
    jobTitle: "Transcriber",
    applicantName: "Jane Smith",
    experience: "2 years",
    status: "Pending",
  },
  {
    id: 3,
    jobTitle: "Translator",
    applicantName: "Samuel Wilson",
    experience: "3 years",
    status: "Pending",
  },
];

const ManageApplications = () => {
  const [applications, setApplications] = useState(applicationsData);

  // Function to handle acceptance or rejection
  const handleDecision = (id, decision) => {
    const updatedApplications = applications.map((application) => {
      if (application.id === id) {
        return { ...application, status: decision };
      }
      return application;
    });
    setApplications(updatedApplications);

    // Display SweetAlert notification
    Swal.fire({
      title: decision === "Accepted" ? "Application Accepted" : "Application Rejected",
      text: `You have ${decision.toLowerCase()} the application.`,
      icon: decision === "Accepted" ? "success" : "error",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Job Applications</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {applications.map((application) => (
          <div
            key={application.id}
            className="border border-gray-300 shadow-md rounded-lg p-4 bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{application.jobTitle}</h2>
            <p className="mb-1">Applicant: {application.applicantName}</p>
            <p className="mb-1">Experience: {application.experience}</p>
            <p className="mb-1">Score: {application.score}</p>
            <p
              className={`mb-3 font-bold ${
                application.status === "Accepted" ? "text-green-500" : 
                application.status === "Rejected" ? "text-red-500" : "text-gray-500"
              }`}
            >
              Status: {application.status}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => handleDecision(application.id, "Accepted")}
                className="bg-[#e8744d] text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <FaCheck /> Accept
              </button>&nbsp;&nbsp;
              <button className="bg-[#BEBEBE] text-white px-4 py-2 rounded-md flex items-center gap-2"> 
              <FaEye /> 
              </button>&nbsp;&nbsp;
              <button
                onClick={() => handleDecision(application.id, "Rejected")}
                className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <FaTimes /> 
                <span>Reject</span>
              </button>&nbsp;&nbsp;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageApplications;
