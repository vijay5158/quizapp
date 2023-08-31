import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = ({data}) => {
    return (
        <div className='mt-4 flex items-center justify-between w-full px-4 py-8 h-[100px] rounded-[2rem] border-2 border-[darkslategrey]'>
            <h5 className="text-lg text-[darkslategrey] font-semibold">
                {data?.title}
            </h5>
            <Link to={`/${data?.id}`} className='text-decoration-none ease-in duration-300 px-4 py-2 rounded-2xl bg-[darkslategrey] border-0 outline-none hover:bg-[#1f3434] hover:shadow-lg text-lg text-[white] hover:text-white'>Start</Link>
        </div>
    );
};

export default QuizCard;