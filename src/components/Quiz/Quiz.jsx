import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AxiosInstance from '../../AxiosInstance';

const Quiz = () => {
    const {id} = useParams();

    const [quiz, setQuiz] = useState(null);
    const [score, setScore] = useState(null);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  
    const handleNext = () => {
        if (answers[currentQuestionIndex]!==0 && !answers[currentQuestionIndex]){
            alert("Please answer the question.")
        }
        else{
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
    };
  
    const handlePrev = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };
  
    const handleOptionSelect = (optionIndex) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex] = optionIndex;
      setAnswers(newAnswers);
    };
  
    const handleSubmit = async () => {
        try {
            setLoading(true);
            const response = await AxiosInstance.post(`quizzes/${id}/submit`, {
                answers: answers
            })
            const data = response.data
            setScore(data?.score);
            setCurrentQuestionIndex(0)
            setAnswers(Array(questions.length).fill(null));
        } catch (error) {
            alert("Error occured, Try again!")
        }
        finally{
            setLoading(false);

        }
    };
    useEffect(()=>{
        getQuiz();
    },[]);
    const getQuiz = async ()=>{
        try {
            const response = await AxiosInstance.get(`quizzes/${id}`);
            const data = response.data;
            setQuiz(data);
            setQuestions(data?.questions);
        } catch (error) {
            
        }
    }
    return (
        <div className='text-center w-[99%] px-2 py-8 sm:w-[60%] m-auto'>
        <h2 className="mb-8 sm:text-4xl text-2xl text-[darkslategrey] font-semibold w-full text-center">
            {quiz?.title || "Loading..."}
        </h2>
        {score &&
        <button
        onClick={()=> setScore(null)}
          className='ease-in mb-4 duration-300 px-4 py-2 rounded-2xl bg-[darkslategrey] border-0 outline-none hover:bg-[#1f3434] hover:shadow-lg text-lg text-[white] hover:text-white'
        >
            Reset
        </button>
}
        <div className="flex flex-col justify-start items-start gap-[1rem] border-2 border-[darkslategrey] rounded-[2rem] px-2 py-4">
         {score ?
         <>
        <h1 className="w-full text-center text-xl font-semibold text-[darkslategrey]">
            Score: {score}
        </h1>
        </>
        : 
        
         <>
                <h3 className="text-lg text-start w-full px-4 font-semibold text-[black]">
                    {questions[currentQuestionIndex]?.text || "Loading..."}
                </h3>
                <hr />
      <ul className="space-y-2 px-4 w-full">
        {questions[currentQuestionIndex]?.options?.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={`p-2 w-full cursor-pointer rounded ${
              answers[currentQuestionIndex] === index ? 'bg-[darkslategrey] text-white' : 'bg-[rgba(0,0,0,0.1)] text-[darkslategrey]'
            }`}
          >
            {option}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex space-x-2 px-4 justify-between">
        {currentQuestionIndex !== 0 &&
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          className='ease-in duration-300 px-4 py-2 rounded-2xl bg-gray-400 border-0 outline-none hover:bg-gray-500 hover:shadow-lg text-lg text-[white] hover:text-white'
        >
          Prev
        </button>
}
        {!(currentQuestionIndex === questions.length - 1 || answers[currentQuestionIndex] === null) &&
        <button
          onClick={handleNext}
          disabled={answers[currentQuestionIndex] === null}
          className='ease-in duration-300 px-4 py-2 rounded-2xl bg-[darkslategrey] border-0 outline-none hover:bg-[#1f3434] hover:shadow-lg text-lg text-[white] hover:text-white'
        >
          Next
        </button>
}
        {currentQuestionIndex === questions.length - 1 && (
          <button
            onClick={handleSubmit}
            disabled={answers.includes(null) || loading}
            className={` ${
              answers.includes(null) || loading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'ease-in duration-300 px-4 py-2 rounded-2xl bg-[darkslategrey] border-0 outline-none hover:bg-[#1f3434] hover:shadow-lg text-lg text-[white] hover:text-white'
            }`}
          >
            Submit
          </button>
        )}
      </div>
      </>
}
        </div>
        </div>
    );
};

export default Quiz;