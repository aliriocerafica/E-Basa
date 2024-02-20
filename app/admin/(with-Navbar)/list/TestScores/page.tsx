"use client";
import React, { useState } from 'react';
import "../../../css/testscores.css";
import RoleSelectionButtons from '../../../components/Testrole';


const TestScores: React.FC = () => {
  const [role, setRole] = useState(''); // Assuming you manage role state in LoginPage

  // Define a function to handle role change
  const handleRoleChange = (newRole: string) => {
    setRole(newRole);
  };

  return (
    <>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
    </head>
    <div className="dash-bg">
      <title>Test Summary</title>
      <div className="student-test">
        <h1 className="studenthead">
          Student Grade
        </h1>
        <br/>
        <div className='rounded-lg bg-white p-4'>
        <RoleSelectionButtons role={role} onRoleChange={handleRoleChange} />

    
    </div>

    </div>
    </div>
    </>
  );
};

// Export the component
export default TestScores;