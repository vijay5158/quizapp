import React, { useState } from 'react';
import AxiosInstance from '../AxiosInstance';

function AddQuiz() {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([{ text: '', options: ['', '', '', ''], correctOption: 0 }]);

  const handleAddQuestion = () => {
    if (quizTitle ===""){
      alert("Please fill quiz title!");
      return;
    }
    const lastQuestion = questions[questions.length - 1];

    if (quizTitle.trim() === '' || lastQuestion.text.trim() === '' || lastQuestion.options.some(option => option.trim() === '')) {
      alert("Please fill question data!");
      return;
    }
    setQuestions([...questions, { text: '', options: ['', '', '', ''], correctOption: 0 }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectOptionChange = (questionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].correctOption = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async () => {
try {
  const newQuiz = {
    title: quizTitle,
    questions: questions.map((q) => ({
      text: q.text,
      options: q.options,
      correctOption: q.correctOption,
    })),
  };
  const response = await AxiosInstance.post('quizzes', newQuiz);
  alert("New Quiz Added.");
  setQuestions([{ text: '', options: ['', '', '', ''], correctOption: 0 }]);
  setQuizTitle("");
} catch (error) {
  alert("Error , Try again.")
}
  
  };

  return (
    <div className='w-[99%] px-2 py-8 sm:w-[60%] m-auto'>
      <h1 className="mb-8 sm:text-4xl text-2xl text-[darkslategrey] font-semibold w-full text-center">Add Quiz</h1>
      <input
        type="text"
        placeholder="Quiz Title"
        className="w-full px-4 py-2 mb-4 border rounded-[2rem] outline-none focus:border-[darkslategrey]"
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
      />

      {questions.map((question, index) => (
        <div key={index} className="bg-white p-4 mb-4 rounded-[2rem] shadow border border-[darkslategrey]">
          <h2 className="text-xl font-semibold mb-2">Question {index + 1}</h2>
          <input
            type="text"
            placeholder="Question Text"
            className="w-full px-4 py-2 mb-4 border rounded-[2rem] outline-none focus:border-[darkslategrey]"
            value={question.text}
            onChange={(e) => handleQuestionChange(index, 'text', e.target.value)}
          />
          <hr className='mb-4'/>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="mb-2 flex gap-2">
              <label className="flex items-center text-sm">
                <input
                  type="radio"
                  checked={question.correctOption === optionIndex}
                  onChange={() => handleCorrectOptionChange(index, optionIndex)}
                  className="mr-2"
                />
                {/* Correct Option */}
              </label>

              <input
                type="text"
                placeholder={`Option ${optionIndex + 1}`}
                className="w-full px-4 py-2 mb-4 border rounded-[2rem] outline-none focus:border-[darkslategrey]"
                value={option}
                onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
              />

            </div>
          ))}
        </div>
      ))}

      <button onClick={handleAddQuestion} className="mr-2 ease-in duration-300 px-4 py-2 rounded-2xl bg-blue-400 border-0 outline-none hover:bg-blue-500 hover:shadow-lg text-lg text-[white] hover:text-white">
        Add Question
      </button>
      <button onClick={handleSubmit} className="ease-in duration-300 px-4 py-2 rounded-2xl bg-[darkslategrey] border-0 outline-none hover:bg-[#1f3434] hover:shadow-lg text-lg text-[white] hover:text-white">
        Submit Quiz
      </button>
    </div>
  );
}

export default AddQuiz;
