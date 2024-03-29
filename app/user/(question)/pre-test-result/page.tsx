'use client';
import React, { useState, useEffect } from 'react';
import "../../css/quiz.css";
import Link from 'next/link';

const PreTestResult = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);

      try {
        const userId = localStorage.getItem('user_id');

        if (!userId) {
          throw new Error('Missing user ID in local storage');
        }

        const response = await fetch(`http://localhost:8000/users/${userId}`);

        if (!response.ok) {
          throw new Error(await response.text());
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalScore = user?.pretest_results.reduce((total: number, result: any) => total + result.score, 0);

  // Determine which image to display based on score and gender
  const getImageUrl = () => {
    if (totalScore >= 61 && totalScore <= 80) {
      return '/80.png'; // Corresponding image for scores 61-80 for both genders
    } else if (totalScore >= 41 && totalScore <= 60) {
      if (user.gender === 'Male') {
        return '/41M.png'; // Corresponding image for scores 41-60 for Male
      } else if (user.gender === 'Female') {
        return '/41F.png'; // Corresponding image for scores 41-60 for Female
      }
    } else if (totalScore >= 21 && totalScore <= 40) {
      if (user.gender === 'Male') {
        return '/21M.png'; // Corresponding image for scores 21-40 for Male
      } else if (user.gender === 'Female') {
        return '/21F.png'; // Corresponding image for scores 21-40 for Female
      }
    } else if (totalScore >= 1 && totalScore <= 20) {
      if (user.gender === 'Male') {
        return '/1M.png'; // Corresponding image for scores 1-20 for Male
      } else if (user.gender === 'Female') {
        return '/1F.png'; // Corresponding image for scores 1-20 for Female
      }
    }
    
    return ''; // Return empty string if conditions are not met
  };
  

  return (
    <div className="page-container flex flex-wrap">
      <div className="">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className='text-[60px] pb-8 text-sky-400 mt-20'>"Pagbati munting mag-aaral "</h1>
          <p className=' pb-8 text-[30px]'>Natapos mo ang unang pag sususlit</p>
          <p className='  text-sky-400 text-[40px]'>{totalScore}/80</p>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : user ? (
            <div>
              {/* <img src="/stage.png" className="fixed w-[450px] h-[200px] bottom-0 mb-[150px] ml-[-125px]" alt="Stage"></img> */}
              <img src={getImageUrl()} alt="No Grade" className='h-80 option-image breath-animation relative' />
              <br/>
              <br/>
              <br/>
             
      
            </div>
          ) : (
            <p>No user data found</p>
          )} 
          <Link href="./home">
          <button className='bg-[#2B88BC] hover:bg-blue-700 shadow-md text-white font-bold  mb-[100px] h-[70px] py-2 rounded-[10px] pr-[100px] pl-[100px]'>Ipadala ang nakuhang grado</button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default PreTestResult;
