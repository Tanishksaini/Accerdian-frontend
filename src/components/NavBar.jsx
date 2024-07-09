import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-blue-400 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">accerdian</div>
        <div className="hidden md:flex space-x-4">
          <a href="#how-it-works" className="hover:text-blue-200 p-2">Refer & Earn</a>
          <a href="#rewards" className="hover:text-blue-200 p-2">Resources</a>
          <a href="#start-sharing" className="hover:text-blue-200 p-2">About Us</a>
          <div className="hidden md:flex space-x-2">
        <button className="bg-gray-300 px-4 py-2 text-black rounded hover:bg-gray-100">Login</button>
          <button className="bg-blue-600 px-4 py-2  text-white rounded hover:bg-blue-400">Try for free</button>
        </div>
        </div>
       
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <a href="#how-it-works" className="block py-2">Refer & Earn</a>
          <a href="#rewards" className="block py-2">Resources</a>
          <a href="#start-sharing" className="block py-2">AboutUs</a>
          <button className="block w-full bg-white text-blue-600 px-4 py-2 mt-2 rounded hover:bg-gray-100">Login</button>
          <button className="block w-full bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-yellow-600">Try for free</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
