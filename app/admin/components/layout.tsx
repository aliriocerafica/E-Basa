// components/Layout.tsx

import React from 'react';
import NavigationBar from './NavigationBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
};

export default Layout;
