import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Img1 from "../../assets/automobiles.jpg";
import Img2 from "../../assets/investments.jpg";
import Img3 from "../../assets/realestate.jpg";
import Img8 from "../../assets/healthcare.jpg";
import Img5 from "../../assets/education.jpg";

const Sectors = () => {
    const [currentBackground, setCurrentBackground] = useState(Img1); // Initial background image

    const handleHover = (image) => {
      setCurrentBackground(image);
    };

    const headingRef = useRef(null); // Ref for the heading element

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateSectors();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(headingRef.current);

      return () => {
        observer.disconnect();
      };
    }, []);

    const animateSectors = () => {
      const timeline = gsap.timeline();
  
      // Animation for heading
      timeline.fromTo(
        headingRef.current,
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 1, ease: 'power3.out' }
      );
  
      // Additional animations can be added here as needed
    };

    return (
      <div>
        <div className="flex hidden md:block">
          <div className="font-extrabold text-5xl mb-6 ml-10 mt-10" ref={headingRef}>
            EXPLORE OUR SECTORS
          </div>
          <div
            className="flex hidden md:block"
            style={{
              backgroundImage: `url(${currentBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'background-image 0.3s ease-in-out',
              height: '100vh',
            }}
          >
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="flex w-full h-full justify-between">
                <div
                  className="flex hidden md:flex border-r border-white cursor-pointer"
                  onMouseEnter={() => handleHover(Img1)}
                >
                  <div className="pb-1 text-white mt-40 relative">
                    <div className="group mt-80 text-xl text-center py-16 mr-8 px-4  hover:text-white transition-opacity relative overflow-hidden">
                      <div className="transform group-hover:-translate-y-12 transition-transform duration-300">
                        AUTOMOBILES
                      </div>
                      <div className="transform group-hover:-translate-y-12 text-lg opacity-0 group-hover:opacity-100 transition-transform transition-opacity duration-300 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex hidden md:flex border-r border-white cursor-pointer"
                  onMouseEnter={() => handleHover(Img2)}
                >
                  <div className="pb-1 text-white mt-40 relative">
                    <div className="group mt-80 text-xl text-center py-16 mr-8 px-4  hover:text-white  transition-opacity relative overflow-hidden">
                      <div className="transform group-hover:-translate-y-12 transition-transform duration-300">
                        INVESTMENT
                      </div>
                      <div className="transform group-hover:-translate-y-12 text-lg opacity-0 group-hover:opacity-100 transition-transform transition-opacity duration-300 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex hidden md:flex border-r border-white cursor-pointer"
                  onMouseEnter={() => handleHover(Img3)}
                >
                  <div className="pb-1 text-white mt-40 relative">
                    <div className="group mt-80 text-xl text-center py-16 mr-8 px-4  hover:text-white  transition-opacity relative overflow-hidden">
                      <div className="transform group-hover:-translate-y-12 transition-transform duration-300">
                        REAL ESTATE
                      </div>
                      <div className="transform group-hover:-translate-y-12 text-lg opacity-0 group-hover:opacity-100 transition-transform transition-opacity duration-300 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex hidden md:flex border-r border-white cursor-pointer"
                  onMouseEnter={() => handleHover(Img8)}
                >
                  <div className="pb-1 text-white mt-40 relative">
                    <div className="group mt-80 text-xl text-center py-16 mr-8 px-4  hover:text-white  transition-opacity relative overflow-hidden">
                      <div className="transform group-hover:-translate-y-12 transition-transform duration-300">
                        HEALTHCARE
                      </div>
                      <div className="transform group-hover:-translate-y-12 text-lg opacity-0 group-hover:opacity-100 transition-transform transition-opacity duration-300 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex hidden md:flex border-r border-white cursor-pointer"
                  onMouseEnter={() => handleHover(Img5)}
                >
                  <div className="pb-1 text-white mt-40 relative">
                    <div className="group mt-80 text-xl text-center py-16 mr-8 px-4  hover:text-white  transition-opacity relative overflow-hidden">
                      <div className="transform group-hover:-translate-y-12 transition-transform duration-300">
                        EDUCATION
                      </div>
                      <div className="transform group-hover:-translate-y-12 text-lg opacity-0 group-hover:opacity-100 transition-transform transition-opacity duration-300 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more sectors as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Sectors;
