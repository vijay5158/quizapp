import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
    return (
        <header className="w-full h-[70px] bg-[darkslategrey]">
        <div className="flex justify-between items-center px-8 py-3">
        <Link to="/"><h1 className="text-[white] font-bold text-2xl">QuizApp</h1></Link>
        <button 
        onClick={()=> navigate("/add-quiz")}
        className="ease-in duration-300 px-4 py-2 rounded-2xl bg-[white] border-0 outline-none hover:shadow-lg text-lg text-[darkslategrey] ">
          Add Quiz
        </button>
        </div>
      </header>
    );
};

export default Navbar;