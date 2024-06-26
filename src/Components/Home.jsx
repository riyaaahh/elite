import React, { useEffect, useRef, useState } from "react";
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
import Lamborghini from "../assets/Lamborghini.png";
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
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
const Home = () => {
  const [currentBackground, setCurrentBackground] = useState(Img1); // Initial background image



  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const videoUrls = [
    video2,
    video3,
    video2,
    video3,
    video2,
    video3,
    video2    // Add more video URLs here...
  ];

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(percentage);
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [currentVideo]);
  const handleHover = (image) => {
    setCurrentBackground(image);
  };

  const handleVideoClick = (index) => {
    setCurrentVideo(index);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videoUrls.length);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };
  return (
    <div className="h-screen w-screen ">
      <div className="relative bg-black h-[100vh] w-screen text-white font-barlow">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="absolute inset-0 top-0 w-screen h-full object-cover video-banner"
          onEnded={handleVideoEnd}
        >
          <source
            className=""
            src={videoUrls[currentVideo]} type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10">
          <Navbar />
          <div className=" px-8 py-28  pt-[20vh]">
            <div className=" lg:text-2xl sm:text-base font-barlow">
              WELCOME TO ELITE GROUP HOLDINGS
            </div>
            <div className=" lg:text-6xl sm:text-3xl  font-barlow text-3xl font-bold my-4">
              DRIVING EXCELLENCE <br />
              BUILDING FEATURES
            </div>
            <HoverButton />

            <div className="flex overflow-x-auto whitespace-nowrap gap-8 mt-40 w-full  pt-[15vh]">
              {["Our Company", "Automotive", "Investments", "Real-Estate", "Healthcare", "Education", "Ecommerce"].map((item, index) => (
                <div key={index} onClick={() => handleVideoClick(index)} className="cursor-pointer">
                  <div className="pb-1 text-white">
                    <div>{item}</div>
                    {/* <div className="border-b border-white p-1 px-20" style={{ width: `${progress}%` }}></div> */}
                    <div className="flex items-center justify-between  w-full">
                      {/* Progress Bar */}
                      <div className="w-full bg-[#C3C3C3] h-[2px]">
                        {currentVideo == index &&
                          <div className="bg-white h-[2px]" style={{ width: `${progress}%` }}></div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="font-barlow flex flex-col  bg-blackhaze-500">
        <div className="flex flex-col-reverse lg:flex-row mx-4 lg:mx-0  lg:my-0">
          <div className="lg:w-2/4 mr-5 lg:mr-0 mt-2 lg:mt-0">
            <img src={AboutImg} className="hidden lg:block" />
            <img src={AboutImgMob} className="block lg:hidden" />
          </div>
          <div className="lg:w-1/2 ml-2 mt-4 lg:mt-6 lg:ml-4 ">
            <div className="mt-4">
              <div className="font-extrabold text-3xl lg:text-5xl mb-2">
                ABOUT US
              </div>
              <div>
                <div className="mb-1">
                  Elite Group Holding Ltd, is more than just a group holding
                  company. We are visionaries, innovators and creators of
                  tomorrow’s possibilities.
                </div>
                <br />
                We believe in the power of purpose-driven business. Our
                commitment revolves around enhancing the quality of life within
                the communities we serve and continuously seeking new avenues
                for fostering growth.
              </div>
            </div>
            <button className="my-4 p-3 p-4 py-3 py-4 hidden md:flex flex bg-black border text-white rounded-full items-center px-16">
              <div className="text-lg">Read More</div>
              <div className="hidden md:flex mt-1">
                <ArrowRightIcon className=" w-6 h-6" />
              </div>
            </button>
          </div>
        </div>

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
          <div className="relative h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${Img5})` }}
            ></div>

            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="flex  w-full h-full justify-between">
                <div className="flex hidden md:flex  border-r border-white">
                  <div className="pb-1 text-white items-end mt-56">
                    <div className=" mt-80 text-xl text-center mr-8 px-4">
                      INVESTMENTS
                    </div>
                  </div>
                </div>
                <div className="flex hidden md:flex  border-r border-white">
                  <div className="pb-1 text-white items-end mt-56">
                    <div className=" mt-80 text-xl text-center mr-8 px-4 ">
                      INVESTMENTS
                    </div>
                  </div>
                </div>
                <div className="flex hidden md:flex  border-r border-white">
                  <div className="pb-1 text-white  mt-56">
                    <div className=" mt-80 text-xl text-center mr-8 px-4">
                      REAL ESTATE
                    </div>
                  </div>
                </div>
                <div className="flex hidden md:flex  border-r border-white">
                  <div className="pb-1 text-white mt-56">
                    <div className=" mt-80 text-xl text-center mr-8 px-4">
                      HEALTHCARE
                    </div>
                  </div>
                </div>
                <div className="flex hidden md:flex  border-r border-white">
                  <div className="pb-1 text-white mt-56">
                    <div className=" mt-80 text-xl text-center mr-8 px-4">
                      EDUCATION
                    </div>
                  </div>
                </div>
                <div className="flex hidden md:flex border-r border-white">
                  <div className="pb-1 text-white mt-56">
                    <div className=" mt-80 text-xl text-center mr-8 px-4">
                      ECOMMERCE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" m-4 lg:m-8 mr-8 lg:mr-0">
            <div className="mr-2 bg-blackhaze-500">
              <div className=" flex flex-col md:flex-row items-center  mt-3 justify-between">
                <div className="font-extrabold text-3xl ml-0 lg:ml-8 text-start">
                  {" "}
                  HIGHLIGHTS
                </div>
                <div className="ml-4 lg:ml-2 flex  hidden text-xs text-nowrap">
                  We are pragmatic in our approach to design and handle each
                  project in accordance with its particular set of requirements
                  and imperatives. When working in conservation areas or on
                  listed buildings we aim to respect and retain the best of the
                  historic elements and to supplement these with contemporary
                  interventions s wherever appropriate.
                </div>
                <div className="text-xs">
                  We are pragmatic in our approach to design and handle each
                  project in accordance with its particular set of requirements
                  <br /> and imperatives. When working in conservation areas or
                  on
                  <br /> listed buildings we aim to respect retain the best of
                  the
                  <br /> historic elements and to supplement these with
                  contemporary
                  <br /> interventions wherever appropriate.
                </div>
              </div>{" "}
              <div className="ml-4 lg:ml-2 flex mt-12  ">
                <div className=" flex hidden md:flex">
                  {" "}
                  Energy efficiency and sustainability issues are given <br />
                  serious consideration at the outset of the design
                  <br />
                  process, in particular on new-build projects. Properly
                  <br />
                  considered they play an important part in adding
                  <br />
                  present and future value.
                </div>
              </div>
              <div className="flex  m-4 text-center items-center justify-between flex hidden md:flex ">
                <div className="items-center text-center flex py-10">
                  <div className="p-2 py-14  border-l border-l-black"> </div>
                  <div>
                    <div>
                      <div className=" text-5xl">30+</div>
                      <div className="">Years of experience</div>
                    </div>
                    <div>
                      <div className="p-2 px-32 mt-8 border-b border-b-black">
                        {" "}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 py-14 border-r border-r-black"> </div>
                </div>
                <div className="items-center text-center flex py-10">
                  <div>
                    <div>
                      <div className=" text-5xl">5000+</div>
                      <div className="">Employees</div>
                    </div>
                    <div>
                      <div className="p-2 px-32 mt-8 border-b border-b-black">
                        {" "}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 py-14 border-r border-r-black"> </div>
                </div>
                <div className="items-center text-center flex py-10">
                  <div>
                    <div>
                      <div className=" text-5xl">40+</div>
                      <div className="">Nationalities</div>
                    </div>
                    <div>
                      <div className="p-2 px-32 mt-8 border-b border-b-black">
                        {" "}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 py-14 border-r border-r-black"> </div>
                </div>
                <div className="items-center text-center flex py-10">
                  <div>
                    <div>
                      <div className=" text-5xl">20+</div>
                      <div className="">Offices / Showrooms</div>
                    </div>
                    <div></div>
                  </div>
                  <div className="p-2 py-14 border-r border-r-black"> </div>
                </div>
              </div>
            </div>
            <div className="  text-center items-center justify-center  mr-4 mt-4 md:hidden ">
              <div className=" gap-2 flex justify-between">
                <div className="bg-white  text-black border border-black   text-center justify-center items-center w-full  p-8 py-10 ">
                  <div className="text-4xl">30+</div>
                  <div className="text-xs text-nowrap">Years of experience</div>
                </div>
                <div className="bg-white  text-black border border-black  text-center  justify-center items-center w-full p-8   py-10 ">
                  <div className="text-4xl">5000+</div>
                  <div className="text-xs">Employers</div>
                </div>
              </div>
              <div className=" gap-2 flex justify-between">
                <div className="bg-white text--black border border-black mt-2 text-center justify-center  items-center w-full  p-8  px-12 py-10">
                  <div className="text-4xl">40+</div>
                  <div className="text-xs">Nationalities</div>
                </div>
                <div className="bg-white  text-black border border-black mt-2  text-center justify-center items-center w-full  p-7  py-10">
                  <div className="text-4xl">20+</div>
                  <div className="text-nowrap text-xs">Offices / Showrooms</div>
                </div>
              </div>
            </div>
          </div>
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

          <div className="hidden md:flex flex flex-col">
            <div className="font-bold text-5xl ml-14 my-10 ">
              EXPLORE OUR PARTNERS
            </div>
            <div className="relative h-screen">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${Img6})` }}
              ></div>

              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="flex  w-full h-full justify-between">
                  <div className="flex hidden md:flex  border-r border-white">
                    <div className="pb-1 text-white items-end mt-56">
                      <div className=" mt-80 text-xl text-center mr-8 px-4">
                        LAMBORGHINI
                      </div>
                    </div>
                  </div>
                  <div className="flex hidden md:flex  border-r border-white">
                    <div className="pb-1 text-white items-end mt-56">
                      <div className=" mt-80 text-xl text-center mr-8 px-4 ">
                        ZENVO AUTOMOBILE
                      </div>
                    </div>
                  </div>
                  <div className="flex hidden md:flex  border-r border-white">
                    <div className="pb-1 text-white  mt-56">
                      <div className=" mt-80 text-xl text-center mr-8 px-10">
                        JETOUR
                      </div>
                    </div>
                  </div>
                  <div className="flex hidden md:flex  border-r border-white">
                    <div className="pb-1 text-white mt-56">
                      <div className=" mt-80 text-xl text-center mr-8 px-4">
                        THE ELITE CARS
                      </div>
                    </div>
                  </div>
                  <div className="flex hidden md:flex  border-r border-white">
                    <div className="pb-1 text-white mt-56">
                      <div className=" mt-80 text-xl text-center mr-8 px-4">
                        SUN CITY MOTORS
                      </div>
                    </div>
                  </div>
                  <div className="flex hidden md:flex border-r border-white">
                    <div className="pb-1 text-white mt-56">
                      <div className=" mt-80 text-xl text-center mr-8 px-4">
                        ECOMMERCE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <div className="text-white rounded-md" style={{
                  backgroundImage: `url(${LamborghiniMob})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  maxHeight: "500px",
                  maxWidth: "500px",
                  minHeight: "350px",
                  minWidth: "350px",
                }} >
                  <div className="pt-[200px] m-2">
                    <div className="text-white font-bold">
                      May 20, 2024, Dubai, UAE
                    </div>
                    <div className="font-bold text-md my-3">
                      LAMBORGHINI URUS SE DEBUTS IN GERMANY
                    </div>

                    <div>
                      {" "}
                      <button className=" p-1 border-chicago-400 mt-2 border text-chicago-400 rounded-full px-10 ">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>

              </div>
          <div className="mx-28 my-32 hidden md:block ">
            <div className="mx-28 my-32 hidden md:block relative">
              <div>
                <div className="font-bold text-5xl my-4">LAMBORGHINI WORLD</div>
                <div className="relative">
                  <img
                    src={Lamborghini}
                    alt="Lamborghini"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <div className="text-masala-300 font-bold">
                      May 20, 2024, Dubai, UAE
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-2xl my-3 text-white">
                        LAMBORGHINI URUS SE DEBUTS IN GERMANY
                      </div>
                      <a
                        href="/path-to-detailed-article"
                        className="text-white underline"
                      >
                        READ MORE
                      </a>{" "}
                      {/* Update the href attribute */}
                    </div>
                    <div className="text-white">
                      LAMBORGHINI URUS SE DEBUTS IN GERMANY
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 flex gap-3 justify-between">
              <div>
                <div>
                  <img src={Img2} />
                </div>
                <div className="text-masala-500 font-bold mt-3">
                  February 22, 2024, Dubai, UAE
                </div>
                <div className="font-bold text-2xl ">
                  THE ELITE CARS PRESENTS
                  <br />
                  ZENORA AURORA - AGIL TUR
                  <br />
                  THE MENA
                </div>
                <div>
                  <button className="m-2 p-1 border-black border rounded-full px-10  ">
                    READ MORE
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <img src={Img1} />
                </div>
                <div className="text-masala-500 font-bold mt-3">
                  27 January 2024, Dubai, UAE
                </div>
                <div className="font-bold text-2xl ">
                  THE ALL NEW JETOUR T2 DEBUTS IN THE UAE{" "}
                </div>

                <div className="mt-6">
                  <button className="m-4 p-1 border-black border rounded-full px-10  ">
                    READ MORE
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <img src={Img3} />
                </div>
                <div className="text-masala-500 font-bold mt-3">
                  March 16, 2023, Dubai, UAE
                </div>
                <div className="font-bold text-2xl ">
                  2023 JETOUR DASHING
                  <br /> MAKES ITS DEBUT IN UAE <br />
                  THROUGH THE ELITE CARS
                </div>
                <div className="">
                  <button className="m-4 p-1 border-black border rounded-full px-10  ">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
                <div className="flex flex-col md:hidden">
                  <div className="relative inline-block">
                    {/* <img src={ImgMob4} alt="Footer Image" className="w-screen" /> */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                    <div style={{
                      backgroundImage: `url(${Footer})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '100vh',
                      width: '100vw',
                    }} >
                      <div className="absolute top-0 left-0 w-full h-full text-white px-8 py-8   mb-24">
                        <div className="">
                          <div className="font-extrabold text-4xl text-white">
                            {" "}
                            OUR BRANDS
                          </div>
                          <div className="text-nobel-400 mt-8  ">
                            Our portfolio showcases a diverse range of projects in

                            different scales and styles, reflecting our commitment

                            to excellence and innovation in design. With a team of{" "}
                            experienced architects, designers and engineers,

                            ELITE GROUP provides end-to-end solutions that{" "}
                            change people's life.
                          </div>
                          <div className="mt-12 ">
                            <div className="flex gap-8 justify-between items-center ">
                              <div>
                                <img src={Logo2} />
                              </div>
                              <div>
                                <img src={Logo3} />
                              </div>
                              <div>
                                <img src={Logo4} />
                              </div>
                            </div>
                            <div className="flex gap-8 justify-between items-center mt-[50px]">
                              <div>
                                <img src={Logo2} />
                              </div>
                              <div>
                                <img src={Logo3} />
                              </div>
                              <div>
                                <img src={Logo4} />
                              </div>
                            </div>
                            <div className="flex gap-8 justify-between items-center mt-[50px]">
                              <div>
                                <img src={Logo2} />
                              </div>
                              <div>
                                <img src={Logo3} />
                              </div>
                              <div>
                                <img src={Logo4} />
                              </div>
                            </div>

                            <div className="flex gap-8 justify-between items-center mt-[50px]">
                              <div>
                                <img src={Logo2} />
                              </div>
                              <div>
                                <img src={Logo3} />
                              </div>
                              <div>
                                <img src={Logo4} />
                              </div>
                            </div>

                            <div className="flex gap-8 justify-between items-center mt-[50px]">
                              <div>
                                <img src={Logo2} />
                              </div>
                              <div>
                                <img src={Logo3} />
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
                  <div className="bg-woodsmoke-500    ">
                    <div className="p-5">
                      <div className=" flex my-8 mx-6 ">
                        <img src={Logo} alt="Logo" />
                      </div>
                      <div className=" justify-between">
                        <div className="">
                          <div className="text-white text-3xl">ABOUT US</div>
                          <div className="text-white text-sm mt-6 text-nowrap ">
                            We are pragmatic ssin our approach to design and handle
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
                            <div> Education Ecommerce</div>
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
                    {/* <img
                  src={Footer}
                  alt="Footer Image"
                  className="w-full h-auto"
                /> */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
                    <div style={{
                      backgroundImage: `url(${Footer})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '100vh',
                      width: '100vw',
                    }} className="">
                      <div className="absolute top-8 left-20 right-80 w-full h-full text-white   ">
                        <div className=" mx-20 my-20">
                          <div className="font-extrabold w-[200]  text-4xl text-white">
                            {" "}
                            OUR BRANDS
                          </div>
                          <div className="text-nobel-500 w-[700px] pt-20 text-xl">
                            Our portfolio showcases a diverse range of projects in
                            different scales and styles, reflecting our commitment
                            to excellence and innovation in design. With a team of
                            experienced architects, designers and engineers, ELITE
                            GROUP provides end-to-end solutions that change people's
                            life.
                          </div>
                          <dissv className="mt-12 w-[700px]   ">
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
                            <div className="flex justify-between mt-[50px]">
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
                            <div className="flex justify-between mt-[50px]">
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
                            <div className="flex justify-between mt-[50px]">
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
                          </dissv>
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
