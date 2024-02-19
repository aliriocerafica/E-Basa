'use client'
import React from 'react'
import "../css/quiz.css"; // Corrected import statement

const page = () => {
  return (
    <div className='page-container'>
        <div>
      <button className=" text-white font-bold py-2 px-4 rounded responsive ">
        <img src="/back2.png" alt="Image Alt Text" className="h-[260px]  w-[80px] inline mr-6" />
    
      </button>
    </div>
 <div className="Card flex justify-center ">
        <div className="w-[1200px]  h-[600px] p-6 bg-[#41545B] border-8 r border-[#BF977B] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-[80px]  font-bold tracking-tight text-[#FF8484] text-center dark:text-white">
           Panuto ! 
            </h5>
          </a>
          <p className="mb-3  text-[50px] text-center  text-white font-normal dark:text-gray-400">
            Basahing mabuti ang mga tanong at kwento piliin ang box ng tamang sagot.
          </p>
          
        </div>
      </div>
      <div>
      <button className=" text-white font-bold py-2 px-4 rounded responsive ">
        <img src="/next2.png" alt="Image Alt Text" className="h-[250px] w-[80px] inline ml-6" />
    
      </button>
    </div>
</div>
  )
}

export default page