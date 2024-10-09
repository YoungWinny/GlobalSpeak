import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineCloseCircle, AiOutlineFile } from "react-icons/ai";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { axiosInstance } from "../../../utils/axiosInstance";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");


// Main ViewTasks component
const ViewTasks = () => {
  let subtitle;
  const [selectedTask,setSelectedTask] = useState({})
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [tasks, setTasks] = useState([])

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [files, setFiles] = useState(null)

  const submitTask = async ()=> {
    const formData = new FormData();
    for(file of files){
      formData('files', file);
    }
    try{
      const response = await axiosInstance.put(`/task/upload/${selectedTask?._id}`,formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
      if(response.data){
        Swal.fire({
          title: "Task",
          text: `Task Submitted successfully !!!`,
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          return;
        });
      }
    }catch(err){
      Swal.fire({
        title: "Task",
        text: `An error when submitting task try again !!!`,
        icon: "error",
        confirmButtonText: "OK",
      }).then(() => {
        return;
      });
    }finally{
      fetchTasks();
    }
  }

  const fetchTasks=async()=>{
    let storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      storedUser = JSON.parse(storedUser);
    }
    try{
      const response = await axiosInstance.get(`/task/user/${storedUser?._id}`)
      if(response.data){
        setTasks([...response.data])
      }
    }catch(err){
      Swal.fire({
        title: "Task",
        text: `Failed to fetch tasks try again`,
        icon: "error",
        confirmButtonText: "OK",
      }).then(() => {
        return;
      });
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-start">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Tasks"
      >
        <div className="w-[600px] h-[650px] bg-white rounded-md ">
          <button
            onClick={closeModal}
            className="bg-red-500 text-white w-6 h-6 mb-2 flex justify-center items-center text-lg rounded-full shadow-md flex items-center float-right"
          >
            x
          </button>
          <div className="bg-[#BEBEBE]  h-full w-full flex items-center justify-center flex flex-col">
            <div className="uploadSection bg-[whitesmoke] h-[95%] w-[80%] shadow-2xl border rounded-2xl ">
              <div className="flex justify-between my-8">
                  <button onClick={closeModal} className="border-2 border-[#BEBEBE] border-solid ml-4 rounded-full">
                    cancel
                  </button>
                  <button onClick={()=> submitTask()} className="rounded-full mr-4 bg-black text-white">
                    continue
                  </button>
              </div>
              <h1 className="text-3xl text-center">
                Finished Task and wish to submit ?
              </h1>
              <p className="text-center">
                Add your documents here and upload them
              </p>
              <div className="w-full h-3/4 flex flex-col items-center justify-center">
                <div className=" border-4 border-dashed border-[#BEBEBE] w-[90%] h-[75%] flex flex-col items-center justify-center mt-20">
                  <MdOutlineFileUpload size={32} />
                  <p>Upload complete work ...</p>&nbsp;
                  <input type="file" multiple  onChange={e=> setFiles(e.target.files)} className="border-2 border-[#BEBEBE] border-solid rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 w-11/12">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3 flex justify-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">Approved</td>
              <td className="px-6 py-4 flex justify-center">
                <button
                  onClick={openModal}
                  className="rounded bg-blue-500 font-medium text-white hover:opacity-0.8"
                >
                  Upload Task
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTasks;
