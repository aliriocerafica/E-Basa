import React from "react";

const Footer = () => {
  return (
    <div className="fixed z-50 h-12 w-auto max-w-lg -translate-x-1/2 bg-white border mt-6 border-gray-200 rounded-full bottom-16 left-1/2 dark:bg-gray-700 dark:border-gray-600">
<div className="grid h-4 max-w-lg grid-cols-5 gap-16 mx-auto">
        <button className="bg-[#35F27F] hover:bg-blue-700 text-white rounded-full font-bold flex items-center justify-center">
          <img src="/1.png" alt="Image" className="w-6 h-6" />
        </button>

        <div
          id="tooltip-home"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Home
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <button className="bg-[#35F27F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center">
          <img src="/2.png" alt="Image" className="w-8 h-8" />
        </button>

        <div
          id="tooltip-wallet"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Wallet
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <button className="bg-[#35F27F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center">
          <img src="/3.png" alt="Image" className="w-8 h-8" />
        </button>

        <div
          id="tooltip-new"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Create new item
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <button className="bg-[#35F27F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center">
          <img src="/4.png" alt="Image" className="w-8 h-8" />
        </button>

        <div
          id="tooltip-settings"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Settings
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <button className="bg-[#35F27F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center">
          <img src="/5.png" alt="Image" className="w-8 h-8" />
        </button>

        <div
          id="tooltip-profile"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Profile
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
