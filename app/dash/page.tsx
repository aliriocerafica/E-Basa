'use client'
import React from 'react';
import { Dosis } from 'next/font/google';
import { IconButton, Typography, List } from '@material-tailwind/react';
import Name from '../components/Name'; // Import the Name component
import SideandtopNav from '../components/SideandtopNav'; // Import the SideNav component
import '../css/dash.css';
const Page = () => {
  return (
   <div className="dash-bg">
      {/* Render the SideNav component */}
      <SideandtopNav />
      {/* Use flex-grow to occupy remaining space */}
    
        {/* Render the Name component */}
        <Name />
      
    </div>
  );
};

export default Page;
