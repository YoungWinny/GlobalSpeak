// import React from 'react';
// import { FaUser, FaClipboardList, FaCalendarAlt, FaChartBar, FaQuestionCircle, FaHome } from 'react-icons/fa';
// import { FiMenu } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

// const Sidebar = ({ darkMode, isCollapsed, toggleSidebar }) => {
//   return (
//     <div
//       className={`flex flex-col ${darkMode ? 'bg-gray-800 text-white' : ' bg-[#FEF8F9] text-black'} `}
//       style={{ width: isCollapsed ? '75px' : '250px', height: '100vh', overflowY: 'auto' }}
//     >
//       {/* Logo, App Name, and Collapse Button */}
//       <div className="flex items-center justify-between p-4">
//         {!isCollapsed && (
//           <>
//             <img src="src/assets/images/headphone-5-svgrepo-com.svg" alt="Logo" className="h-10 left-2" />
//             <span className="text-2xl font-bold right-6" >GlobalSpeak</span>
//           </>
//         )}
//         <button onClick={toggleSidebar} className="text-lg p-2">
//           <FiMenu />
//         </button>
//       </div>
      
//       {/* User Info */}
//       {!isCollapsed && (
//         <div className="flex flex-col items-center mb-6">
//           <img src="src/assets/images/avatar.png" alt="Avatar" className="rounded-full w-16 h-16" />
//           <span className="text-lg font-bold">Winnyfred Ashley</span>
//           <span className="text-sm">VP Fancy Admin</span>
//         </div>
//       )}
      
//       {/* Navigation */}
//       <nav className="flex flex-col">
//         <span className={`${isCollapsed ? 'hidden' : 'p-6 font-semibold text-[#BEBEBE]'}`}>Translator/Transcriber</span>
//         <Link to="/dashboard/home" className="flex items-center p-6 hover:bg-gray-200">
//           <FaHome />
//           <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Dashboard</span>
//         </Link>
//         <Link to="/dashboard/manageprofile" className="flex items-center p-6 hover:bg-gray-200">
//           <FaUser />
//           <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Manage Profile</span>
//         </Link>
//         <Link to="/dashboard/apply" className="flex items-center p-6 hover:bg-gray-200">
//           <FaClipboardList />
//           <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Apply</span>
//         </Link>
//         <Link to="/dashboard/viewtasks" className="flex items-center p-6 hover:bg-gray-200">
//           <FaQuestionCircle />
//           <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>View tasks</span>
//         </Link>
//         <Link to="/dashboard/uploadtasks" className="flex items-center p-6 hover:bg-gray-200">
//           <FaQuestionCircle />
//           <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Upload completed task</span>
//         </Link>

//         <span className={`${isCollapsed ? 'hidden' : 'p-6 font-semibold text-[#BEBEBE]'}`}>Admin/Recruiter</span>
//         <Link to ="/dashboard/makepayment" className="flex items-center p-6 hover:bg-gray-200">  
//           <FaUser />
//           <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>G-Speak Payment</span>
//           </Link>
//         <Link to ="" className="flex items-center p-6 hover:bg-gray-200">
//           <FaCalendarAlt />
//           <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Create Job</span>
//         </Link>
//         <Link to ="" className="flex items-center p-6 hover:bg-gray-200">
//           <FaQuestionCircle />
//           <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Manage Applications</span>
//         </Link>

//         <span className={`${isCollapsed ? 'hidden' : 'p-4 font-semibold text-[#BEBEBE]'}`}>Recruiter/Admin</span>
//         <Link to ="/dashboard/manageusers" className="flex items-center p-6 hover:bg-gray-200">
//           <FaChartBar />
//           <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Manage Accounts</span>
//         </Link>
//         <Link to ="" className="flex items-center p-6 hover:bg-gray-200">
//           <FaChartBar />
//           <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Manage Users</span>
//         </Link>
//       </nav>
//     </div>
    
//   );
// };

// export default Sidebar;



import React from 'react';
import { FaUser, FaClipboardList, FaCalendarAlt, FaChartBar, FaQuestionCircle, FaHome ,FaSignOutAlt} from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ darkMode, isCollapsed, toggleSidebar }) => {
  return (
    <div
      className={`flex flex-col ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#FEF8F9] text-black'}`}
      style={{ width: isCollapsed ? '75px' : '250px', height: '100vh', overflowY: 'auto' }}
    >
      {/* Logo, App Name, and Collapse Button */}
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && (
          <>
            <img src="src/assets/images/headphone-5-svgrepo-com.svg" alt="Logo" className="h-10 left-2" />
            <span className="text-2xl font-bold right-6">GlobalSpeak</span>
          </>
        )}
        <button onClick={toggleSidebar} className="text-lg p-2">
          <FiMenu />
        </button>
      </div>

      {/* User Info */}
      {!isCollapsed && (
        <div className="flex flex-col items-center mb-6">
          <img src="src/assets/images/avatar.png" alt="Avatar" className="rounded-full w-16 h-16" />
          <span className="text-lg font-bold">Winnyfred Ashley</span>
          <span className="text-sm">VP Fancy Admin</span>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex flex-col">
        <span className={`${isCollapsed ? 'hidden' : 'p-6 font-semibold text-[#BEBEBE]'}`}>Translator/Transcriber</span>
        <NavLink to="/dashboard/home" className={({ isActive }) => `flex items-center p-6 hover:bg-gray-200 ${isActive ? 'text-[rgba(239,146,115,1)]' : ''}`}>
          <FaHome />
          <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Dashboard</span>
        </NavLink>
        <NavLink to="/dashboard/manageprofile" className={({ isActive }) => `flex items-center p-6 hover:bg-gray-200 ${isActive ? 'text-[rgba(239,146,115,1)]' : ''}`}>
          <FaUser />
          <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Manage Profile</span>
        </NavLink>
        <NavLink to="/dashboard/apply" className={({ isActive }) => `flex items-center p-6 hover:bg-gray-200 ${isActive ? 'text-[rgba(239,146,115,1)]' : ''}`}>
          <FaClipboardList />
          <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Apply</span>
        </NavLink>
        <NavLink to="/dashboard/viewtasks" className={({ isActive }) => `flex items-center p-6 hover:bg-gray-200 ${isActive ? 'text-[rgba(239,146,115,1)]' : ''}`}>
          <FaQuestionCircle />
          <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>View tasks</span>
        </NavLink>
        <NavLink to="/dashboard/uploadtasks" className={({ isActive }) => `flex items-center p-6 hover:bg-gray-200 ${isActive ? 'text-[rgba(239,146,115,1)]' : ''}`}>
          <FaQuestionCircle />
          <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Upload completed task</span>
        </NavLink>

        <span className={`${isCollapsed ? 'hidden' : 'p-6 font-semibold text-[#BEBEBE]'}`}>Admin/Recruiter</span>
        <NavLink to="/dashboard/makepayment" className={({ isActive }) => `flex items-center p-6 hover:bg-gray-200 ${isActive ? 'text-[rgba(239,146,115,1)]' : ''}`}>
          <FaUser />
          <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>G-Speak Payment</span>
        </NavLink>
        <NavLink to="/dashboard/createjob" className={({ isActive }) => `flex items-center p-6 hover:bg-gray-200 ${isActive ? 'text-[rgba(239,146,115,1)]' : ''}`}>
          <FaCalendarAlt />
          <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Create Job</span>
        </NavLink>
        <NavLink to="/dashboard/manageapplications" className={({ isActive }) => `flex items-center p-6 hover:bg-gray-200 ${isActive ? 'text-[rgba(239,146,115,1)]' : ''}`}>
          <FaQuestionCircle />
          <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Manage Applications</span>
        </NavLink>

        <span className={`${isCollapsed ? 'hidden' : 'p-4 font-semibold text-[#BEBEBE]'}`}>Recruiter/Admin</span>
        <NavLink to="/dashboard/manageaccounts" className={({ isActive }) => `flex items-center p-6 hover:bg-gray-200 ${isActive ? 'text-[rgba(239,146,115,1)]' : ''}`}>
          <FaChartBar />
          <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Manage Accounts</span>
        </NavLink>
        <NavLink to="/dashboard/manageusers" className={({ isActive }) => `flex items-center p-6 hover:bg-gray-200 ${isActive ? 'text-[rgba(239,146,115,1)]' : ''}`}>
          <FaChartBar />
          <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Manage Users</span>
        </NavLink>
        <NavLink to="/" className={({ isActive }) => `flex items-center p-6 hover:bg-gray-200 ${isActive ? 'text-[rgba(239,146,115,1)]' : ''}`}>
          <FaSignOutAlt/>
          <span className={`${isCollapsed ? 'hidden' : 'ml-2'}`}>Log Out</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;