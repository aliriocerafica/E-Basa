'use client';
import React, { useEffect } from 'react';
import UserNav from '../../components/UserNav'; // Adjust the path as needed
import "../../css/userpage.css";

export default function Home() {
  console.log(localStorage.getItem('access_token'));
  console.log(localStorage.getItem('user_id'));
  return (
    <div className="page-container">
      <UserNav />
      <div className="section1 place-self-center bg-white shadow-md rounded-lg">
        <h2 className="section-header text-center bg-[#06BEE1] text-[30px] rounded-[5px] text-white shadow-md mb-2 p-1">ARALIN 1</h2>
        <div className="image-container">
          <img
            src="/book1.png" // Replace with the actual path to your image
            alt="Description of the image"
            className="section-image"
          />
          <button className="image-button">
            <img
              src="/simulan.png" // Replace with the actual path to your image
              alt="Description of the image"
              className="button-image"
            />
          </button>
        </div>
      </div>
      <div className="section2 bg-white ml-10 shadow-md rounded-lg">
        <h2 className="section-header text-center bg-[#06BEE1] text-[30px] rounded-[5px] text-white shadow-md mb-2 p-1">GAWAIN 1</h2>
        <div className="image-container">
          <img
            src="/gawain1.png" // Replace with the actual path to your image
            alt="Description of the image"
            className="section-image"
          />
          <button className="image-button">
            <img
              src="/sagutan.png" // Replace with the actual path to your image
              alt="Description of the image"
              className="button-image"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
