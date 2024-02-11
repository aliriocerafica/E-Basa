'use client'
import React, { useState } from 'react';
import RoleSelectionButtons from '../components/RoleButton'; // Import the RoleSelectionButtons component
import '../css/logad.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('admin'); // Default role is teacher

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (selectedRole: string) => {
    setRole(selectedRole);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Role:', role);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-custom">
      {/* Render the RoleSelectionButtons component */}
      <RoleSelectionButtons role={role} onRoleChange={handleRoleChange} />

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-md pb-8 mb-4 form-container">
        <header className="bg-cyan-400 py-4 mb-4 rounded-t-3xl focus:outline-none focus:shadow-outline relative shadow-md" style={{
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 5px 10px -5px rgba(0,0,0,0.5)'
        }}>
          <h1 className="text-white text-center text-3xl">Log In</h1>
        </header>

        <div className="mb-2 mx-10 px-5 pt-6 text-cyan-500 inter-font">
          <label className="block text-cyan-500 mb-2 text-2xl" htmlFor="username">
            Username
          </label>
          <input
            className="border-cyan-400 border-2 rounded-full w-full py-2 px-3 text-cyan-500 leading-tight focus:outline-none focus:shadow-outline shadow-md input-field"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-2 mx-10 px-5 text-cyan-500 pt-6 inter-font">
          <label className="block text-cyan-500 mb-2 text-2xl" htmlFor="password">
            Password
          </label>
          <input
            className="shadow-md border-cyan-400 border-2 rounded-full w-full py-2 px-3 text-cyan-500 mb-3 leading-tight focus:outline-none focus:shadow-outline input-field"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="flex items-center justify-center px-8 pt-6">
          <button
            className="bg-cyan-400 hover:bg-sky-300 text-2xl text-white  py-2 px-16 rounded-full focus:outline-none focus:shadow-outline relative shadow-md submit-button button-text-shadow" // Add button-text-shadow class here
            type="submit"
          >
            Submit
          </button>

        </div>
      </form>

      <img src="/admin.png" alt="Teacher" className="custom-image"></img>
    </div>
  );
};

export default LoginPage;
