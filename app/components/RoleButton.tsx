import React from 'react';
interface RoleSelectionButtonsProps {
  role: string;
  onRoleChange: (role: string) => void;
}

const RoleSelectionButtons: React.FC<RoleSelectionButtonsProps> = ({ role, onRoleChange }) => {
  return (
    <div className="mb-3 pb-10">
      <button
        className={`mr-4 px-4 py-2 text-2xl rounded-l-full ${role === 'teacher' ? 'bg-cyan-500 text-white' : 'bg-white-300 text-black-700'}`}
        onClick={() => onRoleChange('teacher')}
        style={{ width: '170px', marginRight: '7px', paddingRight: '130px', border: '2px solid #00bcd4' }}
      >
        Educators
      </button>
      <button
        className={`px-4 py-2  text-2xl rounded-full ${role === 'admin' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-black-700'}`}
        onClick={() => onRoleChange('admin')}
        style={{ width: '120px', marginLeft: '-40px', border: '2px solid #00bcd4' }}
      >
        Admin
      </button>
    </div>
  );
};
export default RoleSelectionButtons;
