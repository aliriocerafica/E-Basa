'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.push('/user');
    }
  },); 

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;
