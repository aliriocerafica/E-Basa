'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Question {
  id: number;
  category: string;
  question_text: string;
  question_image: string;
  options: string[];
  option_images: string[];
  correct_option_index: number;
}

const Test = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const questionsPerPage = 20;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8000/pretest/question");
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

  const handleQuestionTextChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question_text = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleOptionTextChange = (e: React.ChangeEvent<HTMLInputElement>, questionIndex: number, optionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleOptionImageChange = (e: React.ChangeEvent<HTMLInputElement>, questionIndex: number, optionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].option_images[optionIndex] = e.target.value;
    setQuestions(updatedQuestions);
  };

  const saveChanges = async () => {
    try {
      const response = await fetch("http://localhost:8000/pretest/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(questions)
      });

      if (response.ok) {
        console.log("Questions updated successfully.");
        // Redirect or show a success message as needed
      } else {
        throw new Error("Failed to update questions.");
      }
    } catch (error) {
      console.error("Error updating questions:", error);
    }
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  // Get current page's questions
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = Math.min(startIndex + questionsPerPage, questions.length);
  const currentQuestions = questions.slice(startIndex, endIndex);

  return (
    <div className="page-container flex flex-wrap">
      <div className="">
        <div className="question-container">
          {currentQuestions.map((question, index) => (
            <div key={question.id} className="question">
              <input
                type="text"
                value={question.question_text}
                onChange={(e) => handleQuestionTextChange(e, index)}
              />
              {question.question_image && (
                <div className="image1 flex justify-center items-center">
                  <img
                    src={question.question_image}
                    className="question-image"
                    height={200}
                    width={200}
                    alt={`Question ${index + 1 + startIndex} Image`}
                  />
                </div>
              )}
              <ul className="answers-container horizontal-list">
                {question.options.map((optionText, optionIndex) => (
                  <li
                    key={optionIndex}
                    className="answer-box"
                  >
                    <input
                      type="text"
                      value={optionText}
                      onChange={(e) => handleOptionTextChange(e, index, optionIndex)}
                    />
                    <input
                      type="text"
                      value={question.option_images[optionIndex]}
                      onChange={(e) => handleOptionImageChange(e, index, optionIndex)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <button onClick={saveChanges}>Save Changes</button>
      </div>
    </div>
  );
};

export default Test;
