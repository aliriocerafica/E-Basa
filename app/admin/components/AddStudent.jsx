"use client";
import React from "react";

const AddStudent = () => {
  var loadFile = function (event) {
    var input = event.target;
    var file = input.files[0];
    var type = file.type;
    var output = document.getElementById("preview_img");

    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  return (
    <div className="justify-center head pt-[120px]">
    <header className="bg-white ml-[565px] rounded-lg shadow-md p-4 w-[1090px] text-2xl">Add Student Account</header>
    <div className="flex justify-center items-center p-[20px]">
    <div className="bg-white rounded-lg bg-opacity-50">

        {/* Centering container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left column */}
          <div className="relative bg-[#13DFFE] rounded-lg m-1 p-10 flex flex-col justify-center items-center">
            {/* Left Column Content */}
            <img
              src="/student.png"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 h-[300px] "
              alt="Centered image"
            />
            <label className="block mt-[70px]">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                onChange={loadFile}
                className="block w-full text-sm shadow-md rounded-full text-black-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-[#A1E67D] file:text-black-700
                hover:file:bg-white"
              />
            </label>
          </div>

          {/* Right column */}
          <div className="bg-white bg-opacity-0  p-4 rounded-lg ">
            <form className="w-full max-w-lg">
       
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>

                  <input
                    className=" shadow-md appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                </div>
                <div className="w-full md:w-1/1 px-3 ">
                  <label
                    className="block uppercase  tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name "
                  >
                    Last Name
                  </label>
                  <input
                    className="shadow-md appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-M-name"
                  >
                    Middle Initial
                  </label>
                  <input
                    className="shadow-md appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-M-name"
                    type="text"
                    placeholder="M"
                  />
                </div>

                <div className="w-full md:w-1/2 px-3 pt-3 ">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-age ">
                    Age
                  </label>
                  <input
                    className="shadow-md appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-age"
                    type="text "
                    placeholder="Enter age"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow-md appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-gender"
                  >
                    Gender
                  </label>
                  <select
                    className="block shadow-md appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-gender"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="w-full md:w-1/1 px-3 pt-3">
                  <label
                    className="block uppercase  tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-school"
                  >
                    School
                  </label>
                  <input
                    className="appearance-none  shadow-md block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-school"
                    type="text"
                    placeholder="Enter school name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-school-id"
                  >
                    School ID
                  </label>
                  <input
                    className="appearance-none  shadow-md block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-school-id"
                    type="text"
                    placeholder="Enter school ID"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none  shadow-md block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-confirm-password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="appearance-none  shadow-md block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-confirm-password"
                    type="password"
                    placeholder="Confirm password"
                  />
                </div>
              </div>
              <button class="bg-[#6FD03D] hover:bg-blue-700   shadow-md text-white font-bold py-2 px-4 rounded-[10px] pr-[100px] pl-[100px]">
                Create Student Account
              </button>
              {/* Additional form fields go here */}
            </form>
          </div>
        </div>
      </div>
    </div>
  
    </div>
  
  );
};

export default AddStudent;
