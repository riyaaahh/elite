import React, { useState } from "react";
import Navbar from "./Navbar";
import AboutImg from "./../assets/AboutImg.png";
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
import ImgMob1 from '../assets/ImgMob1.png'
import ImgMob3 from '../assets/ImgMob3.png'
import Lamborghini from "../assets/Lamborghini.png";
import Footer from "../assets/Footer.png";
import Logo from "./../assets/Logo.png";
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.png";
import Logo5 from "../assets/Logo5.png";
import Logo6 from "../assets/Logo6.png";
import Logo7 from "../assets/Logo7.png";
import FB from '../assets/FB.png'
import IG from '../assets/IG.png'
import Lin from '../assets/Lin.png'
import Twtr from '../assets/Twtr.png'
import Yt from '../assets/Yt.png'
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from '@heroicons/react/24/solid'; // Solid icons from Heroicons v1
import Img6 from "../assets/Img6.png"
import Img8 from "../assets/Img8.png"
import ArrowLeft from "../assets/ArrowLeft.png"
import ArrowRight from "../assets/ArrowRight.png"
import HomeVideo2 from "./../assets/HomeVideo2.mp4"
import HoverButton from "./HoverButton";
const Home = () => {
  
  const [bgImage, setBgImage] = useState(Img5);

  const handleHover = (image) => {
    setBgImage(image);
  };
  return (
    <div className="h-screen w-screen ">
    <div className="relative bg-black w-screen text-white font-barlow">
  <video
    autoPlay
    loop
    muted
    className="absolute inset-0 top-0 w-screen h-full object-cover"
  >
    <source src={HomeVideo2} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="relative z-10">
    <Navbar />
    <div className=" px-8 py-28">
      <div className=" lg:text-2xl sm:text-base font-barlow">WELCOME TO ELITE GROUP HOLDINGS</div>
      <div className=" lg:text-6xl sm:text-3xl  font-barlow text-3xl font-bold my-4">
        DRIVING EXCELLENCE <br />
        BUILDING FEATURES
      </div>
      <HoverButton/>

      <div className="flex gap-8 mt-40 w-full">
      <div >
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
      <div className="flex flex-col-reverse lg:flex-row mx-4 lg:mx-0  lg:my-0">
      <div className=" lg:w-5/6  mr-5 lg:mr-0 mt-2 lg:mt-0">
      <img src={AboutImg} className="" />
  </div>
  <div className="lg:w-1/2 ml-2 mt-4 lg:mt-8 lg:ml-2 ">
  <div className="mt-14">
  <div className="font-extrabold text-3xl lg:text-5xl mb-2">ABOUT US</div>
  <div>
      <div className="mb-1">
        Elite Group Holding Ltd, is more than just a group holding
        company. We are visionaries, innovators and creators of
        tomorrow’s possibilities.
      </div>
      <br />
      We believe in the power of purpose-driven business. Our commitment
      revolves around enhancing the quality of life within the
      communities we serve and continuously seeking new avenues for
      fostering growth.
    </div>
    
  </div>
  <button className="my-4 p-3 p-4 py-3 py-4 hidden md:flex flex bg-black border gap-1 text-white rounded-full items-center px-10">
        <div className="text-lg">Read More</div>
      <div className="hidden md:flex mt-1"><ArrowRightIcon className=" w-8 h-6" /></div>

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
            <div className="flex gap-2 mb-3">
             

              
            </div>
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
                Ultimate Motors upholds its dedication to<br/>
                 delivering unrivaled excellence in <br/>
                customer experience and top-tier <br/>
                automotive services.
              </div>
              
            </div>
            <div className="flex justify-between mt-72 mx-12 ">
                <div><img className="border border-white p-1 px-2" src={ArrowLeft}/></div>
                <div><img className="border border-white p-1 px-2" src={ArrowRight}/></div>
              </div>
          </div>
        </div>
        <div className="flex hidden md:block">
      <div className="font-extrabold text-5xl mb-6 ml-10 mt-10">
        EXPLORE OUR SECTORS
      </div>
      
    </div>
       
        <div className="">
          <div className=" m-4 lg:m-8 mr-8 lg:mr-0">
            <div className=" bg-blackhaze-500 mr-14">
          <div className=" flex flex-col md:flex-row items-center gap-32  mt-3 justify-between mx-2">
            <div className="font-extrabold text-4xl ml-0 lg:ml-8 text-start"> HIGHLIGHTS</div>
           
             <div className="ml-4 lg:ml-2 flex mt-12 gap-14  ">
             <div className="text-xl">
           We are pragmatic in our approach to design and 
              handle each project in accordance with  its particular
              
              set of requirements and imperatives. When working in
             
              conservation  areas or on listed buildings we aim to
              
              respect  retain the best of the historic elements
             
              and   to supplement these with contemporary interventions
              wherever appropriate.
            </div> 
           
            <div className=" flex hidden md:flex text-xl">
              {" "}
              Energy efficiency and sustainability issues are given 
              serious consideration at the outset of the design
            
              process, in particular on new-build projects. Properly
              considered they play an important part in adding
              present and future value.
            </div>
            </div>
            <div className="ml-4 lg:ml-2 flex  hidden text-xl text-nowrap">
              We are pragmatic in our approach to design  and
              handle each project in accordance with its particular
            
              set of   requirements and imperatives. When working in
              conservation            
              areas or on listed buildings we aim to
              respect and retain the best of the historic elements
            
              and to supplement these with contemporary interventions s
              wherever appropriate.
            </div>
            
          </div>
          <div className="flex  m-4 text-center items-center justify-between flex hidden md:flex ">
          <div className="items-center text-center flex py-10">
              <div className="p-2 py-14 pr-2 border-l border-l-black"> </div>
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
                <div className="">Employers</div>
                </div>
                <div>
                  <div className="p-2 px-32 mt-8 border-b border-b-black">
                    {" "}
                  </div>
                </div>
              </div>
              <div className="p-2 py-14 border-r pl-8 border-r-black"> </div>
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
            </div>
            <div className="items-center text-center flex py-10">
              <div className="p-2 py-14 pl-4  border-l border-l-black"> </div>
              <div>
                <div>
                  <div className=" text-5xl">20+</div>
                  <div className="">Offices / Showrooms</div>
                </div>
                <div>
                  <div className="p-2 px-32 mt-8 border-b border-b-black">
                    {" "}
                  </div>
                </div>
              </div>
              <div className="p-2 py-14 border-r pl-4 border-r-black"> </div>
            </div>
            
          </div>
          </div>
          <div className="  text-center items-center justify-center ml-4 mr-4 mt-4 md:hidden ">
           <div className="  gap-2 flex justify-between">
            <div className="bg-black  text-white   text-center justify-center items-center w-full  p-8 py-10 ">
              <div className="text-4xl">30+</div>
              <div className="text-xs text-nowrap">Years of experience</div>
            </div>
            <div className="bg-black  text-white  text-center  justify-center items-center w-full p-8   py-10 ">
            <div className="text-4xl">5000+</div>
            <div className="text-xs">Employers</div>
            </div>
           </div>
           <div className=" gap-2 flex justify-between">
            <div className="bg-black text-white mt-2 text-center justify-center  items-center w-full  p-8  px-12 py-10">
            <div className="text-4xl">40+</div> 
            <div className="text-xs">Nationalities</div>
            </div>
            <div className="bg-black  text-white mt-2  text-center justify-center items-center w-full  p-7  py-10">
            <div className="text-4xl">20+</div>
            <div className="text-nowrap text-xs">Offices / Showrooms</div>
            </div>
           </div>
           
          </div>
         
          </div>
          <div className="mt-10 md:hidden">
              <div className="relative inline-block">
                <img
                  src={ImgMob3}
                  alt="Footer Image"
                  className=" h-auto w-screen"
                />
                <div className="absolute top-0 left-0 w-full  h-64  bg-black bg-opacity-50">
                <div className="absolute mb-20 text-white m-8 mr-12 ">
                  <div className="font-bold text-5xl ">CAREERS</div>
                  <div className="text-xl mt-3">Join us in enriching lives</div>
                  <div className="text-sm mt-3 text-chicago-400">Integrity, Commitment and Innovation form the foundation of our values, and if your passion lies in empowering lives and want to be of service in creating a better world, we are looking for you. Join us to be a part of a transformational journey.</div>
                  <div></div>
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
              <div className=" mt-80 text-xl text-center mr-8 px-4">LAMBORGHINI 
              </div>
            </div>
          </div>
          <div className="flex hidden md:flex  border-r border-white">
            <div className="pb-1 text-white items-end mt-56">
              <div className=" mt-80 text-xl text-center mr-8 px-4 ">ZENVO AUTOMOBILE</div>
            </div>
          </div>
          <div className="flex hidden md:flex  border-r border-white">
            <div className="pb-1 text-white  mt-56">
              <div className=" mt-80 text-xl text-center mr-8 px-10">JETOUR</div>
            </div>
          </div>
          <div className="flex hidden md:flex  border-r border-white">
            <div className="pb-1 text-white mt-56">
              <div className=" mt-80 text-xl text-center mr-8 px-4">THE ELITE CARS</div>
            </div>
          </div>
          <div className="flex hidden md:flex  border-r border-white">
            <div className="pb-1 text-white mt-56">
              <div className=" mt-80 text-xl text-center mr-8 px-4">SUN CITY MOTORS</div>
            </div>
          </div>
          <div className="flex hidden md:flex border-r border-white">
            <div className="pb-1 text-white mt-56">
              <div className=" mt-80 text-xl text-center mr-8 px-4">ECOMMERCE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
          <div className=" m-6 md:hidden">
          <div className="flex justify-between">
              <div className="font-extrabold text-base text-nowrap  ">   NEWS</div>
              <div className="text-center text-sm ">SWIPE</div>
              
            </div>            <div className="flex justify-between">
              <div className="font-extrabold text-2xl text-nowrap  my-4">LAMBORGHINI WORLD</div>
              
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
              <div> <button className=" p-1 border-chicago-400 mt-2 border text-chicago-400 rounded-full px-10 ">
          READ MORE
        </button></div>
            </div>
            
          </div>
          <div className="hidden md:block ">
          <div className="hidden md:block relative mx-28 my-28">
      <div>
        <div className="font-bold text-5xl mb-2 ">LAMBORGHINI WORLD</div>
        <div className="relative">
          <img src={Lamborghini} alt="Lamborghini" className="w-full h-auto" />
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <div className="text-masala-300 font-bold">
              May 20, 2024, Dubai, UAE
            </div>
            <div className="flex justify-between items-center">
              <div className="font-bold text-2xl my-3 text-white">
                LAMBORGHINI URUS SE DEBUTS IN GERMANY
              </div>
              <a href="/path-to-detailed-article" className="text-white underline">READ MORE</a> {/* Update the href attribute */}
            </div>
            <div className="text-white">
              LAMBORGHINI URUS SE DEBUTS IN GERMANY
            </div>
          </div>
        </div>
    </div>
    <div className="mt-16 flex justify-between  ">
      <div className="relative group justify-between">
        <div className="w-80 h-80  overflow-hidden relative">
          <img src={Img2} alt="Image 2" className="object-cover w-full h-full" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center rounded-lg">
          <div className="text-masala-300 font-bold mt-3">February 22, 2024, Dubai, UAE</div>
          <div className="font-bold text-2xl mt-3">
            THE ELITE CARS PRESENTS
            <br />
            ZENORA AURORA - AGIL TUR
            <br />
            THE MENA
          </div>
          <button className="mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            READ MORE
          </button>
        </div>
      </div>

      {/* Image 2 */}
      <div className="relative group">
        <div className="w-80 h-80 overflow-hidden relative">
          <img src={Img1} alt="Image 1" className="object-cover w-full h-full" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center rounded-lg">
          <div className="text-masala-00 font-bold mt-3">27 January 2024, Dubai, UAE</div>
          <div className="font-bold text-2xl mt-3">THE ALL NEW JETOUR T2 DEBUTS IN THE UAE</div>
          <button className="mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            READ MORE
          </button>
        </div>
      </div>

      {/* Image 3 */}
      <div className="relative group">
        <div className="w-80 h-80  overflow-hidden relative">
          <img src={Img3} alt="Image 3" className="object-cover w-full h-full" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center rounded-lg">
          <div className="text-masala-300 font-bold mt-3">March 16, 2023, Dubai, UAE</div>
          <div className="font-bold text-2xl mt-3">
            2023 JETOUR DASHING
            <br />
            MAKES ITS DEBUT IN UAE
            <br />
            THROUGH THE ELITE CARS
          </div>
          <button className="mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            READ MORE
          </button>
        </div>
      </div>
    </div>
            </div>
          </div>
          <div className="flex">
          <div className="flex flex-col md:hidden">
              <div className="relative inline-block">
                <img
                  src={ImgMob4}
                  alt="Footer Image"
                  className="w-screen"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                <div>
                  <div className="absolute top-0 left-0 w-full h-full text-white m-8  mr-36 mb-24">
                    <div className="w-[800px]">
                      <div className="font-extrabold text-4xl text-white">
                        {" "}
                        OUR BRANDS
                      </div>
                      <div className="text-nobel-400 mt-8 mr-24 ">
                        Our portfolio showcases a diverse range of projects in<br/>
                        different scales and styles, reflecting our commitment<br/>
                        to
                       excellence and innovation in design. With a team
                        of <br/> experienced architects, designers and engineers,<br/>
                        ELITE GROUP 
                        provides end-to-end solutions that <br/> change people's life.
                      </div>
                      <div className="mt-12 mr-96 ">
                        <div className="flex justify-between ">
                          <div>
                            <img src={Logo2} />
                          </div>
                          <div>
                            <img src={Logo3} />
                          </div>
                          <div>
                          </div>
                          <div>
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
                          We are pragmatic in our approach to design and handle 
                          each<br /> project in accordance with its particular
                          set of 
                          requirements<br /> and imperatives. When working in 
                         conservation areas  or on<br /> listed buildings we
                          aim to respect
                           and retain the best of the<br /> historic elements 
                          and to
                          supplement these with contemporary<br />
                          interventions 
                          wherever appropriate.
                        </div>
                      </div>
                      <div className="flex justify-between mt-4">
                      <div className="text-masala-300">
                        <div className="text-white font-semibold" >Navigation</div>
                        <div className="mt-3">Home </div>

                        <div>About Group</div>
                        <div>Group Companies</div>
                        <div>Careers </div>
                        <div>Media Center</div>
                        <div>Contact Us</div>
                      </div>
                      <div className="text-masala-300">
                        <div  className="text-white font-semibold">Our Sectors</div>
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
                          Subscribe to our Newsletter to be up to date 
                          with the <br/> latest automotive news and our  amazing
                          deals
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
                            <img src={Facebook}  className="w-12 h-15" />
                          </div>
                          <div>
                            <img src={Linkedin} className="w-12 h-15" />
                          </div>
                          <div>
                            <img src={Instagram}  className="w-12 h-15"/>
                          </div>
                          <div>
                            <img src={Youtube}  className="w-12 h-15"/>
                          </div>
                          <div>
                            <img src={Twitter}  className="w-12 h-15"/>
                          </div>
                        </div>
                      </div>

                    </div>
                    </div>
                    <div className="w-full border-t border-white"></div>
<div className="p-5 text-chicago-500 text-sm">
  <div className="text-nowrap my-4"> Copyright © 2024 | ALL RIGHTS RESERVED | The Elite Cars LLC</div>
  <div><span className="text-white font-bold text-nowrap text-xs">Disclaimer:</span> The Elite Cars is not endorsed by, directly affiliated with, maintained or sponsored by any car manufacturer.</div>
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
                        to
                         excellence and innovation in design. With a team
                        of experienced architects, designers and engineers,
                        ELITE GROUP 
                        provides end-to-end solutions that change people's life.
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
                          <br /> each project in accordance with its particular
                          set of
                          <br /> requirements and imperatives. When working in
                          <br /> conservation areas or on listed buildings we
                          aim to respect
                          <br /> and retain the best of the historic elements
                          and to
                          <br /> supplement these with contemporary
                          interventions <br />
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
                        <div className="mt-3">
                          Automotive   
                       
                        </div>

                        <div>Investments</div>
                        <div>Group Companies</div>
                        <div>Real Estate </div>
                        <div> Healthcare</div>
                        <div>  Education Ecommerce</div>
                      </div>
                      <div className="text-masala-300">
                        <div>SUBSCRIBE</div>
                        <div className="mt-3">
                        Subscribe to our Newsletter to be up to date <br/> with the latest automotive news and our <br/> amazing deals  
                       
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
        <div><img src={FB}/></div>
        <div><img src={Lin}/></div>
        <div><img src={IG}/></div>
        <div><img src={Yt}/></div>
        <div><img src={Twtr}/></div>
      </div>
                      </div>
                      

                    </div>
                  </div>
                
                    <div className="w-full border-t border-white"></div>
<div className="p-5 text-chicago-500 text-sm">
  <div className="text-nowrap my-4"> Copyright © 2024 | ALL RIGHTS RESERVED | The Elite Cars LLC</div>
  <div><span className="text-white font-bold text-nowrap text-xs">Disclaimer:</span> The Elite Cars is not endorsed by, directly affiliated with, maintained or sponsored by any car manufacturer.</div>
</div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
