import React from "react";
import "../../css/quiz.css";
import Link from "next/link";

const Page = () => {
  return (
    <div className="page-container2">
      <div className="header1">
        <header className="panuto mt-[100px] text-[60px] text-center text-[#49F6FF]">
          Panuto
        </header>
        <div className="container1 w-[1200px] mt-20">
          <h1 className="panuto1 text-[40px] text-justify">
            Mabuhay munting mag aaral ito ay ang iyong paunang pag susulit,
            basahing mabuti ang panuto, ang pag susulit na ito ay mayroong
            apatnapung katanungan.
          </h1>
          <div className="button flex justify-center mt-[200px]"> 
          <Link href="./panuto2">
        <button className="h-[70px] w-[270px] text-[30px] bg-[#0090DC] text-center p-3 rounded-lg border border-black">
          Mag-simula
        </button>
        </Link>
        </div>
        </div>
      </div>
      
      </div>
   
  );
};

export default Page;
