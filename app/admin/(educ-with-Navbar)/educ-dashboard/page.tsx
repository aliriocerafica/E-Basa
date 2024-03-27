'use client';
import React, { useState, useEffect } from "react";
import Name from "../../components/Name"; // Import the Name component
import "../../css/dash.css";
import "../../css/studentlist.css";
import Link from 'next/link'

 


const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    fetch("http://localhost:8000/users/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
   
 
  return (  
    <div className="">
          <title>Dashboard</title>
       < Name />
      <div className="header-act ml-[385px] w-[1380px] mt-10" >
        {" "}
        <header>Activity</header>
      </div>
      <div
          className="relatives overflow-x-auto sm:rounded-lg "
          style={{ width: "1420px" }}
        >
          <table className="min-w-full divide-y divide-gray-200 text-center">
            <thead className="heads">
              <tr>
                <th className="px-6 py-3 text-lg text-center uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-center text-lg uppercase tracking-wider">
                  Full Name
                </th>
                <th className="px-6 py-3 text-center text-lg uppercase tracking-wider">
                  Student Information
                </th>
                <th className="px-6 py-3 text-center text-lg uppercase tracking-wider">
                  Test Score
                </th>
                <th className="px-6 py-3 text-left text-lg uppercase tracking-wider">
                  School
                </th>
            
              </tr>
            </thead>
            <tbody className="min-w-full  bg-white divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={index} className="bod">
                  <td className="px-6 py-4 whitespace-nowrap">{user.user_id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.firstname} {user.lastname}</td>
                  <td className="buttonview">
                    <button>View</button>
                  </td>
                  <td className="buttonview">
                    <Link href={`/admin/list/pre-test-results?user_id=${user.user_id}`}>
                      <button>View</button>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.school}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default Dashboard;
