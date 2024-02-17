'use client'
import React from 'react';
import UserNav from '../components/UserNav';
import '../css/userpage.css'; // Corrected import statement

const page = () => {
  return (
    <div className="page-container">
      <UserNav />
      <div className="content">
        {/* Your page content goes here */}
        <h1></h1>
      </div>
    </div>
  );
};

export default page;
