'use client'
import React from 'react'

import "../css/quiz.css"; // Corrected import statement
const handleChoiceClick = (choice) => {
  console.log("Clicked on:", choice);
};

const QuizPage2 = () => {
  return (
    <div className="page-container">
        <div>
      <button className=" text-white font-bold py-2 px-4 rounded responsive ">
        <img src="/back2.png" alt="Image Alt Text" className="h-[260px]  w-[80px] inline mr-6" />
    
      </button>
    </div>
      <div className="w-[1400px] h-[700px] p-6 bg-[#20683C] border-8 border-[#BF977B] rounded-lg">
        <div className="Q-card h-20 items-center mb-[190px] flex justify-center ">
          <img
            src="/story1.png"
            alt="Image Alt Text"
            className="h-[280px] w-[260px] mt-[150px]"
          />
        </div>

        <div className="Choice gap-8 flex flex-wrap justify-center items-center text-white text-shadow-md text-[45px]">
          <button
            className="choice-1 shadow-md bg-[#798BFF] h-[200px] rounded-lg w-[200px] flex items-center justify-center text-center mb-4 hover:bg-blue-500 hover:text-white"
            onClick={() => handleChoiceClick("Pagong")}
          >
            Pagong
          </button>
          <button
            className="choice-2 shadow-md bg-[#49F6FF] rounded-lg h-[200px] w-[200px] flex items-center justify-center text-center mb-4 hover:bg-blue-500 hover:text-white"
            onClick={() => handleChoiceClick("Kalapati")}
          >
            Kalapati
          </button>
          <button
            className="choice-3 shadow-md bg-[#35F27F] rounded-lg h-[200px] w-[200px] flex items-center justify-center text-center mb-4 hover:bg-blue-500 hover:text-white"
            onClick={() => handleChoiceClick("Ibon")}
          >
            Ibon
          </button>
          <button
            className="choice-4 shadow-md bg-[#0CB0FA] rounded-lg h-[200px] w-[200px] flex items-center justify-center text-center mb-4 hover:bg-blue-500 hover:text-white"
            onClick={() => handleChoiceClick("Koneho")}
          >
            Koneho
          </button>
        </div>

        <div className="Q-card mt-10 text-center h-[100px]">
          <h1 className="tittle text-[30px] text-white">
            Unang tanong para sa kwento ng Pagong at Kalapati.{" "}
          </h1>
          <p className="Question text-[25px] text-white">
            {" "}
            Sino ang pangunahing Bida sa kwento? Piliin sa mga kahon ang tamang
            sagot.
          </p>
        </div>
      </div>
      <button className=" text-white font-bold py-2 px-4 rounded responsive ">
        <img src="/next2.png" alt="Image Alt Text" className="h-[250px] w-[80px] inline ml-6" />
    
      </button>
    </div>
  )
}

export default QuizPage2