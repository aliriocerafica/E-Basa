import React from "react";
import Name from "../../components/Name"; // Import the Name component
import "../../css/dash.css";
 
const Dashboard = () => {
   
 
  return (  
    <div className="dash1-bg">
          <title>Dashboard</title>
       < Name />
      <div className="header-act ml-[385px] w-[1380px] mt-10" >
        {" "}
        <header>Activity</header>
      </div>
      <div
        className="relative overflow-x-auto sm:rounded-[5px] ml-[385px]"
        style={{ width: "1380px" }}
      >
        <table className="min-w-full divide-y divide-gray-200  ">
          <thead className="heads ">
            <tr>
              <th className="px-6 py-3 text-center text-[18px]    uppercase tracking-wider ">
                ID
              </th>
              <th className="px-6 py-3 text-center text-[18px] uppercase tracking-wider ">
                Full Name
              </th>
              <th className="px-6 py-3 text-center text-[18px]  uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-center text-[18px]  uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-center text-[18px]   uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-center text-[18px]   uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
          <tr className="bod text-[16px] ">
              <td className="px-6 text-center py-4 whitespace-nowrap">k112</td>
              <td className="px-6 text-center py-4 whitespace-nowrap">Jane Doe</td>
              <td className="px-6 text-center py-4 whitespace-nowrap">October 23 , 2023  - 8:00 AM</td>
              <td className="px-6 text-center py-4 whitespace-nowrap">Admin</td>
              <td className="px-6 text-center py-4 whitespace-nowrap">
                <span className="px-4 inline-flex text-center text-[14px] leading-5 font-semibold rounded-full bg-[#2ADBA3] text-white shadow-md">
                  Active
                </span>
              </td>
           
              
              <td className="px-6 py-4 whitespace-nowrap text-center">
              <button className="px-2 py-1  bg-[#39B8FF] rounded-md shadow-md  hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  <img
                    src="/edit.png"
                    alt="Edit"
                    className="h-6 w-6"
                  />
                </button>
                <button className="ml-2 px-2 py-1 rounded-md shadow-md bg-[#A6F47E] hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
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

export default Dashboard;
