import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../assets/Img1.png";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import SectorExplore from "./SectorExplore";
import Sectors from "./Sectors";
import ImgMob1 from "../../assets/ImgMob1.png";
import ArrowLeft from "../../assets/ArrowLeft.png";
import ArrowRight from "../../assets/ArrowRight.png";
import AboutUs from "./AboutUs";
import Highlights from "./Highlights";
import Partners from "./Partners";
import Lamborghini from "./Lamborghini";
import Brands from "./Brands";

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
    <>
      <Navbar />
      <div className="h-screen w-screen">
        <div className="relative bg-black h-[100vh] w-screen text-white font-barlow">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 top-0 w-screen h-full object-cover video-banner"
            onEnded={handleVideoEnd}
            onLoadedMetadata={() => {
    videoRef.current.play().catch((error) => {
      console.error('Autoplay failed:', error);
      // You can handle the error or prompt the user to interact
    });
  }}
          >
            <source
              className=""
              src={videoUrls[currentVideo]} type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute top-1/2 left-[3%]  z-10">
            <div className="text-lg md:text-xl font-medium mb-4">WELCOME TO ELITE GROUP HOLDINGS</div>
            <div className="text-4xl md:text-6xl font-bold mb-4">DRIVING EXCELLENCE<br />BUILDING FUTURES</div>
            <button className="hover:bg-white hover:text-black transition-all border border-1 border-white rounded-full px-10 py-3">
              Explore
              <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
            </button>
          </div>
          <div className="absolute bottom-10 lleft-[3%] px-12 text-xl  flex items-center justify-between overflow-x-auto whitespace-nowrap gap-8 mt-40 w-full   ">
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
      <AboutUs />
      <Sectors />
      <Highlights />
      <Partners />
      <Lamborghini />
      <Brands />










      {/* <div className="relative inline-block  md:hidden"> */}
      {/* <img src={ImgMob1} className="w-full mt-4" /> */}
      {/* <div className="absolute top-0 left-0 w-full h-full text-white  justify-center  my-36 items-center mb-24">
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
        </div> */}
      {/* </div> */}

      <Footer />
    </>
  );
};

export default Home;
