'use client'
import React from 'react'
import SideandtopNav from "../components/SideandtopNav"; // Import the SideNav component
import StudentList from "../components/StudentList";
import Dashboard from "../components/Dashboard";
import AddStudent from "../components/AddStudent";
import Link from 'next/link';
const page = () => {
  return (
    
    <div className="dash-bg">
    
        <SideandtopNav />
        <div>
        <AddStudent />
      
        </div>
       
    </div>
    
  )
}

export default page