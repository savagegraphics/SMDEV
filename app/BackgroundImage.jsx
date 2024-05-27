import React from 'react';

const BackgroundImage = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
        {/* This empty div keeps the background image fixed */}
      </div>
      <div className="relative z-10 w-full h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
