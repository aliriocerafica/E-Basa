"use client"
import React, { useState } from "react";

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <nav className="bg-[#FFFFFF]  fixed z-20 top-0 left-0 h-[65px] right-0 mx-auto rounded-br-[20px] rounded-bl-[20px] shadow-md w-[70%]  font-sans">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          s
        >
          <img src="/logo4.png" className="h-18" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-gray-900 bg-[#A1E67D] rounded-br-[25px] shadow-md rounded-tr-[10px] rounded-tl-[10px]
        w-[100px] rounded-bl-[25px] mr-[24px] from-lime-200 via-lime-400 to-lime-500 
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium 
       text-sm px-5 py-2 text-center me-2 mb-2"
          >
            <img
              src="/rank.png"
              alt="Lime"
              className="w-full h-full object-cover"
            />
          </button>

          <a href="YOUR_BUTTON_URL_HERE">
            <img
              src="/Profile.png"
              className="h-18 mb-[4px]"
              alt="Get Started"
            />
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <input
            type="search"
            className="relative block min-w-0 flex-auto shadow-md border-none rounded-tl-[20px] rounded-bl-[20px]
      w-[420px] h-[40px]
      bg-[#CFF9FF] bg-clip-padding 
      px-3 py-[0.25rem] text-base font-normal
      leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] 
      focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none
       dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
          />

          <button
            className="relative z-[2] flex items-center px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white h-[42px]
      shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg rounded-br-[15px] rounded-tr-[15px] bg-[#18C7E1]
      focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default UserNav;
