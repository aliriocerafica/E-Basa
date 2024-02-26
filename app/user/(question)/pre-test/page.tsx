'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../css/quiz.css"; // Corrected import statement

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
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8000/hugis/");
        if (response.ok) {
          const data = await response.json();
          setQuestions(data);
        } else {
          throw new Error("Failed to fetch questions");
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionClick = (optionIndex: number) => {
    // Toggle selection of the option
    if (selectedOption === optionIndex) {
      submitOption(optionIndex);
    } else {
      setSelectedOption(optionIndex);
    }
  };

  const submitOption = (optionIndex: number) => {
    updateScore(optionIndex);
    setFadeOut(true); // Trigger fade out animation
    setTimeout(() => {
      handleNextQuestion();
    }, 500); // Wait for animation to complete
  };

  const updateScore = (optionIndex: number) => {
    if (optionIndex === questions[currentQuestionIndex].correct_option_index) {
      setTotalScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(null);
      setFadeOut(false); // Reset fade out state
    } else {
      sendResult();
    }
  };

  const sendResult = async () => {
    const user_id = localStorage.getItem("user_id");
    const access_token = localStorage.getItem("access_token");

    if (user_id && access_token) {
      const date_taken = new Date().toISOString();
      const result: Result = {
        exam_name: "Hugis",
        score: totalScore,
        date_taken: date_taken,
      };

      try {
        const response = await fetch(
          `http://localhost:8000/users/${user_id}/pretest`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
            body: JSON.stringify(result),
          }
        );
        if (response.ok) {
          console.log("Pre-test result added successfully");
          router.push("/user/mga-paksa");
        } else {
          throw new Error("Failed to add posttest result");
        }
      } catch (error) {
        console.error("Error adding posttest result:", error);
      }
    } else {
      console.error("User ID or access token not found");
    }
  };

  return (
    <div className="page-container flex flex-wrap">
      <div className="">
        {questions.length > 0 && (
          <div className="w-[1400px] h-[700px] p-2 bg-[#20683C] border-8 border-[#BF977B] rounded-lg">
            <h2 className="text-center font-semibold mb-2 text-[40px] text-[#FF8484]">
              Panuto {currentQuestionIndex + 1}
            </h2>
            <p className="text-[40px] text-white text-center">
              {questions[currentQuestionIndex].question_text}
            </p>

            <ul className="Choice gap-8 flex flex-wrap justify-center items-center text-white text-shadow-md text-[45px] ">
              {questions[currentQuestionIndex].options.map(
                (option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className={`choice-${optionIndex} shadow-md mt-20 h-[240px] w-[240px] rounded-lg flex items-center justify-center text-center mb-4 ${selectedOption === optionIndex ? 'selected ' : ''} ${fadeOut ? 'fade-out' : ''}`}
                    onClick={() => handleOptionClick(optionIndex)}
                    style={{
                      backgroundColor:
                        optionIndex === 0
                          ? "#798BFF"
                          : optionIndex === 1
                          ? "#FFFFFF"
                          : optionIndex === 2
                          ? "#35F27F"
                          : optionIndex === 3
                          ? "#37C1FF"
                          : "",
                      transitionDuration: selectedOption === optionIndex ? '0.6s' : '2.6s' // Adjust transition duration
                    }}
                  >
                    <img
                      src={option}
                      alt={`Option ${optionIndex}`}
                      className="option-image"
                      height={200}
                      width={200}
                    />
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HugisPage;

