import React, { useState, useEffect } from "react";
import "../css/sidenav.css";
import { Dosis } from 'next/font/google';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [topNavWidth, setTopNavWidth] = useState("100%"); // Initialize top nav width

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setTopNavWidth(isOpen ? "100%" : "83.3%"); // Adjust top nav width when sidebar is toggled
  };

  useEffect(() => {
    const handleResize = () => {
      // Close sidebar if screen width is less than 768px
      if (window.innerWidth < 768) {
        setIsOpen(false);
        setTopNavWidth("100%"); // Set top nav width to 100% when sidebar is closed on small screens
      } else {
        // Open sidebar if screen width is increased beyond 768px
        setIsOpen(true);
        setTopNavWidth("100%"); // Set top nav width to 80% when sidebar is open on larger screens
      }
    };

    // Add event listener for resize event
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures effect only runs once after mount

  return (
    <div>
      {/* Top Navigation */}
      <div className="flex flex-col sm:flex-row justify-between p-4 border-b border-blue-gray-200 top-nav" style={{ width: topNavWidth }}>
        {/* Sidebar Toggle Button */}
        <button className="text-blue-gray-600 focus:outline-none" onClick={toggleSidebar}>
        <img src="/toggle.png" alt="Toggle Icon" className="h-8 w-8 ml-4" />
        </button>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="search mb-4 sm:mb-0"
        />
      
        {/* Profile Icon */}
              <div className="flex items-center">
        <span className="mr-2">John Doe Admin </span>
        <UserCircleIcon className="h-8 w-8 text-blue-gray-600" />
      </div>
      </div>

      {/* Side Navigation */}
      {isOpen && (
        <Card className="h-[calc(100vh-6rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 side-nav ">
          <div className="mb-2 p-4 v">
            <img src="/loading4.png" alt="Logo" className="h-20 w-auto pl-10" />
          </div>

          <List className="space-y-2 ">
            <ListItem className="flex items-center home-side">
              <span className="ml-2 home">HOME</span>
            </ListItem>
            <ListItem className="flex items-center list-side">
              <span className="ml-2 list">STUDENT LIST</span>
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
    </div>
  );
}

export default SideNav;
