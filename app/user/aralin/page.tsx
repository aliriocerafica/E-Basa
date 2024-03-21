import React from "react";
import UserNav from "../components/UserNav";
import SideNav from "../components/SideNav";
import "../css/userpage.css";

const page = () => {
  return (
    <div>
      <UserNav />
      <SideNav />
      <div className="page-container2">
        <div className="prev mr-10">
          <img src="/prev.png"></img>
        </div>
        <div className="Aralin h-[750px] bg-[#FFFF] w-[1300px] rounded-lg shadow-md"></div>
        <div className="next ml-10">
          <img src="/next.png"></img>
        </div>
      </div>
    </div>
  );
};

export default page;
