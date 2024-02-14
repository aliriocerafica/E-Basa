'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../css/sidenav.css";
import { Card, List, ListItem, ListItemSuffix, Chip } from "@material-tailwind/react";
import StudentList from "./StudentList";

export function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [topNavWidth, setTopNavWidth] = useState("100%");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setTopNavWidth(isOpen ? "100%" : "83.3%");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
        setTopNavWidth("100%");
      } else {
        setIsOpen(true);
        setTopNavWidth("100%");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    // const [showStudentList, setShowStudentList1] = useState(false);
    const [showStudentList, setShowStudentList2] = useState(false);
  
    // const handleClick1 = () => {
    //   setShowStudentList(true);
    // };
  
    const handleClick2 = () => {
      setShowStudentList2(true);
    };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between p-4 border-b border-blue-gray-200 top-nav" style={{ width: topNavWidth }}>
        <button className="text-blue-gray-600 focus:outline-none" onClick={toggleSidebar}>
          <img src="/toggle.png" alt="Toggle Icon" className="h-8 w-8 ml-4" />
        </button>
        <input type="text" placeholder="Search..." className="search mb-4 sm:mb-0" />
        <div className="flex items-center">
          <span className="mr-2">John Doe Admin </span>
          {/* <UserCircleIcon className="h-8 w-8 text-blue-gray-600" /> */}
        </div>
      </div>

      {isOpen && (
        <Card className="h-[calc(100vh-6rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 side-nav">
          <div className="mb-2 p-4 v">
            <img src="/loading4.png" alt="Logo" className="h-20 w-auto pl-10" />
          </div>

          <List className="space-y-2">
            <ListItem className="flex items-center home-side">
              <span className="ml-2 home">HOME</span>
            </ListItem>
            <ListItem className="flex items-center list-side" onClick={handleClick2}>
            <span className="ml-2 list">STUDENT LIST</span>
              {/* <Link href="/StudentList">
              </Link> */}
            </ListItem>
            <ListItem className="flex items-center rank-side">
              <span className="ml-2 rank">STUDENT RANKINGS</span>
              <ListItemSuffix>
                <Chip value="" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem className="flex items-center test-side">
              <span className="ml-2 test">TEST</span>
            </ListItem>
            <ListItem className="flex items-center blank-side">
              <span className="ml-2 blank">BLANK</span>
            </ListItem>
          </List>
        </Card>
      )}
    {showStudentList && <StudentList />}
    </div>
  );
}

export default SideNav;
