import React from 'react';
import { useRouter } from 'next/router';

const RoleSelection: React.FC = () => {
  const router = useRouter();

  const handlePretestClick = () => {
    router.push('/pretest');
  };

  const handlePosttestClick = () => {
    router.push('/posttest');
  };

  return (
    <div>
      <button
        className="py-2 px-4 rounded-lg bg-gray-100 text-blue-500"
        onClick={handlePretestClick}
      >
        PRE TEST SUMMARY
      </button>
      <button
        className="py-2 px-4 rounded-lg bg-gray-100 text-blue-500"
        onClick={handlePosttestClick}
      >
        POST TEST SUMMARY
      </button>
    </div>
  );
};

export default RoleSelection;
