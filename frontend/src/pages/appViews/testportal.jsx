


//     return (
//         <div className="min-h-screen bg-gradient-to-r from-green-50 to-teal-100 flex flex-col items-center justify-center p-6">
//             <h1 className="text-5xl font-bold mb-12 text-gray-900">Test Portal</h1>
//             <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-10 space-y-10">
//                 <TestSection 
//                     title="Audio Translation Test" 
//                     description="Listen to the audio and provide a written translation." 
//                 />
//                 <TestSection 
//                     title="Video Transcription Test" 
//                     description="Watch the video and transcribe the content." 
//                 />
//                 <TestSection 
//                     title="Text Translation Test" 
//                     description="Translate the provided text accurately." 
//                 />
//                 <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
//                     Submit All Tests
//                 </button>
//             </div>
//         </div>
//     );
// };

// const TestSection = ({ title, description }) => {
//     return (
//         <div className="border-b pb-6 last:border-b-0">
//             <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
//             <p className="text-gray-600 mb-4">{description}</p>
//             <button className="bg-teal-500 text-white px-5 py-2 rounded-lg hover:bg-teal-600 transition duration-300">
//                 Start {title}
//             </button>
//         </div>
//     );
import React, { useState, useEffect } from 'react';

  export const TestPortal = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const startTest = () => {
    setIsActive(true);
  };

  const submitTest = () => {
    setIsActive(false);
    alert(`Test submitted! Time taken: ${formatTime(time)}`);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#FEF9F8] relative right-6">
      <div className="absolute right-4 text-white bg-[rgba(239,146,115,1)] text-center text-9xl w-[400px] h-[200px] p-2 rounded-[100px]">
        {formatTime(time)}
      </div>
      <div className="bg-white p-10 rounded-lg shadow-xl h-[800px] text-center w-full max-w-5xl">
        {!isActive ? (
          <div>
            <h1 className="text-2xl mb-4 text-black">Welcome to the Test Portal</h1>
            <p className="mb-6 text-gray-700">Click "Start Test" to begin your transcription or translation task.</p>
            <button
              className="bg-[rgba(239,146,115,1)] text-white px-4 py-2 rounded hover:bg-[rgba(239,146,115,1)] opacity-[85]"
              onClick={startTest}
            >
              Start Test
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl mb-4 text-black">Your Task</h2>
            <div className="bg-gray-100 text-black p-4 rounded h-64 mb-4">
              {/* Simulated task content */}
              <p>Translate or transcribe the following:</p>
              <p>[Audio/Video/Text Placeholder]</p>
            </div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={submitTest}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestPortal;