'use client';
import React from 'react';
import "../css/name.css";

const Name = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Dashboard</h1>
      </header>
      <div className="flex flex-justify items-center name-list">
        {/* Box 1 */}
        <div className="box-wrapper">
          <div className="inline-block p-4 bg-white shadow-md rounded-lg box">
            <img src="/box1.png" alt="Image" className="w-full h-auto mb-4" />
          </div>
        </div>
        {/* Box 2 */}
        <div className="box-wrapper">
          <div className="inline-block p-4 bg-white shadow-md rounded-lg box">
            <img src="/box2.png" alt="Image" className="w-full h-auto mb-4" />
          </div>
        </div>
        {/* Box 3 */}
        <div className="box-wrapper">
          <div className="inline-block p-4 bg-white shadow-md rounded-lg box">
            <img src="/box3.png" alt="Image" className="w-full h-auto mb-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
