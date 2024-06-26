// Section.js

import React from 'react';
import gsap from 'gsap';

const Section = ({ id, title, backgroundUrl, defaultBackground }) => {
  // Function to change background image
  const changeBackground = (imageUrl) => {
    gsap.to(`#${id}`, { duration: 0.5, backgroundImage: `url(${imageUrl})` });
  };

  // Reset background to default
  const resetBackground = () => {
    gsap.to(`#${id}`, { duration: 0.5, backgroundImage: `url(${defaultBackground})` });
  };

  return (
    <div
      id={id}
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${defaultBackground})` }}
      onMouseEnter={() => changeBackground(backgroundUrl)}
      onMouseLeave={resetBackground}
    >
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="flex w-full h-full justify-between">
          <div className="flex hidden md:flex border-r border-white">
            <div className="pb-1 text-white items-end mt-56">
              <div className="mt-80 text-xl text-center mr-8 px-4">{title}</div>
            </div>
          </div>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default Section;
