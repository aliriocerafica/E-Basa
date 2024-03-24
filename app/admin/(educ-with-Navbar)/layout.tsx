'use client'
import React from 'react';
import NavigationBar from '../components/Educ-NavigationBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-teal-100">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
};

export default Layout;
