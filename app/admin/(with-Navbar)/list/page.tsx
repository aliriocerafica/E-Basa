'use client';
import React, { useState, useEffect } from "react";
import "../../css/studentlist.css";
import Link from 'next/link'

const StudentList = () => {
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

  const deleteUser = (userId) => {
    fetch(`http://localhost:8000/users/${userId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        // Update the user list after deletion
        setUsers(users.filter(user => user.user_id !== userId));
      } else {
        console.error('Failed to delete user');
      }
    })
    .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div className="dash-bg">
      <title>List</title>
      <div className="student">
        <h1 className="studenthead">
          Student List
          <Link href="/admin/list/addStudent">
            <button className="float-right">
              Add Student Account
              <img src="/add.png" alt="Add Student" />
            </button>
          </Link>
        </h1>
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
                <th className="px-6 py-3 text-center text-lg uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
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
                  
                  <td className="editbutton px-6 py-4 whitespace-nowrap">
                    <Link href={`/admin/list/editStudent?user_id=${user.user_id}`}>
                    <button className="px-2 py-1 bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                      <img src="/edit.png" alt="Edit" className="h-6 w-6" />
                    </button>
                    </Link>

                    <button 
                      className="ml-2 px-2 py-1 rounded-md bg-green-400 hover:bg-green-300 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                      onClick={() => deleteUser(user.user_id)}
                    >
                      <img src="/delete.png" alt="Delete" className="h-6 w-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
