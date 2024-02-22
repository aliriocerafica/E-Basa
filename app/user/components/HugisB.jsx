'use client'
import React from 'react'
import "../css/quiz.css"; // Corrected import statement
const handleChoiceClick = (choice) => {
  console.log("Clicked on:", choice);
};

const QuizPage2 = () => {
  return (
    <div className="page-container flex flex-wrap">
    <div>
  <button className=" text-white font-bold py-2 px-4 rounded responsive ">
    <img src="/back2.png" alt="Image Alt Text" className="h-[260px]  w-[80px] inline mr-6" />

  </button>
  
</div>

  <div className="w-[1400px] h-[700px] p-2 bg-[#20683C] border-8 border-[#BF977B] rounded-lg">
  <div className="Q-card mt-[80px] text-center">
      <h1 className="tittle text-[40px] text-white">
      <h1 className="tittle text-[40px] text-[#FF8484]">
      Panuto: {" "}
      </h1>
      Piliin sa mga kahon sa ibaba ang hugis Bilog.{" "}
      </h1>
      <p className="Question text-[25px] text-white">
        {" "}
        
      </p>
    </div>
    <div className="Q-card h-20 items-center mb-[50px] flex justify-center ">
     
    </div>

    <div className="Choice gap-8 flex flex-wrap justify-center items-center text-white text-shadow-md text-[45px]">
      <button
        className="choice-1 shadow-md bg-[#798BFF] h-[240px] w-[240px]  rounded-lg  flex items-center justify-center text-center mb-4 hover:bg-blue-500 hover:text-white"
        onClick={() => handleChoiceClick("Pagong")}
      > <img
      src="/hugis5.png"
      alt="Image Alt Text"
      className="h-[190px] w-[160px] "
    />
      
      </button>
      <button
        className="choice-2 shadow-md bg-[#49F6FF] rounded-lg h-[240px] w-[240px]  flex items-center justify-center text-center mb-4 hover:bg-blue-500 hover:text-white"
        onClick={() => handleChoiceClick("Kalapati")}
      >
        <img
      src="/hugis6.png"
      alt="Image Alt Text"
      className="h-[190px] w-[160px] "
    />
      </button>
      <button
        className="choice-3 shadow-md bg-[#35F27F] rounded-lg h-[240px] w-[240px] flex items-center justify-center text-center mb-4 hover:bg-blue-500 hover:text-white"
        onClick={() => handleChoiceClick("Ibon")}
      >
        <img
      src="/hugis7.png"
      alt="Image Alt Text"
      className="h-[190px] w-[160px] "
    />
      </button>
      <button
        className="choice-4 shadow-md bg-[#0CB0FA] rounded-lg h-[240px] w-[240px]  flex items-center justify-center text-center mb-4 hover:bg-blue-500 hover:text-white"
        onClick={() => handleChoiceClick("Koneho")}
      >
         <img
      src="/hugis4.png"
      alt="Image Alt Text"
      className="h-[170px] w-[160px] "
    />
      </button>
    </div>
  </div>
  <button className=" text-white font-bold py-2 px-4 rounded responsive ">
    <img src="/next2.png" alt="Image Alt Text" className="h-[250px] w-[80px] inline ml-6" />

  </button>
</div>
  )
}

export default QuizPage2