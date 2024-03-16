"use client";
import React from "react";
import "../css/name.css";

const Name = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Dashboard</h1>
      </header>
      <div className="DashDisplay mt-2 mb-2 ml-[200px] sha">
        <div class="grid grid-cols-4 gap-2 ">
          <div className="UserCount shadow-lg relative h-[250px] w-full rounded-[10px]  text-center flex items-start justify-start">
            <img
              src="/dash/1.png"
              alt="User Count"
              className="absolute top-0 left-0 w-[150px] h-[150px] object-cover rounded-[10px]  "
            />
            <div className="labels ">
              <h1>200</h1>
              
            </div>
          </div>

          <div className="Test  shadow-lg relative h-[250px] w-full rounded-[10px] text-center flex items-start justify-start">
            <img
              src="/dash/2.png"
              alt="Test"
              className="absolute top-0 left-0 w-[150px] h-[150px]  object-cover rounded-[10px]"
            />
       <div className="labels ">
              <h1>200</h1>
              
            </div>
          </div>

          <div className="Topics  shadow-lg relative h-[250px] w-full rounded-[10px] text-center flex items-start justify-start">
            <img
             src="/dash/3.png"
              alt="Topics"
              className="absolute top-0 left-0 w-[150px] h-[150px]  object-cover rounded-[10px]"
            />
         <div className="labels ">
              <h1>200</h1>
              
            </div>
          </div>

          <div className="Educators-Count  shadow-lg relative h-[250px] w-full rounded-[10px]  text-center flex items-start justify-start">
            <img
            src="/dash/4.png"
              alt="Educators Count"
              className="absolute top-0 left-0 w-[150px] h-[150px]  object-cover rounded-[10px]"
            /> 
            <div className="labels ">
            <h1>200</h1>
            
          </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
