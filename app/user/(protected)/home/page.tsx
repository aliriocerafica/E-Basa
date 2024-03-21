"use client";
import React from "react";
import UserNav from "../../components/UserNav";
import "../../css/userpage.css";
import SideNav from "../../components/SideNav";

export default function Home() {
  return (
    <div className="page-container">
      <UserNav />
      <SideNav />
      <div className="prev mr-20">
        <img src="/prev.png" alt="Previous" />
      </div>
      <div className="section1 place-self-center bg-white shadow-md rounded-lg">
        <div className="headerimg bg-[#13DFFE] h-[300px] w-[400px] mb-10 rounded-lg">
          <img src="/aral.png" alt="Header 1" />
        </div>
        <div className="section-content">
          <h2 className="section-header font-bold text-center text-[30px] rounded-[5px] text-black mb-2 p-1">
            ARALIN 1
          </h2>
          <div className="text-center mt-[100px] ">
            <button className="text-white w-full text-[20px]  bg-[#13DFFE] p-2 rounded-lg mx-auto shadow-md hover:bg-[#58e9ff] hover:text-black">
             SIMULAN
            </button>
          </div>
        </div>
      </div>
      <div className="section2 bg-white ml-10 shadow-md rounded-lg">
        <div className="headerimg bg-[#13DFFE] h-[300px] w-[400px] mb-10 rounded-lg">
          <img src="/Gawa.png" alt="Header 2" />
        </div>
        <div className="section-content">
          <h2 className="section-header  font-bold text-center text-[30px] rounded-[5px] text-black mb-2 p-1">
            GAWAIN 1
          </h2>
          <div className="text-center  mt-[100px] ">
            <button className="text-white w-full text-[20px] bg-[#13DFFE] p-2 rounded-lg mx-auto shadow-md hover:bg-[#58e9ff] hover:text-black">
              SAGUTAN
            </button>
          </div>
        </div>
      </div>
      <div className="next ml-20">
        <img src="/next.png" alt="Next" />
      </div>
    </div>
  );
}
