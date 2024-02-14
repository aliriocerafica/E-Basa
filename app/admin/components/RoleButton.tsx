'use client';
import React, { useState } from "react";
import LoginAdmin from "./LoginAdmin";
import LoginEducator from "./LoginEducator";

interface RoleSelectionButtonsProps {
  role: string;
  onRoleChange: (role: string) => void;
}

const RoleSelectionButtons: React.FC<RoleSelectionButtonsProps> = ({ role, onRoleChange }) => {
  const [showLoginAdmin, setShowLoginAdmin] = useState(false);
  const [showLoginEducator, setShowLoginEducator] = useState(false);

  const handleClick1 = () => {
    setShowLoginAdmin(true);
    setShowLoginEducator(false); // Reset the state of LoginEducator
  };

  const handleClick2 = () => {
    setShowLoginAdmin(false); // Reset the state of LoginAdmin
    setShowLoginEducator(true);
  };

  return (
    <div className="mb-3 pb-10">
      <button
        className={`mr-4 px-4 py-2 text-2xl rounded-l-full ${role === 'teacher' ? 'bg-cyan-500 text-white' : 'bg-white-300 text-black-700'}`}
        onClick={() => {
          onRoleChange('teacher');
          handleClick1();
        }}
        style={{ width: '170px', marginRight: '7px', paddingRight: '130px', border: '2px solid #00bcd4' }}
      >
        Educators
      </button>
      <button
        className={`px-4 py-2  text-2xl rounded-full ${role === 'admin' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-black-700'}`}
        onClick={() => {
          onRoleChange('admin');
          handleClick2();
        }}
        style={{ width: '120px', marginLeft: '-40px', border: '2px solid #00bcd4' }}
      >
        Admin
      </button>
      {showLoginAdmin && <LoginAdmin />}
      {showLoginEducator && <LoginEducator />}
    </div>
  );
};

export default RoleSelectionButtons;
