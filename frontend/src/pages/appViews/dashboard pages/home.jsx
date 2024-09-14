import React from 'react';
import { FaUser, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineLineChart } from 'react-icons/ai';
import { RiFileEditLine } from 'react-icons/ri';

const Home = ({ darkMode }) => {
  return (
    <div className={`flex flex-col h-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      {/* Header */}
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-[#ef926f] text-white px-4 py-2 rounded-md">
            <FaCalendarAlt className="inline mr-2" /> Schedule
          </button>
          <button className="bg-[#ef926f] text-white px-2 py-2 rounded-md">
            <RiFileEditLine className="inline mr-2" /> Create Report
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Total Users</h3>
            <p className="text-3xl font-bold text-[#ef926f]">1,250</p>
            <div className="mt-4 flex items-center text-gray-500">
              <FaUser className="text-xl mr-2" />
              <span>Active Users</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Messages</h3>
            <p className="text-3xl font-bold text-[#ef926f]">320</p>
            <div className="mt-4 flex items-center text-gray-500">
              <FaEnvelope className="text-xl mr-2" />
              <span>Unread Messages</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Pending Reports</h3>
            <p className="text-3xl font-bold text-[#ef926f]">15</p>
            <div className="mt-4 flex items-center text-gray-500">
              <AiOutlineLineChart className="text-xl mr-2" />
              <span>Reports to Review</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
