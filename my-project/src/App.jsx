// App.jsx
import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';

export default function App() {
  return (
    <>
      <div className="w-screen overflow-x-hidden bg-white">
      <div className="flex h-full p-5 w-full">
        {/* Sidebar */}
        <div className="flex flex-col h-full lg:w-[20%]">
          <h1 className="text-black w-[15%] text-lg absolute top-1 left-1 p-3 content-center font-bold bg-white rounded-lg shadow-lg">
            Kartik Gupta
          </h1>
        </div>
      <div className="flex flex-col lg:w-[80%] w-full mx-4">  
        <Navbar />
        <Hero />
        
        </div>
      </div>
    </div>
    </>
  );
}
