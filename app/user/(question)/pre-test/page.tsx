"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../css/quiz.css";

interface Question {
  id: number;
  question_text: string;
  question_image: string;
  options: string[];
  option_images: string[];
  correct_option_index: number;
}

const PreTest = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8000/pretest/");
        if (response.ok) {
          const data = await response.json();
          console.log("Correct option index:", data.correct_option_index);
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
    const correctOptionIndex = questions[currentQuestionIndex].correct_option_index;

    console.log("Option index:", optionIndex);
    console.log("Correct option index:", correctOptionIndex);

    // Log the user's selected answer
     console.log("Your answer:", questions[currentQuestionIndex].options[optionIndex]);
  
    // Check if the selected option is correct
    if (optionIndex === correctOptionIndex) {
      console.log("Correct Answer!");
      console.log("The correct answer is:", questions[currentQuestionIndex].options[correctOptionIndex]);
      updateScore(optionIndex);
    } else {
      console.log("Wrong Answer!");
      console.log("The correct answer is:", questions[currentQuestionIndex].options[correctOptionIndex]);
    }
  
    // Trigger fade out animation
    setFadeOut(true);
    setTimeout(() => {
      handleNextQuestion();
    }, 500); // Wait for animation to complete
  }

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
      console.log("Total Score", totalScore);
      const result = {
        exam_name: "Kulay",
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
          router.push("/user/mag-simula");
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
            <p className="text-[40px] text-white text-center ">
              {questions[currentQuestionIndex].question_text}
            </p>
            {questions[currentQuestionIndex].question_image && (
              <div className="image1 flex justify-center items-center">
                <img
                  src={questions[currentQuestionIndex].question_image}
                  className="option-image"
                  height={200}
                  width={200}
                />
              </div>
            )}
            <ul className="Choice gap-8 flex flex-wrap justify-center items-center text-white text-shadow-md text-[45px] ">
              {questions[currentQuestionIndex].options.map(
                (optionText, optionIndex) => (
                  <li
                    key={optionIndex}
                    className={`choice-${optionIndex} shadow-md mt-10 h-[240px] w-[240px] rounded-lg  mb-4 ${
                      selectedOption === optionIndex ? "selected " : ""
                    } ${fadeOut ? "fade-out" : ""}`}
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
                      transitionDuration:
                        selectedOption === optionIndex ? "0.6s" : "2.6s", // Adjust transition duration
                    }}
                  >
                    <img
                      src={
                        questions[currentQuestionIndex].option_images[
                          optionIndex
                        ]
                      }
                      alt={`Option ${optionIndex}`}
                      className="option-image flex justify-center items-center"
                      height={170}
                      width={170}
                      style={{ display: "block", margin: "0 auto" }}
                    />
                    <div className="text-[#000000] text-center ">
                      <p>{optionText}</p>
                    </div>
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

export default PreTest;