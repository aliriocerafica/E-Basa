'use client';
import React, { useState, useEffect } from "react";
import Pretest from "./Pretest-page";
import Posttest from "./Posttest-page";

interface RoleSelectionButtonsProps {
  role: string;
  onRoleChange: (role: string) => void;
}

const RoleSelectionButtons: React.FC<RoleSelectionButtonsProps> = ({ role, onRoleChange }) => {
  const [showPretest, setShowPretest] = useState(true); 
  const [showPosttest, setShowPosttest] = useState(false);

  useEffect(() => {

    onRoleChange('pre');
  }, []); 
  const handleClick1 = () => {
    setShowPretest(false);
    setShowPosttest(true);
    onRoleChange('post');
  };

  const handleClick2 = () => {
    setShowPretest(true);
    setShowPosttest(false); 
    onRoleChange('pre'); 
  };

  return (
    <div className="flex flex-col items-left">
  <div className="pb-10 justify-left">
    <button
      className={`mr-4 px-4 m-t-[400px] py-2  text-2xl rounded-l-full ${role === 'pre' ? 'bg-cyan-500 text-white' : 'bg-white-300 text-black-700'} ${role === 'pre' ? 'hover:bg-cyan-600' : 'hover:bg-white-400'}`}
      onClick={handleClick2}
      style={{ width: '150px', marginRight: '9px', paddingRight: '10px', border: '2px solid #00bcd4' }}
    >
      Pre Test
    </button>
    <button
      className={`px-4 py-2  text-2xl rounded-full ${role === 'post' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-black-700'} ${role === 'post' ? 'hover:bg-cyan-600' : 'hover:bg-gray-200'}`}
      onClick={handleClick1}
      style={{ width: '150px', marginLeft: '-40px', border: '2px solid #00bcd4' }}
    >
      Post Test
    </button>
  </div>
  {showPretest && <Pretest/>}
  {showPosttest && <Posttest/>}
</div>

);
};
export default RoleSelectionButtons;
