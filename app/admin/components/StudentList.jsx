"use client";
import React from "react";
import SideandtopNav from "./SideandtopNav"; // Import the SideNav component
import "../css/studentlist.css";

const StudentList = () => {
  return (
    <div className="dash-bg">
      <div className="student">
        <h1 className="studenthead">
          Student List
          <button className="float-right">
            Add Student Account
            <img src="/add.png" alt="Add Student" />
          </button>
        </h1>
      <div
        className="relatives overflow-x-auto sm:rounded-lg "
        style={{ width: "1420px" }}
      >
        <table className="min-w-full divide-y divide-gray-200 text-center">
          <thead className="heads">
            <tr>
              <th className="px-6 py-3 text-lg   text-center   uppercase tracking-wider ">
                ID
              </th>
              <th className="px-6 py-3  text-center text-lg  uppercase tracking-wider ">
                Full Name
              </th>
              <th className="px-6 py-3 text-center  text-lg uppercase tracking-wider">
                Student Information
              </th>
              <th className="px-6 py-3  text-center text-lg uppercase tracking-wider">
                Test Score
              </th>
              <th className="px-6 py-3  text-left text-lg  uppercase tracking-wider">
                School
              </th>
              <th className="px-6 py-3  text-center  text-lg  uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            <tr className="bod">
              <td className="px-6 py-4 whitespace-nowrap">k112</td>
              <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
              <td className="buttonview">
              <button>View</button>
              </td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              <td className="text center">St. Theodore</td>
              </td>
              <td className="editbutton px-6 py-4 whitespace-nowrap">
                <button className="px-2 py-1  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img src="/edit.png" alt="Edit" className="h-6 w-6" />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <img src="/delete.png" alt="Delete" className="h-6 w-6" />
                </button>
              </td>
            </tr>
            <tr className="bod">
              <td className="px-6 py-4 whitespace-nowrap">k112</td>
              <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              <td className="text center">St. Theodore</td>
              </td>
              <td className="editbutton px-6 py-4 whitespace-nowrap">
                <button className="px-2 py-1  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img src="/edit.png" alt="Edit" className="h-6 w-6" />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <img src="/delete.png" alt="Delete" className="h-6 w-6" />
                </button>
              </td>
            </tr>
            <tr className="bod">
              <td className="px-6 py-4 whitespace-nowrap">k112</td>
              <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              <td className="text center">St. Theodore</td>
              </td>
              <td className="editbutton px-6 py-4 whitespace-nowrap">
                <button className="px-2 py-1  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img src="/edit.png" alt="Edit" className="h-6 w-6" />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <img src="/delete.png" alt="Delete" className="h-6 w-6" />
                </button>
              </td>
            </tr>
            <tr className="bod">
              <td className="px-6 py-4 whitespace-nowrap">k112</td>
              <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              <td className="text center">St. Theodore</td>
              </td>
              <td className="editbutton px-6 py-4 whitespace-nowrap">
                <button className="px-2 py-1  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img src="/edit.png" alt="Edit" className="h-6 w-6" />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <img src="/delete.png" alt="Delete" className="h-6 w-6" />
                </button>
              </td>
            </tr>
            <tr className="bod">
              <td className="px-6 py-4 whitespace-nowrap">k112</td>
              <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              <td className="text center">St. Theodore</td>
              </td>
              <td className="editbutton px-6 py-4 whitespace-nowrap">
                <button className="px-2 py-1  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img src="/edit.png" alt="Edit" className="h-6 w-6" />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <img src="/delete.png" alt="Delete" className="h-6 w-6" />
                </button>
              </td>
            </tr>
            <tr className="bod">
              <td className="px-6 py-4 whitespace-nowrap">k112</td>
              <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              <td className="text center">St. Theodore</td>
              </td>
              <td className="editbutton px-6 py-4 whitespace-nowrap">
                <button className="px-2 py-1  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img src="/edit.png" alt="Edit" className="h-6 w-6" />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <img src="/delete.png" alt="Delete" className="h-6 w-6" />
                </button>
              </td>
            </tr>
            <tr className="bod">
              <td className="px-6 py-4 whitespace-nowrap">k112</td>
              <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              <td className="text center">St. Theodore</td>
              </td>
              <td className="px-6 py-4 editbutton">
                <button className=" px-2 py-1  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img src="/edit.png" alt="Edit" className="h-6 w-6" />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <img src="/delete.png" alt="Delete" className="h-6 w-6" />
                </button>
              </td>
            </tr>

            <tr className="bod">
              <td className="px-6 py-4 whitespace-nowrap">k112</td>
              <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
              <td className="buttonview">
                <button>View</button>
                
              </td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              <td className="text center">St. Theodore</td>
              </td>
              <td className="px-6 py-4 whitespace-nowrap editbutton">
                <button className="px-2 py-1  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img src="/edit.png" alt="Edit" className="h-6 w-6" />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <img src="/delete.png" alt="Delete" className="h-6 w-6" />
                </button>
              </td>
            </tr>
            <tr className="bod">
              <td className="px-6 py-4 whitespace-nowrap">k113</td>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="buttonview">
                <button data-modal-target="medium-modal" data-modal-toggle="medium-modal">View</button>
              </td>
              <td className="buttonview">
                <button>View</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
               <td className="text center">St. Theodore</td>
              </td>
              <td className="px-6 py-4 whitespace-nowrap editbutton" >
                <button className="px-2 py-1  bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img src="/edit.png" alt="Edit" className="h-6 w-6" />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <img src="/delete.png" alt="Delete" className="h-6 w-6" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    
    

    </div>
  );
};

// Export the component
export default StudentList;
