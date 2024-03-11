'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../css/quiz.css";

interface Question {
  id: number;
  category: string;
  question_text: string;
  question_image: string;
  options: string[];
  option_images: string[];
  correct_option_index: number;
}

const Kulay = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  // Define state variables for category scores
  const [categoryScores, setCategoryScores] = useState<{ [key: string]: number }>({
    hugis: 0,
    kulay: 0,
    numero: 0,
    ponolohiya: 0,
    talasalitaan: 0,
    WG: 0,
    PN: 0,
    PB: 0,
  });

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8000/pretest/");
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
    const correctOptionIndex = questions[currentQuestionIndex].correct_option_index;
    const category = questions[currentQuestionIndex].category;

    // Check if the selected option is correct
    if (optionIndex === correctOptionIndex) {
      console.log("Correct Answer!");
      console.log("The correct answer is:", questions[currentQuestionIndex].options[correctOptionIndex]);

      // Update the corresponding category score
      setCategoryScores(prevScores => ({
        ...prevScores,
        [category]: prevScores[category] + 1,
      }));
    } else {
      console.log("Wrong Answer!");
      console.log("The correct answer is:", questions[currentQuestionIndex].options[correctOptionIndex]);
    }

    // Trigger fade out animation
    setFadeOut(true);
    setTimeout(() => {
      handleNextQuestion();
    }, 500); // Wait for animation to complete
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
      const resultNames = Object.keys(categoryScores);
      const results = resultNames.map((exam_name) => ({
        exam_name,
        score: categoryScores[exam_name],
        date_taken,
      }));

      try {
        for (const result of results) {
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
          if (!response.ok) {
            throw new Error("Failed to add pretest result");
          }
        }

        console.log(
          "Category Scores:",
          results
            .map((result) => `${result.exam_name}: ${result.score}`)
            .join(", ")
        );
        console.log("Pre-test results added successfully");
        router.push("/user/pre-test-result");
      } catch (error) {
        console.error("Error adding pretest result:", error);
      }
    } else {
      console.error("User ID or access token not found");
    }
  };

  return (
    <div className="page-container flex flex-wrap">
      <div className="">
        <div className="">
          <h2 className="text-center text-[60px] text-white">
            {currentQuestionIndex + 1} / 80
          </h2>
        </div>
        {questions.length > 0 && (
          <div className="w-[1400px] h-[700px] p-2 bg-[#20683C] border-8 border-[#BF977B] rounded-lg">
            <p className="text-[30px] text-white  mt-4 mb-4 text-center font-normal">
              Tanong: {questions[currentQuestionIndex].question_text}
            </p>
            {questions[currentQuestionIndex].question_image && (
              <div className="image1 flex justify-center items-center">
                <img
                  src={questions[currentQuestionIndex].question_image}
                  className="option-image breath-animation"
                  height={200}
                  width={200}
                />
              </div>
            )}
            <ul className="Choice gap-8 flex flex-wrap justify-center items-center text-white text-shadow-md text-[45px]">
              {questions[currentQuestionIndex].options.map(
                (optionText, optionIndex) => (
                  <li
                    key={optionIndex}
                    className={`choice-box shadow-md mt-10 h-[240px] w-[240px] text-white rounded-lg font-normal mb-4 ${
                      selectedOption === optionIndex ? "selected" : ""
                    } ${
                      fadeOut ? "fade-out" : ""
                    } `}
                    onClick={() => handleOptionClick(optionIndex)}
                    style={{
                      backgroundColor:
                        optionIndex === 0
                          ? "#798BFF"
                          : optionIndex === 1
                          ? "#27939D"
                          : optionIndex === 2
                          ? "#35F27F"
                          : optionIndex === 3
                          ? "#37C1FF"
                          : "",
                      transitionDuration:
                        selectedOption === optionIndex ? "0.6s" : "0.6s", // Adjust transition duration
                      transform:
                        selectedOption === optionIndex
                          ? "rotateY(20deg)"
                          : "none", // Apply 3D rotation when selected
                      perspective: "1000px", // Adjust perspective for better 3D effect
                    }}
                  >
                    {questions[currentQuestionIndex].option_images[
                      optionIndex
                    ] !== "" && (
                      <img
                        src={
                          questions[currentQuestionIndex].option_images[
                            optionIndex
                          ]
                        }
                        className="option-image object-center"
                        height={150}
                        width={150}
                        style={{ display: "block", margin: "0 auto" }}
                      />
                    )}
                    <div
                      className="text-[white] text-center"
                      style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                    >
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

export default Kulay
