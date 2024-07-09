import { useState } from "react"
import React from 'react'
import {Link,NavLink} from "react-router-dom"
import ReferralForm from '../ReferralForm';
const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
 
 
    <>
    <div className="relative bg-white text-blue">
    <div className='flex justify-between  min-h-3.5 mt-6 sm:min-h-1'>
      <div className='flex items-center justify-center bg-gray-400 rounded-3xl  w-2/4 mx-96 p-2 sm:{w-1/4 mx-28}'>
        <div className='flex items-center justify-evenly '>
          <a href="/" className="hover:text-blue-300 px-20 sm:px-1/2">Refer</a>
          <a href="Section" className="hover:text-blue-300 px-20  sm:px-1/2">Benefits</a>
          <a href="FAQ's" className="hover:text-blue-300 px-20 sm:px-1/2">FAQ's</a>
          <a href="#Footer" className="hover:text-blue-300 px-20  sm:px-1/2">Support</a>
        </div>
      </div>
    </div>
    <div className="container mx-auto flex flex-col items-center justify-center text-center py-20 overflow-hidden">
        <div className="relative w-full max-w-lg bg-white text-blue-600 p-8 rounded-lg shadow-lg mt-4">
          <img src="https://cdn.pixabay.com/photo/2019/11/14/08/44/magnet-4625650_1280.png" alt="Hero" className="w-52 h-52 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Refer and Earn</h1>
          <p className="mt-4 text-xl">Share the love and earn rewards by referring friends and family!</p>
          <button className="mt-8 px-8 py-2 bg-blue-600 text-white font-semibold rounded"  onClick={() => setIsFormOpen(true)}>Refer Now</button>
          {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto relative">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <ReferralForm />
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
    </>    
  );
  }

export default Hero;