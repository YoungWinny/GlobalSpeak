import React, { useState, useEffect } from "react";
import search from "../../../assets/images/search-svgrepo-com.svg";
import location from "../../../assets/images/location-pin-svgrepo-com.svg";
import transcription from "../../../assets/images/transcription.svg";

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-8 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 border border-gray-300 rounded-md bg-white"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="self-center">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 border border-gray-300 rounded-md bg-white"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

const JobCard = ({ job }) => {
  return (
    <li className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src={transcription} alt="Company Logo" className="h-12 w-12" />
        <div>
          <h3 className="font-bold">{job.title}</h3>
          <p className="text-gray-600">{job.location}</p>
          <div className="flex space-x-2 mt-1">
            {job.categories.map((cat, index) => (
              <span
                key={index}
                className={`bg-${cat.color}-100 text-${cat.color}-500 px-2 py-1 rounded-full`}
              >
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button className="bg-[rgba(239,146,115,1)] text-white px-4 py-2 rounded-md">
        Apply
      </button>
    </li>
  );
};

export const Apply = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      const fetchedJobs = Array.from({ length: 20 }).map((_, index) => ({
        title: `Job Title ${index + 1}`,
        location: "Yaounde, Cameroon",
        categories: [
          { label: "Tech", color: "red" },
          { label: "Full-time", color: "purple" },
        ],
      }));
      setJobs(fetchedJobs);
    };

    fetchJobs();
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-gray-50 h-full overflow-auto">
      <main className="max-w-6xl mx-auto mt-8 p-4">
        <h1 className="text-4xl font-bold mb-4">
          Discover more than{" "}
          <span className="text-[rgba(239,146,115,1)] ">4000+ Translation and Transcription Jobs</span>
        </h1>
        <div className="mt-8 bg-white flex flex-row w-full max-w-4xl h-[72px] justify-evenly">
          <div className="flex mt-2 gap-4">
            <img style={{ width: "41px", height: "41px" }} src={search} alt="" />
            <input
              className="bg-white h-1/2 w-full mt-1 focus:outline-none border-b-2 border-[#BEBEBE]"
              type="text"
              placeholder="Job title or keyword"
            />
          </div>
          <div className="flex mt-2 gap-4">
            <img style={{ width: "41px", height: "41px" }} src={location} alt="" />
            <select
              className="bg-white h-1/2 w-full mt-1 focus:outline-none border-b-2 border-[#BEBEBE]"
              name=""
              id=""
            >
              <option value="yde">Yaounde, CMR</option>
              <option value="mar">Maroua, CMR</option>
            </select>
          </div>
          <button className="bg-[rgba(239,146,115,1)] text-white mt-3 px-4 py-2">
            Search my job
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <aside className="col-span-1 bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-bold mb-2">Type of Employment</h2>
            <ul className="space-y-2 mb-4">
              {["Full-time", "Part-time", "Remote", "Contract", "Internship"].map((type) => (
                <li key={type}>
                  <input type="checkbox" className="mr-2" />
                  {type} (5)
                </li>
              ))}
            </ul>

            <h2 className="font-bold mb-2">Categories</h2>
            <ul className="space-y-2 mb-4">
              {["Tech", "Design", "Marketing", "Business", "Real estate", "Industry", "Finance"].map((cat) => (
                <li key={cat}>
                  <input type="checkbox" className="mr-2" />
                  {cat} (5)
                </li>
              ))}
            </ul>

            <h2 className="font-bold mb-2">Experience</h2>
            <ul className="space-y-2 mb-4">
              {["Beginner", "Mid level", "Above average", "Senior level", "Expert"].map((exp) => (
                <li key={exp}>
                  <input type="checkbox" className="mr-2" />
                  {exp} (5)
                </li>
              ))}
            </ul>

            <h2 className="font-bold mb-2">Salary range</h2>
            <ul className="space-y-2">
              {["70,000 - 130,000", "130,000 - 250,000", "250,000 - 350,000", "350,000 - 400,000"].map((range) => (
                <li key={range}>
                  <input type="checkbox" className="mr-2" />
                  {range}
                </li>
              ))}
            </ul>
          </aside>

          <section className="col-span-3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">All Jobs</h2>
              <div className="flex items-center space-x-2">
                <span>Sort by:</span>
                <select className="border border-gray-300 rounded-md">
                  <option>Most relevant</option>
                </select>
              </div>
            </div>

            <ul className="space-y-4">
              {currentJobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </ul>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Apply;
