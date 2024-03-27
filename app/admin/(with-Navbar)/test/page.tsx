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
  const questionsPerPage = 10;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8000/question/pretest/");
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
      const response = await fetch("http://localhost:8000/question/pretest/{question_id}", {
        method: "PUT",
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
    <div className="" style={{ display: "flex", justifyContent: "center" }}>
      <div className="container" style={{ width: "80%" }}>
        <div className=" bg-white rounded-md mt-10 mb-10 font-bold">
          <h1>Pre test</h1>
        </div>
        <div className="pull-left bg-white rounded-md mt-10 mb-10 font-bold">
          <label>Category:</label>
          <span>{questions.length > 0 ? questions[0].category : ""}</span>
        </div>
        {currentQuestions.map((question, index) => (
          <div key={question.id} style={{ padding: "10px", marginBottom: "20px" }} className="rounded-lg bg-white">
            <h2 className="text-orange-500 font-bold">Question {index + 1}</h2>
            {(question.question_text || question.question_image) && (
              <>
                {question.question_text && (
                  <input type="text" value={question.question_text} onChange={(e) => handleQuestionTextChange(e, index)} style={{ width: "50%" }}/>
                )}
                {question.question_image && (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={question.question_image} alt={`Question ${index + 1} Image`} style={{ maxWidth: "300px", maxHeight: "300px", marginBottom: "10px" }} />
                  </div>
                )}
              </>
            )}
            <div style={{ display: "flex", flexWrap: "wrap" }} >
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} style={{ width: "17%", marginRight: "10px", marginLeft: "10px"}} >
                  <div className="rounded-md mt-5" style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", backgroundColor: optionIndex === 0 ? "#62FF12" : "white", color: "black", }}>
                    <div style={{ backgroundColor: optionIndex === 0 ? "#62FF12" : "white" }}>
                      <input type="text" value={option} style={{backgroundColor: "transparent", width: "100%", color: "black" }} onChange={(e) => handleOptionTextChange(e, index, optionIndex)} />
                    </div>
                    {question.option_images[optionIndex] && (
                      <div>
                        <img src={question.option_images[optionIndex]} alt={`Option ${optionIndex + 1} Image`} style={{ maxWidth: "100%", height: "auto" }} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <button disabled={currentPage === 1} onClick={() => setCurrentPage((prevPage) => prevPage - 1)}>Previous</button>
          <span style={{ margin: "0 10px" }}>{`Page ${currentPage} of ${totalPages}`}</span>
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>Next</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={saveChanges}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Test;
