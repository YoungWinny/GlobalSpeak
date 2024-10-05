import React, { useState } from 'react';
import { FaBook, FaUpload } from 'react-icons/fa';
import { MdVideoLibrary } from 'react-icons/md';
import { useDropzone } from 'react-dropzone';

// Example questions based on translation and transcription topics
const quizData = [
  {
    question: "What is the most common file format for transcriptions?",
    options: ["PDF", "TXT", "JPEG", "MP4"],
    answer: "TXT",
  },
  {
    question: "Which of the following is a challenge in audio transcription?",
    options: ["Background noise", "Accurate pronunciation", "Spelling errors", "Slow internet connection"],
    answer: "Background noise",
  },
  {
    question: "In translation, what does 'CAT' stand for?",
    options: ["Computer-Assisted Translation", "Content-Audio Transfer", "Centralized Automated Translator", "Content-Accuracy Tool"],
    answer: "Computer-Assisted Translation",
  },
  {
    question: "Which of the following is NOT a common transcription tool?",
    options: ["Express Scribe", "Dragon", "Audacity", "Google Docs"],
    answer: "Google Docs",
  },
  {
    question: "Which of the following skills is essential for a translator?",
    options: ["Typing speed", "Fluency in multiple languages", "Legal knowledge", "Programming skills"],
    answer: "Fluency in multiple languages",
  }
];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [videoFile, setVideoFile] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption("");
    setIsSubmitted(false);
    setVideoFile(null); // Reset video file on retake
  };

  // Drag and drop functionality
  const onDrop = (acceptedFiles) => {
    setVideoFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-evenly bg-gray-100">
      <div className='w-11/12 flex items-center'>
        <FaBook size={32} className='text-primary ml-2' />
        <h1 className='text-[42px] font-bolder text-primary py-[-6px] float-left'>Take Test</h1>
      </div>

      <div className='w-11/12 h-3/4 bg-primary flex justify-around items-center rounded'>
        <div className="w-[30%] bg-[#FEF9F8] h-[90%] p-8 rounded-lg shadow-lg">
          {!isSubmitted ? (
            <>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Question {currentQuestionIndex + 1} / {quizData.length}
              </h1>
              <p className="text-lg mb-4">{quizData[currentQuestionIndex].question}</p>

              <div className="space-y-4">
                {quizData[currentQuestionIndex].options.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value={option}
                      checked={selectedOption === option}
                      onChange={handleOptionChange}
                      className="form-radio h-5 w-5 text-orange-500"
                    />
                    <span className="text-gray-800">{option}</span>
                  </label>
                ))}
              </div>

              <div className="flex justify-between items-end h-1/2 bottom-20 ">
                <button
                  onClick={handlePrevQuestion}
                  className={`bg-gray-400 text-white py-2 px-4 rounded-lg shadow ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500'}`}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </button>

                <button
                  onClick={handleNextQuestion}
                  className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600"
                  disabled={!selectedOption}
                >
                  {currentQuestionIndex === quizData.length - 1 ? 'Submit' : 'Next'}
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">Quiz Completed!</h2>
              <p className="mt-4 text-lg">Your Score: {score} / {quizData.length}</p>
              <button
                onClick={resetQuiz}
                className="mt-6 w-full bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600"
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
        <div className='part2 w-[30%] bg-[#FEF9F8] h-[90%] p-8 rounded-lg shadow-lg flex flex-col justify-between items-center'>
          <h2 className='text-lg'>Tell me about you? We need a full description of you and why you're fit for the job in textual form in the language of the job</h2>
          <span className='self-end text-red-500 text-2xl'>*</span>
          <textarea className='w-[98%] h-[400px] border border-gray-300 rounded border-dashed'/>
        </div>
        <div className='part3 w-[30%] bg-[#FEF9F8] h-[90%] p-8 rounded-lg shadow-lg flex flex-col'>
          <span className='text-lg text-center py-4'>Upload a video of yourself giving your motivations in the language of the job</span>
          <p className='self-end text-red-500 text-2xl float-right mt-4'>*</p>
          <div {...getRootProps()} className='border-[#BEBEBE] border-dashed border-2 h-[400px] flex flex-col items-center justify-center'>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className='text-gray-500'>Drop the video file here...</p>
            ) : (
              <>
                <MdVideoLibrary size={32} />
                <button className="w-1/2 bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600">Upload Video</button>
                <p className='text-gray-500'>Drag & drop your video here, or click to select file</p>
              </>
            )}
            {videoFile && <p className='mt-2'>Uploaded: {videoFile.name}</p>}
          </div>
        </div>
      </div>

      <button className="flex self-end mr-16 bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600">Submit Test</button>
    </div>
  );
};

export default QuizApp;

