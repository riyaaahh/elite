import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Img1 from "../../assets/lambo.jpg";
import Img2 from "../../assets/zenvo.jpg";
import Img3 from "../../assets/jetour.jpg";
import Img8 from "../../assets/elitecars.jpg";
import Img5 from "../../assets/suncoty.jpg";

const Partners = () => {
  const [currentBackground, setCurrentBackground] = useState(Img1); // Initial background image

  const handleHover = (image) => {
    setCurrentBackground(image);
  };

  const headingRef = useRef(null); // Ref for the heading element

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animatePartners();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(headingRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animatePartners = () => {
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
      <div className="ml-4 mt-8 md:hidden">
        <div className="font-extrabold text-3xl mb-6">
          EXPLORE OUR PARTNERS
        </div>
        <div className="flex items-center overflow-x-auto ">
          <div className="text-black p-1  border   text-xs px-4 border-black rounded-full flex items-center justify-center">
            Lamborghini
          </div>

          <div className="ml-2 text-black p-1  border   text-xs px-4 border-black rounded-full flex items-center justify-center">
            Jetour              </div>

          <div className="ml-2  text-black p-1  border   text-xs px-4 border-black rounded-full flex items-center justify-center">
            Lamborghinis
          </div>
        </div>

        <div className="mt-4 lg:mt-16 flex overflow-x-auto gap-8 justify-between">
          <div
            className="transform  md:block lamborghini-image rounded-md"
          // style={{ width: "calc(33.33% - 1rem)" }}
          >
            <div className="relative h-full">
              <div
                className="inset-0 bg-cover bg-center hover:scale-95 transition-transform rounded-md duration-300  min-h-[350px] max-h-[350px] min-w-[90vw] max-w-[90vw]"
                style={{
                  backgroundImage: `url(${Img1})`, backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="z-10  h-full flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-md min-h-[350px] max-h-[350px] min-w-[90vw] max-w-[90vw] px-3 text-center">

                  <div className="text-white font-extrabold text-2xl text-nowrap ">
                    Lamborghini
                  </div>
                  <div className="text-white   font-normal text-wrap">
                    Ultimate Motors upholds its dedication to  delivering unrivaled excellence in customer experience and top-tier automotive services.
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div
            className="transform  md:block lamborghini-image rounded-md"
          // style={{ width: "calc(33.33% - 1rem)" }}
          >
            <div className="relative h-full">
              <div
                className="inset-0 bg-cover bg-center hover:scale-95 transition-transform rounded-md duration-300  min-h-[350px] max-h-[350px] min-w-[90vw] max-w-[90vw]"
                style={{
                  backgroundImage: `url(${Img2})`, backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="z-10  h-full flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-md min-h-[350px] max-h-[350px] min-w-[90vw] max-w-[90vw] px-3 text-center">

                  <div className="text-white font-extrabold text-2xl text-nowrap ">
                    Zenvo
                  </div>
                  <div className="text-white   font-normal text-wrap">
                    Ultimate Motors upholds its dedication to  delivering unrivaled excellence in customer experience and top-tier automotive services.
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div
            className="transform  md:block lamborghini-image rounded-md"
          // style={{ width: "calc(33.33% - 1rem)" }}
          >
            <div className="relative h-full">
              <div
                className="inset-0 bg-cover bg-center hover:scale-95 transition-transform rounded-md duration-300  min-h-[350px] max-h-[350px] min-w-[90vw] max-w-[90vw]"
                style={{
                  backgroundImage: `url(${Img1})`, backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="z-10  h-full flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-md min-h-[350px] max-h-[350px] min-w-[90vw] max-w-[90vw] px-3 text-center">

                  <div className="text-white font-extrabold text-2xl text-nowrap ">
                    JETEOUR
                  </div>
                  <div className="text-white   font-normal text-wrap">
                    Ultimate Motors upholds its dedication to  delivering unrivaled excellence in customer experience and top-tier automotive services.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="flex hidden md:block">
        <div className="font-extrabold text-5xl mb-6 ml-10 mt-10" ref={headingRef}>
          EXPLORE OUR PARTNERS
        </div>
        <div
          className="flex hidden md:block"
          style={{
            backgroundImage: `url(${currentBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.3s ease-in-out',
            height: '100vh', // Adjust height as needed
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
                      LAMBORGHINI
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
                      ZENVO AUTOMOBILE
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
                      JETOUR
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
                      THE ELITE CARS
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
                      SUN CITY MOTORS
                    </div>
                    <div className="transform group-hover:-translate-y-12 text-lg opacity-0 group-hover:opacity-100 transition-transform transition-opacity duration-300 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more partners as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
