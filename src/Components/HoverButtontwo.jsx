import React from 'react';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
const HoverButtontwo = () => {
    const buttonRef = useRef(null);
    const textRef = useRef(null);
    const circleRef = useRef(null); // Reference for circular background div
  
    useEffect(() => {
      const button = buttonRef.current;
      const text = textRef.current;
      const circle = circleRef.current;
  
      gsap.set(text, { y: 0 });
  
      const handleMouseEnter = () => {
        gsap.to(button, { backgroundColor: '#000', duration: 0.3 });
        gsap.to(circle, { scale: 1, duration: 0.3, ease: 'power2.out' }); // Expand circle
        gsap.to(text, { y: -5, duration: 0.3 });
      };
  
      const handleMouseLeave = () => {
        gsap.to(button, { backgroundColor: 'transparent', duration: 0.3 });
        gsap.to(circle, { scale: 0, duration: 0.3, ease: 'power2.in' }); // Shrink circle
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
        className="my-4 flex py-3 border-black border gap-2 lg:mt-8 rounded-full items-center px-10 relative overflow-hidden"
      >
        <div ref={circleRef} className="bg-circle absolute rounded-full"></div>
        <div ref={textRef} className="text-base relative z-10">
         ReadMore
        </div>
        <div className="hidden md:flex">
          <ArrowRightIcon className="w-10 h-6 relative z-10" />
        </div>
      </button>
    );
  };

export default HoverButtontwo;
