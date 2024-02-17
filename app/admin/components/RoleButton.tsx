'use client';
import React, { useState, useEffect } from "react";
import LoginAdmin from "./LoginAdmin";
import LoginEducator from "./LoginEducator";

interface RoleSelectionButtonsProps {
  role: string;
  onRoleChange: (role: string) => void;
}

const RoleSelectionButtons: React.FC<RoleSelectionButtonsProps> = ({ role, onRoleChange }) => {
  const [showLoginAdmin, setShowLoginAdmin] = useState(true); // Set admin as default
  const [showLoginEducator, setShowLoginEducator] = useState(false);

  useEffect(() => {
    // Call onRoleChange with the default role when component mounts
    onRoleChange('admin');
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  const handleClick1 = () => {
    setShowLoginAdmin(false); // Reset the state of LoginAdmin
    setShowLoginEducator(true);
    onRoleChange('teacher'); // Change the role to 'teacher'
  };

  const handleClick2 = () => {
    setShowLoginAdmin(true);
    setShowLoginEducator(false); // Reset the state of LoginEducator
    onRoleChange('admin'); // Change the role to 'admin'
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="mb-4 pb-10 justify-center">
        <button
          className={`mr-4 px-4 m-t-[400px] py-2 text-2xl rounded-l-full ${role === 'admin' ? 'bg-cyan-500 text-white' : 'bg-white-300 text-black-700'} ${role === 'admin' ? 'hover:bg-cyan-600' : 'hover:bg-white-400'}`}
          onClick={handleClick2}
          style={{ width: '70px', marginRight: '7px', paddingRight: '130px', border: '2px solid #00bcd4' }}
        >
          Admin
        </button>
        <button
          className={`px-4 py-2  text-2xl rounded-full ${role === 'teacher' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-black-700'} ${role === 'teacher' ? 'hover:bg-cyan-600' : 'hover:bg-gray-200'}`}
          onClick={handleClick1}
          style={{ width: '150px', marginLeft: '-40px', border: '2px solid #00bcd4' }}
        >
          Educators
        </button>
      </div>
      {showLoginAdmin && <LoginAdmin />}
      {showLoginEducator && <LoginEducator />}
    </div>
  );
};

export default RoleSelectionButtons;
