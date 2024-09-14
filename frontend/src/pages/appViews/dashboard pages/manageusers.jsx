// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import { FaUser, FaTrash, FaEdit } from 'react-icons/fa';

// const ManageUser = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "Leonetta Lloyd", role: "Admin", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM", jobFamily: "HR", jobTitle: "Admin" },
//     { id: 2, name: "Marleah Eagleston", role: "User", status: "None selected", lastActivity: "10-10-2019 / 02:40 PM", jobFamily: "None", jobTitle: "None" },
//     { id: 3, name: "Onyama Limba", role: "User", status: "None selected", lastActivity: "10-10-2019 / 02:40 PM", jobFamily: "None", jobTitle: "None" },
//     { id: 4, name: "Martin Dragonjer", role: "User", status: "Project Manager", lastActivity: "10-10-2019 / 02:40 PM", jobFamily: "Management", jobTitle: "Project Manager" },
//     { id: 5, name: "Merrile Orr", role: "User", status: "Project Manager", lastActivity: "10-10-2019 / 02:40 PM", jobFamily: "Management", jobTitle: "Project Manager" },
//     { id: 6, name: "Vikenty Stick", role: "User", status: "None selected", lastActivity: "10-10-2019 / 02:40 PM", jobFamily: "None", jobTitle: "None" },
//     { id: 7, name: "Gunther Ackner", role: "Manager", status: "None selected", lastActivity: "10-10-2019 / 02:40 PM", jobFamily: "Management", jobTitle: "Manager" },
//     { id: 8, name: "Tao Lindholm", role: "User", status: "UX Designer", lastActivity: "10-10-2019 / 02:40 PM", jobFamily: "Design", jobTitle: "UX Designer" },
//     { id: 9, name: "Harsha Buksh", role: "User", status: "Front-end Developer", lastActivity: "10-10-2019 / 02:40 PM", jobFamily: "Development", jobTitle: "Front-end Developer" },
//     { id: 10, name: "Izabella Tabakova", role: "User", status: "UX Designer", lastActivity: "10-10-2019 / 02:40 PM", jobFamily: "Design", jobTitle: "UX Designer" },
//     { id: 11, name: "Harley Quinn", role: "User", status: "UI Designer", lastActivity: "10-10-2019 / 02:40 PM", jobFamily: "Design", jobTitle: "UI Designer" },
//   ]);

//   const [selectedUser, setSelectedUser] = useState(null);

//   const handleVerify = (userId) => {
//     Swal.fire({
//       title: 'Verify User',
//       text: 'Are you sure you want to verify this user?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, verify it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         setUsers(users.map(user => 
//           user.id === userId ? { ...user, status: 'Verified' } : user
//         ));
//         Swal.fire('Verified!', 'The user has been verified.', 'success');
//       }
//     });
//   };

//   const handleDelete = (userId) => {
//     Swal.fire({
//       title: 'Delete User',
//       text: 'Are you sure you want to delete this user?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         setUsers(users.filter(user => user.id !== userId));
//         Swal.fire('Deleted!', 'The user has been deleted.', 'success');
//       }
//     });
//   };

//   const handleSelectUser = (user) => {
//     setSelectedUser(user);
//   };

//   const handleSave = () => {
//     // Implement save functionality for user details
//     Swal.fire('Saved!', 'User details have been saved.', 'success');
//   };

//   return (
//     <div className="flex">
//       <div className="w-3/4 p-4">
//         <h1 className="text-2xl font-bold mb-4">User Management</h1>
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">Select</th>
//               <th className="py-2 px-4 border-b">Name</th>
//               <th className="py-2 px-4 border-b">Role</th>
//               <th className="py-2 px-4 border-b">Status</th>
//               <th className="py-2 px-4 border-b">Last Activity</th>
//               <th className="py-2 px-4 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-100">
//                 <td className="py-2 px-4 border-b">
//                   <input 
//                     type="checkbox"
//                     onChange={() => handleSelectUser(user)}
//                     checked={selectedUser?.id === user.id}
//                   />
//                 </td>
//                 <td className="py-2 px-4 border-b">{user.name}</td>
//                 <td className="py-2 px-4 border-b">{user.role}</td>
//                 <td className="py-2 px-4 border-b">{user.status}</td>
//                 <td className="py-2 px-4 border-b">{user.lastActivity}</td>
//                 <td className="py-2 px-4 border-b">
//                   <button 
//                     className="text-blue-500 hover:underline mr-2" 
//                     onClick={() => handleVerify(user.id)}
//                   >
//                     <FaEdit />
//                   </button>
//                   <button 
//                     className="text-red-500 hover:underline"
//                     onClick={() => handleDelete(user.id)}
//                   >
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {selectedUser && (
//         <div className="w-1/4 p-4 bg-gray-100 border-l border-gray-300">
//           <h2 className="text-xl font-bold mb-2">User Details</h2>
//           <p><strong>Name:</strong> {selectedUser.name}</p>
//           <p><strong>Last Activity:</strong> {selectedUser.lastActivity}</p>
//           <p><strong>Job Family:</strong> {selectedUser.jobFamily}</p>
//           <p><strong>Job Title:</strong> {selectedUser.jobTitle}</p>
//           <div className="mt-4">
//             <label className="block mb-1">Verify user after save</label>
//             <input type="checkbox" className="mr-2" />
//             <span>Notify user of changes</span>
//           </div>
//           <button 
//             className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
//             onClick={handleSave}
//           >
//             Save
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageUser;




// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import { FaTrash } from 'react-icons/fa';

// const ManageUser = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "Leonetta Lloyd", role: "Admin", jobTitle: "HR", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
//     { id: 2, name: "Marleah Eagleston", role: "User", jobTitle: "None", status: "None selected", lastActivity: "10-10-2019 / 02:40 PM" },
//     { id: 3, name: "Onyama Limba", role: "User", jobTitle: "None", status: "None selected", lastActivity: "10-10-2019 / 02:40 PM" },
//     { id: 4, name: "Martin Dragonjer", role: "User", jobTitle: "Project Manager", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
//     { id: 5, name: "Merrile Orr", role: "User", jobTitle: "Project Manager", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
//     { id: 6, name: "Vikenty Stick", role: "User", jobTitle: "None", status: "None selected", lastActivity: "10-10-2019 / 02:40 PM" },
//     { id: 7, name: "Gunther Ackner", role: "Manager", jobTitle: "None", status: "None selected", lastActivity: "10-10-2019 / 02:40 PM" },
//     { id: 8, name: "Tao Lindholm", role: "User", jobTitle: "UX Designer", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
//     { id: 9, name: "Harsha Buksh", role: "User", jobTitle: "Front-end Developer", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
//     { id: 10, name: "Izabella Tabakova", role: "User", jobTitle: "UX Designer", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
//     { id: 11, name: "Harley Quinn", role: "User", jobTitle: "UI Designer", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
//   ]);

//   const [selectedUser, setSelectedUser] = useState(null);

//   const handleDelete = (userId) => {
//     Swal.fire({
//       title: 'Delete User',
//       text: 'Are you sure you want to delete this user?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         setUsers(users.filter(user => user.id !== userId));
//         Swal.fire('Deleted!', 'The user has been deleted.', 'success');
//       }
//     });
//   };

//   const handleSelectUser = (user) => {
//     setSelectedUser(user);
//   };

//   const handleSave = () => {
//     Swal.fire('Saved!', 'User details have been saved.', 'success');
//   };

//   const handleAction = (action) => {
//     Swal.fire({
//       title: `${action.charAt(0).toUpperCase() + action.slice(1)} User`,
//       text: `Are you sure you want to ${action} this user?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: `Yes, ${action} it!`,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire(`${action.charAt(0).toUpperCase() + action.slice(1)}d!`, `The user has been ${action}d.`, 'success');
//       }
//     });
//   };

//   return (
//     <div className="flex flex-col md:flex-row">
//       <div className="w-full md:w-3/4 p-4">
//         <h1 className="text-2xl font-bold mb-4">User Management</h1>
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">Select</th>
//               <th className="py-2 px-4 border-b">Name</th>
//               <th className="py-2 px-4 border-b">Role</th>
//               <th className="py-2 px-4 border-b">Job Title</th>
//               <th className="py-2 px-4 border-b">Status</th>
//               <th className="py-2 px-4 border-b">Last Activity</th>
//               <th className="py-2 px-4 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-100">
//                 <td className="py-2 px-4 border-b">
//                   <input 
//                     type="checkbox"
//                     onChange={() => handleSelectUser(user)}
//                     checked={selectedUser?.id === user.id}
//                   />
//                 </td>
//                 <td className="py-2 px-4 border-b">{user.name}</td>
//                 <td className="py-2 px-4 border-b">
//                   <select 
//                     value={selectedUser?.role || user.role} 
//                     onChange={(e) => {
//                       const updatedUsers = users.map(u => u.id === user.id ? { ...u, role: e.target.value } : u);
//                       setUsers(updatedUsers);
//                     }}
//                     className="border border-gray-300 rounded p-1"
//                   >
//                     <option value="Admin">Admin</option>
//                     <option value="User">User</option>
//                     <option value="Manager">Manager</option>
//                   </select>
//                 </td>
//                 <td className="py-2 px-4 border-b">
//                   <select 
//                     value={selectedUser?.jobTitle || user.jobTitle}
//                     onChange={(e) => {
//                       const updatedUsers = users.map(u => u.id === user.id ? { ...u, jobTitle: e.target.value } : u);
//                       setUsers(updatedUsers);
//                     }}
//                     className="border border-gray-300 rounded p-1"
//                   >
//                     <option value="None">None</option>
//                     <option value="Project Manager">Project Manager</option>
//                     <option value="UX Designer">UX Designer</option>
//                     <option value="Front-end Developer">Front-end Developer</option>
//                     <option value="UI Designer">UI Designer</option>
//                   </select>
//                 </td>
//                 <td className="py-2 px-4 border-b">{user.status}</td>
//                 <td className="py-2 px-4 border-b">{user.lastActivity}</td>
//                 <td className="py-2 px-4 border-b">
//                   <button 
//                     className="text-green-500 hover:underline mr-2" 
//                     onClick={() => handleAction('activate')}
//                   >
//                     Activate
//                   </button>
//                   <button 
//                     className="text-yellow-500 hover:underline mr-2" 
//                     onClick={() => handleAction('suspend')}
//                   >
//                     Suspend
//                   </button>
//                   <button 
//                     className="text-red-500 hover:underline mr-2" 
//                     onClick={() => handleAction('block')}
//                   >
//                     Block
//                   </button>
//                   <button 
//                     className="text-red-500 hover:underline"
//                     onClick={() => handleDelete(user.id)}
//                   >
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {selectedUser && (
//         <div className="w-full md:w-1/4 p-4 bg-gray-100 border-l border-gray-300">
//           <h2 className="text-xl font-bold mb-2">User Details</h2>
//           <p><strong>Name:</strong> {selectedUser.name}</p>
//           <p><strong>Last Activity:</strong> {selectedUser.lastActivity}</p>
//           <div className="mt-4">
//             <label className="block mb-1">Verify user after save</label>
//             <input type="checkbox" className="mr-2" />
//             <span>Notify user of changes</span>
//           </div>
//           <button 
//             className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
//             onClick={handleSave}
//           >
//             Save
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageUser;













import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';

const ManageUser = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Leonetta Lloyd", role: "Admin", jobTitle: "HR", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
    { id: 2, name: "Marleah Eagleston", role: "User", jobTitle: "None", status: "None selected", lastActivity: "10-10-2019 / 02:40 PM" },
    { id: 3, name: "Onyama Limba", role: "User", jobTitle: "None", status: "None selected", lastActivity: "10-10-2019 / 02:40 PM" },
    { id: 4, name: "Martin Dragonjer", role: "User", jobTitle: "Project Manager", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
    { id: 5, name: "Merrile Orr", role: "User", jobTitle: "Project Manager", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
    { id: 6, name: "Vikenty Stick", role: "User", jobTitle: "None", status: "None selected", lastActivity: "10-10-2019 / 02:40 PM" },
    { id: 7, name: "Gunther Ackner", role: "Manager", jobTitle: "None", status: "None selected", lastActivity: "10-10-2019 / 02:40 PM" },
    { id: 8, name: "Tao Lindholm", role: "User", jobTitle: "UX Designer", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
    { id: 9, name: "Harsha Buksh", role: "User", jobTitle: "Front-end Developer", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
    { id: 10, name: "Izabella Tabakova", role: "User", jobTitle: "UX Designer", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
    { id: 11, name: "Harley Quinn", role: "User", jobTitle: "UI Designer", status: "Verified", lastActivity: "10-10-2019 / 02:40 PM" },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const handleDelete = (userId) => {
    Swal.fire({
      title: 'Delete User',
      text: 'Are you sure you want to delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers(users.filter(user => user.id !== userId));
        Swal.fire('Deleted!', 'The user has been deleted.', 'success');
      }
    });
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleSave = () => {
    Swal.fire('Saved!', 'User details have been saved.', 'success');
  };

  const handleAction = (action) => {
    Swal.fire({
      title: `${action.charAt(0).toUpperCase() + action.slice(1)} User`,
      text: `Are you sure you want to ${action} this user?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: `Yes, ${action} it!`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`${action.charAt(0).toUpperCase() + action.slice(1)}d!`, `The user has been ${action}d.`, 'success');
      }
    });
  };

  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Select</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Job Title</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Last Activity</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">
                  <input 
                    type="checkbox"
                    onChange={() => handleSelectUser(user)}
                    checked={selectedUser?.id === user.id}
                  />
                </td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">
                  <select 
                    value={selectedUser?.role || user.role} 
                    onChange={(e) => {
                      const updatedUsers = users.map(u => u.id === user.id ? { ...u, role: e.target.value } : u);
                      setUsers(updatedUsers);
                    }}
                    className="border border-gray-300 rounded p-1"
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Manager">Manager</option>
                  </select>
                </td>
                <td className="py-2 px-4 border-b">
                  <select 
                    value={selectedUser?.jobTitle || user.jobTitle}
                    onChange={(e) => {
                      const updatedUsers = users.map(u => u.id === user.id ? { ...u, jobTitle: e.target.value } : u);
                      setUsers(updatedUsers);
                    }}
                    className="border border-gray-300 rounded p-1"
                  >
                    <option value="None">None</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="Front-end Developer">Front-end Developer</option>
                    <option value="UI Designer">UI Designer</option>
                  </select>
                </td>
                <td className="py-2 px-4 border-b">{user.status}</td>
                <td className="py-2 px-4 border-b">{user.lastActivity}</td>
                <td className="py-2 px-4 border-b">
                  <button 
                    className="text-green-500 hover:underline mr-2" 
                    onClick={() => handleAction('activate')}
                  >
                    Activate
                  </button>
                  <button 
                    className="text-yellow-500 hover:underline mr-2" 
                    onClick={() => handleAction('suspend')}
                  >
                    Suspend
                  </button>
                  <button 
                    className="text-red-500 hover:underline mr-2" 
                    onClick={() => handleAction('block')}
                  >
                    Block
                  </button>
                  <button 
                    className="text-red-500 hover:underline"
                    onClick={() => handleDelete(user.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button 
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded" 
            onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="self-center">{`Page ${currentPage} of ${totalPages}`}</span>
          <button 
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded" 
            onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {selectedUser && (
        <div className="w-full md:w-1/4 p-4 bg-gray-100 border-l border-gray-300">
          <h2 className="text-xl font-bold mb-2">User Details</h2>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Last Activity:</strong> {selectedUser.lastActivity}</p>
          <div className="mt-4">
            <label className="block mb-1">Verify user after save</label>
            <input type="checkbox" className="mr-2" />
            <span>Notify user of changes</span>
          </div>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageUser;