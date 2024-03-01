import React, { useState, useEffect } from "react";
import "../css/sidenav.css";
import { Card, List, ListItem, ListItemSuffix, Chip } from "@material-tailwind/react";
import Link from 'next/link';

export function SideNav() {
  const [isOpen, setIsOpen] = useState(true); // Initialize isOpen to true by default
  const [topNavWidth, setTopNavWidth] = useState("100%");
  const [showAddStudent, setShowAddStudent] = useState(false);

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

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between p-4 border-b border-blue-gray-200 top-nav" style={{ width: topNavWidth }}>
        <button className="text-blue-gray-600 focus:outline-none" onClick={toggleSidebar}>
          <img src="/toggle.png" alt="Toggle Icon" className="h-8 w-10 ml-4" />
        </button>
        <div className="relative">
          <input type="text" placeholder="Search..." className="search text-black-400 " />
          <div className="absolute inset-y-0 right-0 mb-4 float-right  pointer-events-none">
            <img src="/search.png" alt="Search Icon" className="h-16 w-14 pb-[20px] mb-2 text-black-400" />
          </div>
        </div>

        <div className="flex items-center">
          <span className="mr--">John Doe Admin </span>
          <img src="/user.png" alt="User" className="h-12 w-12 text-blue-gray-600" />
        </div>
      </div>

      {isOpen && (
        <Card className="h-[calc(100vh-6rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 side-nav">
          <div className="mb-1 p-2 ">
            <img src="/loading4.png" alt="Logo" className="h-16 w-auto ml-[80px]" />
          </div>

          <List className="space-y-2">
            <Link href="/admin/dashboard">
              <ListItem className="tex-left home-side">
              <span className=" home">Home</span>
              </ListItem>
            </Link>
            <Link href="/admin/list">
              <ListItem className="flex items-center list-side">
              <span className="ml-2 list">Student List</span>
              </ListItem>
            </Link>
            <Link href="/admin/rank">
            <ListItem className="flex items-center rank-side">
              <span className="ml-2 rank">Student Rankings</span>
              <ListItemSuffix>
                <Chip value="" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            </Link>
            <ListItem className="flex items-center test-side">
              <span className="ml-2 test">Test</span>
            </ListItem>
            <ListItem className="flex items-center blank-side">
              <span className="ml-2 blank">Sample</span>
            </ListItem>
          </List>
        </Card>
      )}
    </div>
  );
}

export default SideNav;