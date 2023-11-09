import React, { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  // Layout-Logik hier
  return <div>{children}</div>;
};

export default RootLayout;