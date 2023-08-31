import axios from 'axios';
import React, { useEffect, useState } from 'react';

const QuestionCard = ({data}) => {
  
    return (
        <>
            <div className="flex flex-col justify-start items-start gap-[1rem] border-2 border-[darkslategrey] rounded-[2rem] px-2 py-4">
                <h3 className="text-lg text-start w-full px-4 font-semibold text-[black]">
                    {data?.text}
                </h3>
                <hr />
                <div className="flex flex-col justify-center items-start px-4 gap-[0.5rem]">
                   {data?.options?.map((option, index)=>(
                     <div key={index} className="flex items-center justify-start gap-[5px]">
                        <input name='selected' onChange={(option)=>{setSelected(option?.id)}} type="radio" />
                       <label htmlFor='selected'> {option?.text}</label>
                     </div>
                   ))}
                </div>
                <div className="w-full text-start px-4">
                    <button onClick={handleSubmit} className='px-4 py-2 rounded-2xl bg-[darkslategrey] border-0 outline-none hover:shadow-md text-[white]'>Submit</button>
                </div>
            </div>
        </>
    );
};

export default QuestionCard
;