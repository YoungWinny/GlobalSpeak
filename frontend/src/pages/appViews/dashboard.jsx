// import React, { useState } from 'react';
// import Sidebar from '../appViews/Sidebar';
// import Navbar from '../appViews/Navbar';

// export const Dashboard = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} flex`}>
//       <Sidebar />
//       <div className="flex-1">
//         <Navbar toggleDarkMode={toggleDarkMode} />
//         <div className="p-4">
//           <h2 className="text-xl font-bold">Welcome to the Dashboard!</h2>
//           {/* Additional content goes here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState } from 'react';
//  import Sidebar from '../appViews/Sidebar';
//  import Navbar from '../appViews/Navbar';

// export const Dashboard = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(prevMode => !prevMode);
//   };

//   return (
//     <div className={`flex ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>
//       <Sidebar darkMode={darkMode} />
//       <div className="flex-1">
//         <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
//         <div className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`}>
//           <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
//           {/* Additional content goes here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useState } from 'react';
// import Sidebar from '../appViews/Sidebar';
// import Navbar from '../appViews/Navbar';

// export const Dashboard = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [currentPage, setCurrentPage] = useState('dashboard');

//   const toggleDarkMode = () => {
//     setDarkMode(prevMode => !prevMode);
//   };

//   const renderContent = () => {
//     switch (currentPage) {
//       case 'create-job':
//         return <div className="p-4">Create Job Form Here</div>;
//       default:
//         return <div className="p-4">Welcome to your dashboard!</div>;
//     }
//   };

//   return (
//     <div className={`flex ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>
//       <Sidebar darkMode={darkMode} />
//       <div className="flex-1 flex flex-col">
//         <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
//         <div className={`flex-1 p-4 ${darkMode ? 'text-white' : 'text-black'}`}>
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../appViews/Sidebar';
import Navbar from '../appViews/Navbar';
import ManageProfile from './dashboard pages/manageprofile';
import Apply from './dashboard pages/apply';
import UploadTasks from './dashboard pages/uploadtasks';
import Home from './dashboard pages/home';
import ViewTasks from './dashboard pages/viewtasks';
import { useLocation } from 'react-router-dom';
import ManageAccount  from './dashboard pages/manageaccounts';
import MakePayment from './dashboard pages/makepayment';
import ManageUser from './dashboard pages/manageusers';
import CreateJob from './dashboard pages/createjob';
import ManageApplications from './dashboard pages/manageapplications';
import JobDetails from './dashboard pages/jobdetails';


export const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const toggleSidebar = () => {
    setIsCollapsed(prevState => !prevState);
  };

  const RenderComponent = () => {
    const location = useLocation()
    console.log(location);
    
     switch (location.pathname) {
      case "/dashboard/manageprofile":
          return <ManageProfile />
      case "/dashboard/apply":
        return <Apply />
      case "/dashboard/uploadtasks":
        return <UploadTasks />
      case "/dashboard/viewtasks":
        return <ViewTasks />
      case "/dashboard/manageusers":
        return <ManageUser/>
      case "/dashboard/makepayment":
        return <MakePayment />
      case "/dashboard/manageaccounts":
        return <ManageAccount /> 
      case "/dashboard/createjob":
        return <CreateJob/> 
      case "/dashboard/manageapplications":
        return <ManageApplications/>
      case "/dashboard/job":
        return <JobDetails/>    
      default:
        return <Home/>
     }
  }

  return (
    <div className={`border-none border-2 border-red-600 flex h-full  ${darkMode ? 'bg-gray-100' :'bg-gray-100'}`}>
      
     <div  className={`flex flex-col ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-900 text-black'} `}
        style={{ width: isCollapsed ? '75px' : '270px', height: '100vh', overflowY: 'auto' }}>
         <Sidebar darkMode={darkMode} isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      </div> 
       
     
      <div className='parent flex flex-col item-center justify-center w-full h-full'>   
           <div className='Navbar w-full h-[8.55vh] border-none border-2 border-green-600'>
               <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </div>   

            <div className={`Main w-full h-[90vh]   ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                {RenderComponent()} 
           </div> 
      </div>
   
    </div>
  );
};

export default Dashboard;