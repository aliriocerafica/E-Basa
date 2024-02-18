"use client";
import React from "react";
import UserNav from "../components/UserNav";
import "../css/userpage.css"; // Corrected import statement

const Page = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url('/userloginbg.png')` }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        {/* Logo */}
        <div className="logo">
          <img src="/userlogo.png" alt="Logo" className="w-[702px] h-[260px]" />
        </div>
        
        {/* Button with image */}
        <button className="button-container ">
          <img src="/buttonmaglaro.png" alt="Button Image" className="button-image h-[90px] mt-[60px]" />
        </button>
      </div>
    </div>
  );
};

export default Page;
