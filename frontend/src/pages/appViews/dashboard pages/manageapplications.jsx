import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaCheck, FaTimes } from "react-icons/fa";
import useUser from "../../../hooks/useUser";
import { axiosInstance } from "../../../utils/axiosInstance";

const ManageApplications = () => {
  const [applications, setApplications] = useState([]);
  const [applicationData, setApplicationData] = useState([]);
  const user = useUser();
  const [job, setJob] = useState([])
  const [jobList, setJobList] = useState([]);
  const [searchId, setSearchId] = useState(null)

  // Function to handle acceptance or rejection
  const handleDecision = (id, status) => {
    // Display SweetAlert notification
    const application = applicationData.find((item,index) => index === id-1);
    Swal.fire({
      title: status === "accepted" ? "Application Accepted" : "Application Rejected",
      text: `Are you sure you want to ${status.toUpperCase()} this applicant ?`,
      icon: status === "accepted" ? "success" : "error",
      confirmButtonText: "Yes",
    }).then(() => {
      updateApplication(application, status)
      fetchUserApplications();
    });
  };

  const updateApplication = async (application, status)=>{
    console.log('status: ', status)
    console.log('id: ', application)
    try{
      const response = axiosInstance.patch(`/api/application/${application?._id}`,{
        status
      });
      if(response.data){
        Swal.fire({
          title: 'Application Status',
          text: `Application status ${status.toUpperCase()} successfully !!!`,
          icon: "success" ,
          confirmButtonText: "OK",
        }).then(() => {
          return;
        });
      }
    }catch(err){
      Swal.fire({
        title: 'Application Status',
        text: `Application status update failed please try again`,
        icon: "error" ,
        confirmButtonText: "OK",
      }).then(() => {
        return;
      });
    }finally{
      fetchUserApplications();
    }
  }

  const fetchJobs = async () => {
    let storedUser = sessionStorage.getItem("user");
    if (storedUser){
      storedUser = JSON.parse(storedUser)
    }

    if(storedUser?.role === 'jobseeker') return;
    
    try {
      const data = JSON.parse(sessionStorage.getItem('jobList'));
      
      const filteredJobs = data?.filter((job) => job?.userId === storedUser?._id);
      setJobList(storedUser?.role === 'recruiter' ? [...filteredJobs] : [...data]); // Set jobs from backend response
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };


  const fetchUserApplications=async()=>{
    let storedUser = sessionStorage.getItem("user");
    if (storedUser){
      storedUser = JSON.parse(storedUser)
    }

    if(storedUser?.role === 'recruiter' && !searchId) return;
    const endpoint = storedUser?.role === 'recruiter' ? `/api/application/job/${searchId}` : `/api/application/user/${storedUser?._id}`
    try{
      const response = await axiosInstance.get(endpoint);
      if(response?.data){
        const temp = response.data?.map((item, index)=> {
          const recruiterObj = {
            id: index+1,
            jobTitle: item?.job?.title,
            applicantName: item?.user?.fullName,
            experience: item?.score,
            status: item?.status
          }
          const jobSeekerObj = {
            id: index+1,
            jobTitle: item?.job?.title,
            applicantName: item?.job?.location + " - "+ item?.job?.salary+" XAF",
            experience: item?.score,
            status: item?.status
          }
          const obj = user?.role === 'recruiter' ? {...recruiterObj} : {...jobSeekerObj}
          return {...obj}
        })

        setApplications([...temp]);
        setApplicationData(response.data)
      }
    }catch(err){

    }
  }

  useEffect(()=>{
    fetchJobs();
  },[]);

  useEffect(()=>{
    console.log('changed')
    fetchUserApplications();
  }, [searchId])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Job Applications</h1>

       {
        user?.role === 'recruiter' &&
        <div className="w-full h-20 bg-white shadow-md rounded-md flex justify-around items-center">
            <select value={searchId} onChange={(e)=> setSearchId(e.target.value)} className="w-9/12 h-2/4 ml-4 px-2 border border-gray-200 rounded mt-2">
              {
                jobList?.map((job,index)=>(
                  <option key={index} value={job?._id}>{job?.title}</option>
                ))
              }
            </select>

            <button
            onClick={()=> fetchUserApplications()}
                className="ml-8 bg-[rgba(239.146,115,1)] hover:bg-[rgba(239.146,115,1)] text-white px-6 py-2 rounded-md transition"
              >
                Search 
              </button>
        </div>}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {applications.map((application) => (
          <div
            key={application.id}
            className="border border-gray-300 shadow-md rounded-lg p-4 bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{application.jobTitle}</h2>
            <p className="mb-1">{user?.role == 'recruiter' ? 'Applicant' : 'Job Details'}: {application.applicantName}</p>
            <p className="mb-1 ">Test Score: <b className="font-bold text-primary text-lg">{application.experience}</b></p>
            <p
              className={`mb-3 font-bold ${
                application.status === "accepted" ? "text-green-500" : 
                application.status === "rejected" ? "text-red-500" : "text-gray-500"
              }`}
            >
              Status: {application.status}
            </p>
            {user?.role === 'recruiter' && <div className="flex justify-between">
              {application.status == 'pending' && <button
                onClick={() => handleDecision(application.id, "accepted")}
                className="bg-[#e8744d] text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <FaCheck /> Accept
              </button>}
              {application.status == 'pending' &&  <button
                onClick={() => handleDecision(application.id, "rejected")}
                className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <FaTimes /> 
                <span>Reject</span>
              </button>}
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageApplications;
