import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="w-full h-[70px] bg-[darkslategrey]">
        <div className="flex justify-between items-center px-8 py-3">
        <Link to="/"><h1 className="text-[white] font-bold text-2xl">QuizApp</h1></Link>
        </div>
      </header>
    );
};

export default Navbar;