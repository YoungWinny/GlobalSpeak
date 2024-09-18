// import React, { useState, useEffect } from 'react';
// import Swal from 'sweetalert2';

// export const TestPortal = () => {
//   // Sample text to be translated
//   const sampleText = "Globalization has transformed the way we interact with the world. The ability to communicate in multiple languages has become more important than ever.";

//   // State to hold applicant's translation
//   const [translation, setTranslation] = useState('');

//   // Timer state (start with 15 minutes, example)
//   const [timeLeft, setTimeLeft] = useState(15 * 60);

//   // Handle timer countdown
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);

//     if (timeLeft === 0) {
//       clearInterval(interval);
//       handleSubmit(); // Auto-submit when time runs out
//     }

//     return () => clearInterval(interval);
//   }, [timeLeft]);

//   // Format time to mm:ss
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   // Handle form submission
//   const handleSubmit = () => {
//     if (translation.trim() === '') {
//       Swal.fire({
//         title: 'Error',
//         text: 'Please provide your translation!',
//         icon: 'error',
//         confirmButtonText: 'Okay',
//       });
//     } else {
//       Swal.fire({
//         title: 'Submission Successful',
//         text: 'Your translation has been submitted!',
//         icon: 'success',
//         confirmButtonText: 'Great!',
//       });
//       console.log('Applicant Translation: ', translation);
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left side - text to be translated */}
//       <div className="w-1/2 p-8 bg-gray-100 flex flex-col justify-center">
//         <h2 className="text-2xl font-semibold mb-4">Text to be Translated</h2>
//         <p className="text-lg leading-relaxed">
//           {sampleText}
//         </p>
//       </div>

//       {/* Right side - translation input and timer */}
//       <div className="w-1/2 p-8 bg-white flex flex-col justify-between relative">
//         {/* Timer at the top right */}
//         <div className="absolute top-4 right-4 text-lg text-gray-700 font-semibold">
//           Time left: {formatTime(timeLeft)}
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Your Translation</h2>
//           <textarea
//             className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(239,146,115,1)]"
//             placeholder="Type your translation here..."
//             value={translation}
//             onChange={(e) => setTranslation(e.target.value)}
//           />
//         </div>

//         {/* Submit button */}
//         <div className="mt-4 text-right">
//           <button
//             onClick={handleSubmit}
//             className="bg-[rgba(239,146,115,1)] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300"
//           >
//             Submit Translation
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestPortal;



import React, { useState, useEffect } from 'react';

export const TestPortal = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // Example: 1 hour in seconds
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  // Countdown Timer Logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Format time to HH:MM:SS
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col h-full w-full p-4">
      {/* Buttons at the top */}
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md">Translate Text</button>
          <button className="px-6 py-3 bg-gray-300 text-black rounded-md">Translate Files</button>
          <button className="px-6 py-3 bg-gray-300 text-black rounded-md">Write</button>
        </div>
      </div>

      {/* Translation Interface */}
      <div className="flex grow border rounded-md overflow-hidden h-[80vh]">
        {/* Source Text Area */}
        <div className="w-1/2 p-4 bg-gray-50 border-r">
          <textarea
            className="w-full h-full p-2 bg-white border border-gray-300 rounded-md resize-none"
            placeholder="Type to translate."
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            style={{ fontSize: '1.2rem' }} // Make font bigger for better readability
          />
        </div>

        {/* Target Text Area and Timer */}
        <div className="w-1/2 p-4 relative">
          {/* Timer at the top right */}
          <div className="absolute top-4 right-4 text-lg font-bold text-red-500">
            {formatTime(timeLeft)}
          </div>

          <textarea
            className="w-full h-full p-2 bg-white border border-gray-300 rounded-md resize-none"
            placeholder="Your translation here."
            value={translatedText}
            onChange={(e) => setTranslatedText(e.target.value)}
            style={{ fontSize: '1.2rem' }} // Make font bigger for better readability
          />
        </div>
      </div>
    </div>
  );
};

export default TestPortal;
