"use client";
import { useEffect, useState } from 'react';

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
  };

  const updateScore = (optionIndex: number) => {
    if (optionIndex === questions[currentQuestionIndex].correct_option_index) {
      setTotalScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-black">Quiz</h1>
      {questions.length > 0 && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-black">Question {currentQuestionIndex + 1}</h2>
          <p className="mb-4 text-black">{questions[currentQuestionIndex].question_text}</p>
          <ul className="mb-4">
            {questions[currentQuestionIndex].options.map((option, optionIndex) => (
              <li key={optionIndex} className="text-black">
                <input
                  type="radio"
                  id={`option${optionIndex}`}
                  name="options"
                  value={optionIndex}
                  checked={selectedOption === optionIndex}
                  onChange={() => handleOptionChange(optionIndex)}
                />
                <label htmlFor={`option${optionIndex}`} className="ml-2">{option}</label>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mb-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
              onClick={() => {
                if (currentQuestionIndex === questions.length - 1 && selectedOption !== null) {
                  sendResult();
                } else {
                  handleNextQuestion();
                }
              }}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
            <p className="text-black">Total Score: {totalScore}/{questions.length}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HugisPage;