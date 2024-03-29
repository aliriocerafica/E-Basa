import React from "react";

const SideNav = () => {
  return (
    <div className="pattern fixed top-1/2 transform -translate-y-1/2 right-6 mr-auto ">
      <div className="relative shadow-inner dark:bg-slate-900 bg-opacity-62 pattern rounded-[25px] ">

        <nav className="z-20flex-shrink-0 flex-grow-0 justify-around gap-4 border-t border-gray-200
         bg-white p-2.5 shadow-lg backdrop-blur-lg
         min-h-[auto] min-w-[64px] flex-col rounded-[25px] border ">
          <a
            href="#profile"
            className="flex h-16 w-16 flex-col items-center  rounded-md justify-center mt-4 gap-1 text-fuchsia-900 hover:bg-[#AAFFFF] dark:text-gray-400"
          >
            <img
              src="/recent.png"
              alt="Profile"
              className="w-20 h-18 shrink-0"
            />
            <small className="text-center text-xs font-medium"> </small>
          </a>

          <a
            href="#analytics"
            className="flex h-16 w-16 flex-col items-center  rounded-md justify-center mt-4 gap-1 text-fuchsia-900 hover:bg-[#AAFFFF] dark:text-gray-400"
            >
            <img
              src="/home.png"
              alt="Analytics"
              className="w-20 h-18 shrink-0"
            />
            <small className="text-center text-xs font-medium">  </small>
          </a>

          <a
            href="#settings"
            className="flex h-16 w-16 flex-col items-center  rounded-md justify-center mt-4 gap-1 text-fuchsia-900 hover:bg-[#AAFFFF] dark:text-gray-400"
            >
            <img
              src="/music.png"
              alt="Settings"
              className="w-20 h-18 shrink-0"
            />
            <small className="text-center text-xs font-medium">  </small>
          </a>

         

          <a
            href="/"
            className="flex h-16 w-16 flex-col items-center  rounded-md justify-center mt-4 gap-1 text-fuchsia-900 hover:bg-[#AAFFFF] dark:text-gray-400"
          >
            <img
              src="/settings.png"
              alt="Home"
              className="w-14 h-18 shrink-0"
            />
            <small className="text-xs font-medium"></small>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
