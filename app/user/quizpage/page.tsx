'use clients'
import React from 'react'
import QuizPage1 from "../components/QuizPage1";
import QuizPage2 from "../components/QuizPage2";
import "../css/quiz.css"; // Corrected import statement
const page = () => {
  return (
  
    <div className='page-container'>
      
        <QuizPage2 />
        </div>
  )
}

export default page