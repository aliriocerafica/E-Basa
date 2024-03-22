import { useState } from 'react';

// Define the PreTestQuestion type directly in the component
interface PreTestQuestion {
  id: string;
  questionText: string;
  options: string[];
  questionImage?: string; // Image URL is optional
}

interface Props {
  question: PreTestQuestion;
  onSave: (updatedQuestion: PreTestQuestion) => void;
}

const Question: React.FC<Props> = ({ question, onSave }) => {
  const [editedQuestion, setEditedQuestion] = useState<PreTestQuestion>(question);

  const handleSave = () => {
    onSave(editedQuestion);
  };

  return (
    <div className="border border-gray-200 p-4 rounded-md shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">{editedQuestion.questionText}</h2>
      {editedQuestion.questionImage && (
        <img src={editedQuestion.questionImage} alt="Question Image" className="mb-2" />
      )}
      <div className="flex flex-col space-y-2">
        {editedQuestion.options.map((option: string, index: number) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) =>
              setEditedQuestion((prev: PreTestQuestion) => ({
                ...prev,
                options: prev.options.map((o: string, i: number) => (i === index ? e.target.value : o)),
              }))
            }
            className="border border-gray-300 rounded-md p-2"
          />
        ))}
      </div>
      <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
        Save
      </button>
    </div>
  );
};

export default Question;
