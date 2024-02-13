"use client";
import React from "react";
import Name from "../components/Name"; // Import the Name component
import SideandtopNav from "../components/SideandtopNav"; // Import the SideNav component
import "../css/dash.css";

const Page = () => {
  return (
    <div className="dash-bg">
      {/* Render the SideNav component */}
      <SideandtopNav />
      {/* Use flex-grow to occupy remaining space */}

      {/* Render the Name component */}
      <Name />

      {/* Table */}
      <div className="header-act ml-[385px] w-[1380px]" >
        {" "}
        <header>Activity</header>
      </div>
      <div
        className="relative overflow-x-auto sm:rounded-lg ml-[385px]"
        style={{ width: "1380px" }}
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="heads ">
            <tr>
              <th className="px-6 py-3 text-center text-lg    uppercase tracking-wider ">
                ID
              </th>
              <th className="px-6 py-3 text-center text-lg  uppercase tracking-wider ">
                Full Name
              </th>
              <th className="px-6 py-3 text-center text-lg uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-center text-lg uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-center text-lg  uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-center text-lg  uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
          <tr className="bod">
              <td className="px-6 py-4 text-center  whitespace-nowrap">k112</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">Jane Doe</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">October 23 , 2023  - 8:00 AM</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">Admin</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">
              <button className="px-2 py-1  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img
                    src="/edit.png"
                    alt="Edit"
                    className="h-6 w-6"
                  />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <img
                    src="/delete.png"
                    alt="Delete"
                    className="h-6 w-6"
                  />
                </button>
              </td>
            </tr>
            <tr className="bod">
              <td className="px-6 py-4 text-center  whitespace-nowrap">k112</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">Jane Doe</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">October 23 , 2023  - 8:00 AM</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">Admin</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">
              <button className="px-2 py-1  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img
                    src="/edit.png"
                    alt="Edit"
                    className="h-6 w-6"
                  />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <img
                    src="/delete.png"
                    alt="Delete"
                    className="h-6 w-6"
                  />
                </button>
              </td>
            </tr>
            
            <tr className="bod">
              <td className="px-6 py-4 text-center  whitespace-nowrap">k112</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">Jane Doe</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">October 23 , 2023  - 8:00 AM</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">Admin</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">
              <button className="px-2 py-1  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img
                    src="/edit.png"
                    alt="Edit"
                    className="h-6 w-6"
                  />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <img
                    src="/delete.png"
                    alt="Delete"
                    className="h-6 w-6"
                  />
                </button>
              </td>
            </tr>
            <tr className="bod">
              <td className="px-6 py-4 text-center  whitespace-nowrap">k113</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">October 23 , 2023  - 8:00 AM</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">User</td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  Inactive
                </span>
              </td>
              <td className="px-6 py-4 text-center  whitespace-nowrap">
                <button className="px-2 py-1  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img
                    src="/edit.png"
                    alt="Edit"
                    className="h-6 w-6"
                  />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <img
                    src="/delete.png"
                    alt="Delete"
                    className="h-6 w-6"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
