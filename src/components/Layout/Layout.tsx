import React from 'react';
export interface LayoutInterface {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return (
    <div className="w-full h-full bg-gray-300 py-[50px] px-[50px]">
      {children}
    </div>
  );
};

export default Layout;
