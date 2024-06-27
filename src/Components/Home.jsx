import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AboutImg from "./../assets/AboutImg.png";
import AboutImgMob from "./../assets/AboutImgMob.png";

import LamborghiniMob from "../assets/LamborghiniMob.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Linkedin from "../assets/Linkedin.png";
import Youtube from "../assets/Youtube.png";
import Instagram from "../assets/Instagram.png";
import ImgMob4 from "../assets/ImgMob4.png";
import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import Img5 from "../assets/Img5.png";
import ImgMob1 from "../assets/ImgMob1.png";
import ImgMob3 from "../assets/ImgMob3.png";
import Footer from "../assets/Footer.png";
import Logo from "./../assets/Logo.png";
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.png";
import Logo5 from "../assets/Logo5.png";
import Logo6 from "../assets/Logo6.png";
import Logo7 from "../assets/Logo7.png";
import FB from "../assets/FB.png";
import IG from "../assets/IG.png";
import Lin from "../assets/Lin.png";
import Twtr from "../assets/Twtr.png";
import Yt from "../assets/Yt.png";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Solid icons from Heroicons v1
import Img6 from "../assets/Img6.png";
import Img8 from "../assets/Img8.png";
import ArrowLeft from "../assets/ArrowLeft.png";
import ArrowRight from "../assets/ArrowRight.png";
import HomeVideo1 from "./../assets/HomeVideo1.mp4";
import HomeVideo2 from "./../assets/HomeVideo2.mp4";
import HoverButton from "./HoverButton";
import AboutUs from "./AboutUs";
import Highlights from "./Highlights";
import Lamborghini from "./Lamborghini";
import {  useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const [currentBackground, setCurrentBackground] = useState(Img1); // Initial background image

  const handleHover = (image) => {
    setCurrentBackground(image);
  };
  const welcomeRef = useRef(null);
  const drivingExcellenceRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(welcomeRef.current, 
      { y: '100%', opacity: 0 }, // Start state: off-screen below and invisible
      { y: '0%', opacity: 1, duration: 1, ease: 'power3.out' } // End state: current position and visible
    );

    timeline.fromTo(drivingExcellenceRef.current, 
      { y: '100%', opacity: 0 }, // Start state: off-screen below and invisible
      { y: '0%', opacity: 1, duration: 1, ease: 'power3.out' }, // End state: current position and visible
      '-=0.5' // Overlap the animations by 0.5 seconds
    );

  }, []);
  return (
    <div className="h-screen w-screen ">
      <div className="relative bg-black h-[100vh] w-screen text-white font-barlow">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 top-0 w-screen h-full object-cover video-banner"
        >
          <source
            className=""
            src={
              "https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/2kGlRV2Dpux0RDnBHIZ6Bshag0Z06p3DXqs7WqjK.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10">
          <Navbar />
          <div className="px-8 py-28">
      <div className="lg:text-2xl sm:text-base font-barlow" ref={welcomeRef}>
        WELCOME TO ELITE GROUP HOLDINGS
      </div>
      <div className="lg:text-6xl sm:text-3xl font-barlow text-3xl font-bold my-4" ref={drivingExcellenceRef}>
        DRIVING EXCELLENCE <br />
        BUILDING FEATURES
      </div>
            <HoverButton />

            <div className="flex gap-8 mt-40 w-full">
              <div>
                <div className=" pb-1 text-white ">
                  <div>Our Company</div>
                  <div className="border-b border-x-woodsmoke-400 p-1 px-20 "></div>
                </div>
              </div>
              <div className="flex hidden md:flex">
                <div className=" pb-1 text-white ">
                  <div>Automotive</div>
                  <div className="border-b border-white p-1 px-20 "></div>
                </div>
              </div>
              <div className="flex hidden md:flex">
                <div className=" pb-1 text-white ">
                  <div>Investments</div>
                  <div className="border-b border-white p-1 px-20 "></div>
                </div>
              </div>
              <div className="flex hidden md:flex">
                <div className=" pb-1 text-white ">
                  <div>Real-Estate</div>
                  <div className="border-b border-white p-1 px-20 "></div>
                </div>
              </div>
              <div className="flex hidden md:flex">
                <div className=" pb-1 text-white ">
                  <div>Healthcare</div>
                  <div className="border-b border-white p-1 px-20 "></div>
                </div>
              </div>
              <div className=" flex hidden md:flex">
                <div className=" pb-1 text-white ">
                  <div>Education</div>
                  <div className="border-b border-white p-1 px-20 "></div>
                </div>
              </div>
              <div className=" flex hidden md:flex">
                <div className=" pb-1 text-white ">
                  <div>Ecommerce</div>
                  <div className="border-b border-white p-1 px-20 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="font-barlow flex flex-col  bg-blackhaze-500">
      <AboutUs/>

        <div className="ml-4 mt-4 md:hidden">
          <div className="font-extrabold text-3xl mb-6">
            EXPLORE OUR GROUP COMPANIES
          </div>
          <div className="  ">
            <div className="flex gap-1 mb-3">
              <div className="text-black p-1  border  text-xs px-4 border-black rounded-full">
                AUTOMOTIVE
              </div>
              <div className=" text-black p-1 border text-xs px-4 border-black rounded-full">
                INVESTMENTS
              </div>
              <div className=" text-black p-1  border text-xs px-4 text-nowrap border-black rounded-full">
                REAL ESTATE
              </div>
            </div>
            <div className="flex gap-2 mb-3"></div>
            <div className="flex gap-1 mb-3">
              <div className=" text-black p-1  border text-xs px-4 border-black rounded-full">
                EDUCATION
              </div>
              <div className=" text-black  border p-1   text-xs px-4 border-black rounded-full">
                E-COMMERCE
              </div>
            </div>
          </div>
        </div>
        <div className="relative inline-block  md:hidden">
          <img src={ImgMob1} className="w-full mt-4" />
          <div className="absolute top-0 left-0 w-full h-full text-white  justify-center  my-36 items-center mb-24">
            <div className="absolute ">
              <div className="text-xl text-center mb-3">
                Lamborghini Abu Dhabi and Dubai
              </div>
              <div className="text-base mx-12">
                Ultimate Motors upholds its dedication to
                <br />
                delivering unrivaled excellence in <br />
                customer experience and top-tier <br />
                automotive services.
              </div>
            </div>
            <div className="flex justify-between mt-52 mr-8 ml-4 ">
              <div>
                <img className="border border-white p-1 px-2" src={ArrowLeft} />
              </div>
              <div>
                <img
                  className="border border-white p-1 px-2"
                  src={ArrowRight}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex hidden md:block">
          <div className="font-extrabold text-5xl mb-6 ml-10 mt-10">
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
             <div className="pb-1 text-white mt-40  relative">
  <div className="group mt-80 text-xl text-center py-16 mr-8 px-4  hover:text-white transition-opacity relative overflow-hidden">
    <div className="transform group-hover:-translate-y-12 transition-transform duration-300">
AUTOMOBILES    </div>
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
REAL ESTATE    </div>
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
          <div
            className="flex hidden md:flex border-r border-white cursor-pointer"
            onMouseEnter={() => handleHover(Img6)}
          >
          <div className="pb-1 text-white mt-40 relative">
  <div className="group mt-80 text-xl text-center py-16 mr-8 px-4  hover:text-white  transition-opacity relative overflow-hidden">
    <div className="transform group-hover:-translate-y-12 transition-transform duration-300">
      ECOMMERCE
    </div>
    <div className="transform group-hover:-translate-y-12 text-lg opacity-0 group-hover:opacity-100 transition-transform transition-opacity duration-300 mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    </div>
  </div>
</div>





          </div>
        </div>
      </div>
    </div>
        </div>

        <div className="">
          <Highlights/>
       
          <div className="ml-4 mt-8 md:hidden">
          <div className="font-extrabold text-3xl mb-6">
            EXPLORE OUR PARTNERS
          </div>
          <div className="  ">
            <div className="flex gap-1 mb-3">
              <div className="text-black p-1  border  text-xs px-4 border-black rounded-full">
              Lamborghini
              </div>
              <div className=" text-black p-1 border text-xs px-4 border-black rounded-full">
              Zenvo Automobile
              </div>
              <div className=" text-black p-1  border text-xs px-4 text-nowrap border-black rounded-full">
              Jetour              </div>
            </div>
            <div className="flex gap-2 mb-3"></div>
            <div className="flex gap-1 mb-3">
              <div className=" text-black p-1  border text-xs px-4 border-black rounded-full">
              The Elite Cars
              </div>
              <div className=" text-black  border p-1   text-xs px-4 border-black rounded-full">
              Sun city Motors
              </div>
            </div>
          </div>
        </div>

        <div className="flex hidden md:block">
          <div className="font-extrabold text-5xl mb-6 ml-10 mt-10">
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
             <div className="pb-1 text-white mt-40  relative">
  <div className="group mt-80 text-xl text-center py-16 mr-8 px-4  hover:text-white transition-opacity relative overflow-hidden">
    <div className="transform group-hover:-translate-y-12 transition-transform duration-300">
    LAMBORGHINI     </div>
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
    JETOUR   </div>
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
    SUN CITY MOTORS    </div>
    <div className="transform group-hover:-translate-y-12 text-lg opacity-0 group-hover:opacity-100 transition-transform transition-opacity duration-300 mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    </div>
  </div>
</div>

          </div>
        
        </div>
      </div>
    </div>
        </div>
        <Lamborghini/>
          <div className=" m-6 md:hidden">
            <div className="flex justify-between">
              <div className="font-extrabold text-base text-nowrap  ">
                {" "}
                NEWS
              </div>
              <div className="text-center text-sm ">SWIPE</div>
            </div>{" "}
            <div className="flex justify-between">
              <div className="font-extrabold text-2xl text-nowrap  my-4">
                LAMBORGHINI WORLD
              </div>
            </div>
            <div>
              <img src={LamborghiniMob} />
            </div>
            <div className="mt-5 m-2">
              <div className="text-masala-500 font-bold">
                May 20, 2024, Dubai, UAE
              </div>
              <div className="font-bold text-xl my-3">
                LAMBORGHINI URUS SE DEBUTS IN GERMANY
              </div>

              <div>LAMBORGHINI URUS SE DEBUTS IN GERMANY</div>
              <div>
                {" "}
                <button className=" p-1 border-chicago-400 mt-2 border text-chicago-400 rounded-full px-10 ">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
       <div className="flex">
            <div className="flex flex-col md:hidden">
              <div className="relative inline-block">
                <img src={ImgMob4} alt="Footer Image" className="w-screen" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                <div>
                  <div className="absolute top-0 left-0 w-full h-full text-white m-8  mr-36 mb-24">
                    <div className="w-[800px]">
                      <div className="font-extrabold text-4xl text-white">
                        {" "}
                        OUR BRANDS
                      </div>
                      <div className="text-nobel-400 mt-8 mr-24 ">
                        Our portfolio showcases a diverse range of projects in
                        <br />
                        different scales and styles, reflecting our commitment
                        <br />
                        to excellence and innovation in design. With a team of{" "}
                        <br /> experienced architects, designers and engineers,
                        <br />
                        ELITE GROUP provides end-to-end solutions that <br />{" "}
                        change people's life.
                      </div>
                      <div className="mt-12 mr-96 ">
                        <div className="flex justify-between ">
                          <div>
                            <img src={Logo2} />
                          </div>
                          <div>
                            <img src={Logo3} />
                          </div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-woodsmoke-500     ">
                <div className="px-10 mr-20 ml-8">
                  <div className=" flex my-8 mx-6 ">
                    <img src={Logo} alt="Logo" />
                  </div>
                  <div className=" justify-between mr-12">
                    <div className="">
                      <div className="text-white text-3xl">ABOUT US</div>
                      <div className="text-white text-sm mt-6 text-nowrap ">
                        We are pragmatic in our approach to design and handle
                        each
                        <br /> project in accordance with its particular set of
                        requirements
                        <br /> and imperatives. When working in conservation
                        areas or on
                        <br /> listed buildings we aim to respect and retain the
                        best of the
                        <br /> historic elements and to supplement these with
                        contemporary
                        <br />
                        interventions wherever appropriate.
                      </div>
                    </div>
                    <div className="flex justify-between mt-4">
                      <div className="text-masala-300">
                        <div className="text-white font-semibold">
                          Navigation
                        </div>
                        <div className="mt-3">Home </div>

                        <div>About Group</div>
                        <div>Group Companies</div>
                        <div>Careers </div>
                        <div>Media Center</div>
                        <div>Contact Us</div>
                      </div>
                      <div className="text-masala-300">
                        <div className="text-white font-semibold">
                          Our Sectors
                        </div>
                        <div className="mt-3">Automotive</div>

                        <div>Investments</div>
                        <div>Group Companies</div>
                        <div>Real Estate </div>
                        <div> Healthcare</div>
                        <div>   Education</div>

                        <div> Ecommerce</div>
                      </div>
                    </div>
                    <div className="text-masala-300 mt-8">
                      <div className="text-white mt-6">Subscribe</div>
                      <div className="my-6 text-sm">
                        Subscribe to our Newsletter to be up to date with the{" "}
                        <br /> latest automotive news and our amazing deals
                      </div>

                      <div>
                        <form className="">
                          <div className="mb-6 mt-2">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="shadow appearance-none  rounded-full w-full py-1 bg-chicago-500 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                              placeholder=" Your email Address"
                              required
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <button
                              type="submit"
                              className="border border-white w-full text-white  py-1 px-4 rounded-full focus:outline-none focus:shadow-outline"
                            >
                              SUBMIT
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="flex mt-6 gap-5">
                        <div>
                          <img src={Facebook} className="w-12 h-15" />
                        </div>
                        <div>
                          <img src={Linkedin} className="w-12 h-15" />
                        </div>
                        <div>
                          <img src={Instagram} className="w-12 h-15" />
                        </div>
                        <div>
                          <img src={Youtube} className="w-12 h-15" />
                        </div>
                        <div>
                          <img src={Twitter} className="w-12 h-15" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full border-t border-white"></div>
                <div className="p-5 text-chicago-500 text-sm">
                  <div className="text-nowrap my-4">
                    {" "}
                    Copyright © 2024 | ALL RIGHTS RESERVED | The Elite Cars LLC
                  </div>
                  <div>
                    <span className="text-white font-bold text-nowrap text-xs">
                      Disclaimer:
                    </span>{" "}
                    The Elite Cars is not endorsed by, directly affiliated with,
                    maintained or sponsored by any car manufacturer.
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-woodsmoke-500 hidden md:block ">
              <div className="relative inline-block">
                <img
                  src={Footer}
                  alt="Footer Image"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                <div className="">
                  <div className="absolute top-8 left-20 right-80 w-full h-full text-white   ">
                    <div className=" mx-20 ">
                      <div className="font-extrabold w-[200]  text-4xl text-white">
                        {" "}
                        OUR BRANDS
                      </div>
                      <div className="text-nobel-500 w-[700px] ">
                        Our portfolio showcases a diverse range of projects in
                        different scales and styles, reflecting our commitment
                        to excellence and innovation in design. With a team of
                        experienced architects, designers and engineers, ELITE
                        GROUP provides end-to-end solutions that change people's
                        life.
                      </div>
                      <div className="mt-12 w-[700px]   ">
                        <div className="flex justify-between ">
                          <div>
                            <img src={Logo2} />
                          </div>
                          <div>
                            <img src={Logo3} />
                          </div>
                          <div>
                            <img src={Logo4} />
                          </div>
                          <div>
                            <img src={Logo5} />
                          </div>
                        </div>
                        <div className="flex justify-between mt-8">
                          <div>
                            <img src={Logo6} />
                          </div>
                          <div>
                            <img src={Logo7} />
                          </div>
                          <div>
                            <img src={Logo3} />
                          </div>
                          <div>
                            <img src={Logo2} />
                          </div>
                          <div>
                            <img src={Logo4} />
                          </div>
                        </div>
                        <div className="flex justify-between mt-8">
                          <div>
                            <img src={Logo2} />
                          </div>
                          <div>
                            <img src={Logo3} />
                          </div>
                          <div>
                            <img src={Logo4} />
                          </div>
                          <div>
                            <img src={Logo5} />
                          </div>
                        </div>
                        <div className="flex justify-between mt-8">
                          <div>
                            <img src={Logo6} />
                          </div>
                          <div>
                            <img src={Logo7} />
                          </div>
                          <div>
                            <img src={Logo3} />
                          </div>
                          <div>
                            <img src={Logo2} />
                          </div>
                          <div>
                            <img src={Logo4} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-woodsmoke-500 p-5   ">
                <div className="justify-center items-center flex ">
                  <img src={Logo} alt="Logo" />
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="text-masala-300 text-3xl">ABOUT US</div>
                    <div className="text-masala-300 mt-6">
                      We are pragmatic in our approach to design and handle
                      <br /> each project in accordance with its particular set
                      of
                      <br /> requirements and imperatives. When working in
                      <br /> conservation areas or on listed buildings we aim to
                      respect
                      <br /> and retain the best of the historic elements and to
                      <br /> supplement these with contemporary interventions{" "}
                      <br />
                      wherever appropriate.
                    </div>
                  </div>
                  <div className="text-masala-300">
                    <div>NAVIGATION</div>
                    <div className="mt-3">Home </div>

                    <div>About Group</div>
                    <div>Group Companies</div>
                    <div>Careers </div>
                    <div>Media Center</div>
                    <div>Contact Us</div>
                  </div>
                  <div className="text-masala-300">
                    <div>Group of Companies</div>
                    <div className="mt-3">Automotive</div>

                    <div>Investments</div>
                    <div>Group Companies</div>
                    <div>Real Estate </div>
                    <div> Healthcare</div>
                    <div> Education Ecommerce</div>
                  </div>
                  <div className="text-masala-300">
                    <div>SUBSCRIBE</div>
                    <div className="mt-3">
                      Subscribe to our Newsletter to be up to date <br /> with
                      the latest automotive news and our <br /> amazing deals
                    </div>

                    <div>
                      <form className="">
                        <div className="mb-4 mt-2">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="shadow appearance-none  rounded-full w-full py-1 bg-chicago-500 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder=" Your email Address"
                            required
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <button
                            type="submit"
                            className="border border-white w-full text-white  py-1 px-4 rounded-full focus:outline-none focus:shadow-outline"
                          >
                            SUBMIT
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="flex mt-4 ml-2 gap-5">
                      <div>
                        <img src={FB} />
                      </div>
                      <div>
                        <img src={Lin} />
                      </div>
                      <div>
                        <img src={IG} />
                      </div>
                      <div>
                        <img src={Yt} />
                      </div>
                      <div>
                        <img src={Twtr} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full border-t border-white"></div>
              <div className="p-5 text-chicago-500 text-sm">
                <div className="text-nowrap my-4">
                  {" "}
                  Copyright © 2024 | ALL RIGHTS RESERVED | The Elite Cars LLC
                </div>
                <div>
                  <span className="text-white font-bold text-nowrap text-xs">
                    Disclaimer:
                  </span>{" "}
                  The Elite Cars is not endorsed by, directly affiliated with,
                  maintained or sponsored by any car manufacturer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;