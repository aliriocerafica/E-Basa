"use client";
import React from "react";
import "../css/quiz.css"; // Corrected import statement

const page = () => {
  return (
    <div className="page-container2 p-10">
      <div className="topics-one bg-[#41545B]  h-[70px] w-full md:w-[1150px] text-[45px] text-white rounded-lg border-4 border-[#BF977B] mx-auto px-4 md:px-0">
        <h1 className="text-center"> Mga Paksa</h1>
      </div>
      <div className="w-full md:w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-10 content-center mt-10 mx-auto">
          <div className="hugis rounded-lg pt-8 bg-[#41545B] h-[221px] md:h-auto w-[249px] md:w-auto text-center border-4 border-[#BF977B] flex flex-col justify-between items-center">
            <img
              src="/shapes.png"
              alt="Image Alt Text"
              className="h-[170px] w-[160px]"
            />

            <div className="button2">
              <button className="Go bg-[#00abff] h-10 w-[240px] text-[20px] mb-2 mt-2 rounded-lg hover:bg-[#1A2CA0] text-white">
                Hugis
              </button>
            </div>
          </div>

          <div className="hugis rounded-lg  pt-8  bg-[#41545B] h-[221px]  border-4 border-[#BF977B] md:h-auto w-[249px] md:w-auto text-center flex flex-col justify-between items-center">
            <img
              src="/colors.png"
              alt="Image Alt Text"
              className="h-[170px] w-[160px]"
            />
            <div className="button2">
              <button className="Go bg-[#00abff] h-10 w-[240px] text-[20px] mb-2 mt-2 rounded-lg hover:bg-[#1A2CA0] text-white">
               Kulay
              </button>
            </div>
          </div>
          <div className="hugis  pt-8 rounded-lg bg-[#41545B] h-[221px]  border-4 border-[#BF977B]  md:h-auto w-[249px] md:w-auto text-center flex flex-col justify-between items-center">
            <img
              src="/numbers.png"
              alt="Image Alt Text"
              className="h-[170px] w-[160px]"
            />
            <div className="button2">
              <button className="Go bg-[#00abff] h-10 w-[240px] text-[20px]   mb-2 mt-2 rounded-lg hover:bg-[#1A2CA0] text-white">
                Numero
              </button>
            </div>
          </div>
          <div className="hugis  pt-8 rounded-lg bg-[#41545B] h-[221px] md:h-auto w-[249px] md:w-auto border-4 border-[#BF977B]  text-center flex flex-col justify-between items-center">
            <img
              src="/listen.png"
              alt="Image Alt Text"
              className="h-[170px] w-[160px]"
            />
            <div className="button2">
              <button className="Go bg-[#00abff] h-10 w-[240px] text-[20px] mb-2 mt-2  rounded-lg hover:bg-[#1A2CA0] text-white">
                Pag unawa sa Napakingan
              </button>
            </div>
          </div>
          <div className="hugis pt-8  rounded-lg bg-[#41545B] h-[221px] md:h-auto w-[249px]  border-4 border-[#BF977B] md:w-auto text-center flex flex-col justify-between items-center">
            <img
              src="/language.png"
              alt="Image Alt Text"
              className="h-[170px] w-[160px]"
            />
            <div className="button2">
              <button className="Go bg-[#00abff] h-10 w-[240px] text-[20px] mb-2 mt-2 rounded-lg  hover:bg-[#1A2CA0] text-white">
               Wika at Gramatika
              </button>
            </div>
          </div>
          <div className="hugis  pt-8 rounded-lg bg-[#41545B] h-[221px] md:h-auto w-[249px] md:w-auto text-center border-4 border-[#BF977B]  flex flex-col justify-between items-center">
            <img
              src="/reading.png"
              alt="Image Alt Text"
              className="h-[170px] w-[160px]"
            />
            <div className="button2">
              <button className="Go bg-[#00abff] h-10 w-[240px] text-[20px] mb-2 mt-2 rounded-lg hover:bg-[#1A2CA0] text-white">
                Pag Unawa sa Binasa
              </button>
            </div>
          </div>
          <div className="hugis  pt-8 rounded-lg bg-[#41545B] h-[221px] md:h-auto w-[249px]  border-4 border-[#BF977B]  md:w-auto text-center flex flex-col justify-between items-center">
            <img
              src="/vocabulary.png"
              alt="Image Alt Text"
              className="h-[170px] w-[160px]"
            />
            <div className="button2">
              <button className="Go bg-[#00abff] h-10 w-[240px] text-[20px] mb-2 mt-2 rounded-lg hover:bg-[#1A2CA0] text-white">
                Talasalitaan
              </button>
            </div>
          </div>
          <div className="hugis  pt-8 rounded-lg bg-[#41545B] h-[221px] md:h-auto w-[249px] md:w-auto  border-4 border-[#BF977B] text-center flex flex-col justify-between items-center">
            <img
              src="/phonics.png"
              alt="Image Alt Text"
              className="h-[160px] w-[160px]"
            />
            <div className="button2">
              <button className="Go bg-[#00abff] h-10 w-[240px] text-[20px] mb-2 mt-2 rounded-lg hover:bg-[#1A2CA0] text-white">
                Ponolohiya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
