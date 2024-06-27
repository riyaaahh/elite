import React, { useEffect, useRef } from 'react';
import AboutImage from '../../assets/AboutImgMob.png';
import { gsap } from 'gsap';
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const AboutUs = () => {

  const aboutUsTitleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateAboutUs();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(aboutUsTitleRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateAboutUs = () => {
    const timeline = gsap.timeline();

    // Animation for "ABOUT US" title
    timeline.fromTo(
      aboutUsTitleRef.current,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Additional animations can be added here as needed
  };
  return (
    <div className="px-[3%]">
      <div className="my-10 sm:flex sm:flex-row-reverse sm:items-center">
        <div className="xl:px-24 sm:shrink-1 sm:w-1/2">
          <div className="text-xl sm:text-4xl lg:text-5xl font-extrabold mb-4" ref={aboutUsTitleRef} s>ABOUT US</div>
          <p className="mb-4 text-[#404040] text-xs md:text-sm">
            Elite Group Holding Ltd, is more than just a group holding company. We are visionaries, innovators and creators of tomorrow’s possibilities.
          </p>
          <p className="mb-4 text-[#404040] text-xs md:text-sm">
            We believe in the power of purpose-driven business. Our commitment revolves around enhancing the quality of life within the communities we serve and continuously seeking new avenues for fostering growth.
          </p>
          <button className="my-4 p-3 p-4 py-3 py-4 hidden md:flex flex bg-black border text-white rounded-full items-center px-16">
            <div className="text-lg">Read More</div>
            <div className="hidden md:flex mt-1">
              <ArrowRightIcon className="w-6 h-6" />
            </div>
          </button>
        </div>

        <div className="relative sm:w-1/2 sm:grow sm:shrink-0 sm:-mt-10 sm:-ms-[3.5%] overflow-hidden">
          <div className="hidden sm:block absolute bg-white w-1/4 h-[120%] rotate-12 -right-[5%]"></div>
          <img src={AboutImage} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  )
}

export default AboutUs