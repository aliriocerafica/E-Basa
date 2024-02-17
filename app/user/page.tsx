"use client";
import React from "react";
import UserNav from "./components/UserNav";

export default function Home() {
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
        <div className="max-w-md mx-auto dark:bg-transparent bg-opacity-25 rounded-lg p-8">
          <div className="">
            <form action="">
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Numero ng ID"
                  className="w-96 h-[46px] px-3 font-bold text-[20px] py-2 placeholder-black rounded-full focus:outline-none focus:ring
                  
                    dark:placeholder-black dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2"></div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 text-[20px]  placeholder-black h-[46px]
                   rounded-full focus:outline-none focus:ring
                   
                     dark:bg-gray-700 dark:text-white
                      dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6 font-sans ">
                <button
                  type="button"
                  className="w-full text-[26px] italic font-inter px-2 py-2 text-white bg-[#00DAFF] rounded-full focus:bg-[#67E9FF] focus:outline-none shadow-md"


                >
                  MAG LOG IN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
