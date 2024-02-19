"use client";
import React from "react";
import "../../css/userpage.css"; // Corrected import statement

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
      </div>

      <div className="Card flex justify-center ">
        <div className="w-[1000px]  h-[400px] p-6 bg-[#41545B] border-4 r border-[#BF977B] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-[60px] font-bold tracking-tight text-white text-center dark:text-white">
              Unang Pag Susulit !
            </h5>
          </a>
          <p className="mb-3  text-[30px] text-center  text-white font-normal dark:text-gray-400">
            "Maligayang pag dating sa E-Basa munting Mag aaral ito ang iyong
            unang pagsusulit."
          </p>
          <div className="flex justify-center">
            <button className="button-container">
              <img
                src="/Magsimula.png"
                alt="Button Image"
                className="button-image h-[80px] mt-[40px] "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
