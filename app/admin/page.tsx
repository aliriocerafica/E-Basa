'use client';
import React, { useState } from 'react';
import RoleSelectionButtons from './components/RoleButton';

function LoginPage() {
  const [role, setRole] = useState(''); // Assuming you manage role state in LoginPage

  // Define a function to handle role change
  const handleRoleChange = (newRole: string) => {
    setRole(newRole);
  };

  return (
    <div>
      <RoleSelectionButtons role={role} onRoleChange={handleRoleChange} />
    </div>
  );
}

export default LoginPage;
