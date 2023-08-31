import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QuizCard from '../components/QuizCard';
import AxiosInstance from '../AxiosInstance';

const Home = () => {
    const [quizes, setQuizes] = useState([]);

    useEffect(()=>{
        getQuestions();
    },[]);
    const getQuestions = async ()=>{
        try {
            const response = await AxiosInstance.get('all-quizzes');
            const data = response.data;
            setQuizes(data);
        } catch (error) {
            
        }
    }
    return (
        <div className='w-[99%] px-2 py-8 sm:w-[60%] m-auto'>
            <h2 className="mb-8 sm:text-4xl text-2xl text-[darkslategrey] font-semibold w-full text-center">
                Choose from listed Quizes
            </h2>
            {quizes.map((quiz, index)=> <QuizCard key={index} data={quiz} />)}
        </div>
    );
};

export default Home;