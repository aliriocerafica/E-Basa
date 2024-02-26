"use client";
import "../../css/quiz.css"; // Corrected import statement
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Question {
  id: number;
  question_text: string;
  options: string[];
  correct_option_index: number;
}

interface Result {
  exam_name: string;
  score: number;
  date_taken: string;
}

const HugisPage = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [totalScore, setTotalScore] = useState<number>(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:8000/hugis/');
        if (response.ok) {
          const data = await response.json();
          setQuestions(data);
        } else {
          throw new Error('Failed to fetch questions');
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionChange = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    updateScore(optionIndex);
    handleNextQuestion(); // Automatically proceed to the next question
  };

  const updateScore = (optionIndex: number) => {
    if (optionIndex === questions[currentQuestionIndex].correct_option_index) {
      setTotalScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setTimeout(() => { // Delay to allow state updates before proceeding
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null); // Reset selected option for the next question
      } else {
        sendResult(); // Submit result when all questions are answered
      }
    }, 500); // Adjust delay as needed
  };

  const sendResult = async () => {
    const user_id = localStorage.getItem('user_id');
    const access_token = localStorage.getItem('access_token');

    if (user_id && access_token) {
      const date_taken = new Date().toISOString();
      const result: Result = {
        exam_name: 'Hugis',
        score: totalScore,
        date_taken: date_taken
      };

      try {
        const response = await fetch(`http://localhost:8000/users/${user_id}/pretest`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
          },
          body: JSON.stringify(result)
        });
        if (response.ok) {
          console.log('Pre-test result added successfully');
          router.push('/user/mga-paksa');
        } else {
          throw new Error('Failed to add posttest result');
        }
      } catch (error) {
        console.error('Error adding posttest result:', error);
      }
    } else {
      console.error('User ID or access token not found');
    }
  };

  return (
    <div className="page-container justify-center flex flex-wrap">
    <div className="">
      {questions.length > 0 && (
        <div className="w-[1400px] h-[700px] p-2 bg-[#20683C] border-8 border-[#BF977B] rounded-lg">
          <h2 className=" text-center font-semibold mb-2 text-[40px] text-[#FF8484]">Panuto {currentQuestionIndex + 1}</h2>
          <p className="text-[40px] text-white text-center">{questions[currentQuestionIndex].question_text}</p>

          <ul className="Choice gap-8 flex flex-wrap justify-center items-center text-white text-shadow-md text-[45px]">
            {questions[currentQuestionIndex].options.map((option, optionIndex) => (
              <li 
                key={optionIndex} 
                className={`choice-${optionIndex} shadow-md mt-20 rounded-lg flex items-center justify-center text-center mb-4 hover:bg-blue-500 hover:text-white`} 
                onClick={() => handleOptionChange(optionIndex)}
                style={{ backgroundColor: optionIndex === 0 ? '#FFD700' :
                        optionIndex === 1 ? '#FF0000' :
                        optionIndex === 2 ? '#0000FF' :
                        optionIndex === 3 ? '#008000' : ''
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default HugisPage;
