import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowRightIcon } from '@heroicons/react/solid';

const HoverButton = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;

    gsap.set(text, { y: 0 });

    const handleMouseEnter = () => {
      gsap.to(button, { backgroundColor: '#f39c12', duration: 0.3 }); // Change color as needed
      gsap.to(text, { y: -5, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(button, { backgroundColor: 'transparent', duration: 0.3 });
      gsap.to(text, { y: 0, duration: 0.3 });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="my-4 flex py-3 border-white border gap-2 rounded-full items-center px-10"
    >
      <div ref={textRef} className="text-base">
        Explore
      </div>
      <div className="hidden md:flex">
        <ArrowRightIcon  className="w-10 h-6" />
      </div>
    </button>
  );
};

export default HoverButton;
