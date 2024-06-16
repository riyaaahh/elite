import React from "react";
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
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Img6 from "../assets/Img6.png"
import Img8 from "../assets/Img8.png"
import ArrowLeft from "../assets/ArrowLeft.png"
import ArrowRight from "../assets/ArrowLeft.png"
const Home = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div
      className="bg-black text-white pt-28 pl-10 font-barlow pb-28"
      style={{
        backgroundImage: `url(${Img8})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <div className="m-4 font-barlow">WELCOME TO ELITE GROUP HOLDINGS</div>
        <div className="m-4 md:text-5xl sm-text-4xl text-3xl font-bold">
          DRIVING EXCELLENCE <br />
          BUILDING FEATURES
        </div>
        <button className="m-4 p-1 border-white border rounded-full px-10">
          EXPLORE
        </button>

        <div className="flex gap-28 mx-4 mt-40">
          <div className="border border-x-0 border-t-0 pb-3 text-white border-white">Our Company</div>
          <div className="border border-x-0 border-t-0 pb-3 text-white border-white hidden md:flex">Automotive</div>
          <div className="border border-x-0 border-t-0 pb-3 text-white border-white hidden md:flex">Investments</div>
          <div className="border border-x-0 border-t-0 pb-3 text-white border-white hidden md:flex">Real-Estate</div>
          <div className="border border-x-0 border-t-0 pb-3 text-white border-white hidden md:flex">Healthcare</div>
          <div className="border border-x-0 border-t-0 pb-3 text-white border-white hidden md:flex">Education</div>
          <div className="border border-x-0 border-t-0 pb-3 text-white border-white hidden md:flex">Ecommerce</div>
        </div>
      </div>
    </div>

      <div className="font-barlow flex flex-col  bg-white">
      <div className="flex flex-col-reverse lg:flex-row mx-6 lg:mx-0  lg:my-0">
      <div className=" lg:w-1/2 mr-5 lg:mr-0 mt-4 lg:mt-0">
      <img src={AboutImg} className="w-full h-auto" />
    <div className="p-4"></div>
  </div>
  <div className="lg:w-1/2 ml-4 mt-4 lg:mt-6 lg:ml-6">
    <div className="font-extrabold md:text-5xl sm-text-4xl text-3xl mb-2">ABOUT US</div>
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
    <div className="bg-black px-6 mt-6 rounded-full text-white flex hidden md:flex">
      <button className="m-2 p-1 border-black border rounded-full px-10 flex text-center items-center">
        <div className="text-nowrap">READ MORE </div>
        <div><ArrowRightIcon className="w-6 h-6" /></div>
      </button>
    </div>
  </div>
</div>

         <div className="m-8  md:hidden">
          <div className="font-extrabold text-4xl mb-6">
            EXPLORE OUR GROUP COMPANIES
          </div>
          <div className=" gap-3">
            <div className="flex gap-2 mb-3">
              <div className="bg-white text-black p-1 px-8 border  text-sm border-black rounded-full">
                AUTOMOTIVE
              </div>
              <div className="bg-white text-black p-1 px-8 border text-sm border-black rounded-full">
                INVESTMENTS
              </div>
            </div>
            <div className="flex gap-2 mb-3">
              <div className="bg-white text-black p-1 px-8 border text-sm text-nowrap border-black rounded-full">
                REAL ESTATE
              </div>

              <div className="bg-white text-black p-1 px-10 border text-sm border-black rounded-full">
                EDUCATION
              </div>
            </div>
            <div className="flex">
            <div className="bg-white text-black  border p-1  px-8 text-sm border-black rounded-full">
              E-COMMERCE
            </div>
            <div className="bg-white p-1 px-10 text-sm  rounded-full">
                
              </div>
              </div>
          </div>
        </div>
        <div className="relative inline-block  md:hidden">
          <img src={ImgMob1} className="w-full mt-4" />
          <div className="absolute top-0 left-0 w-full h-full text-white  justify-center  my-36 items-center mb-24">
            <div className="absolute ml-14">
              <div className="text-xl text-center mb-3">
                Lamborghini Abu Dhabi and Dubai
              </div>
              <div>
                <div className="mb-1">
                Ultimate Motors upholds its dedication to
                </div>
                <div className="mb-1"> delivering unrivaled excellence in </div>
                <div className="mb-1">
                customer experience and top-tier </div>
                automotive services.
              </div>
              
            </div>
            <div className="flex justify-between mt-56 mx-4">
                <div><img className="border border-white p-1 px-2" src={ArrowLeft}/></div>
                <div><img className="border border-white p-1 px-2" src={ArrowRight}/></div>
              </div>
          </div>
        </div>
        <div className="flex hidden md:block">
          <div className="font-extrabold text-5xl mb-6 ml-10 mt-10">
            EXPLORE OUR SECTORS
          </div>
         <div><img src={Img5}/></div>
        </div>
       
        <div className="bg-blackhaze-500">
          <div className=" m-12 lg:m-8 mr-16 lg:mr-0">
          <div className=" flex flex-col md:flex-row   lg:blo items-center jut mt-3 justify-between">
            <div className="font-bold text-5xl ml-0 lg:ml-8 text-start"> HIGHLIGHTS</div>
            <div className="ml-4 lg:ml-2 flex  hidden text-nowrap">
              We are pragmatic in our approach to design  and
              handle each project in accordance with its particular
            
              set of   requirements and imperatives. When working in
              conservation            
              areas or on listed buildings we aim to
              respect and retain the best of the historic elements
            
              and to supplement these with contemporary interventions s
              wherever appropriate.
            </div>
            <div className="ml-4 lg:ml-2 flex  ">
              We are pragmatic in our approach to design and 
              handle<br/> each project in accordance with its particular
              <br />
              set of requirements and imperatives. When working in
              <br />
              conservation areas or on listed buildings we aim to
              <br />
              respect and retain the best of the historic elements
              <br />
              and to supplement these with contemporary interventions <br />
              wherever appropriate.
            </div>
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
          <div className="flex  m-4 text-center items-center justify-between flex hidden md:flex ">
            <div className="items-center text-center flex py-10">
              <div className="p-2 py-14 mr-4 border-l border-l-black"> </div>
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
              <div className="p-2 py-14 ml-4 border-r border-r-black"> </div>
            </div>
            <div className="items-center flex text-center">
              <div className="ml-8">
                <div>
                  <div className=" text-5xl">5000+</div>
                  <div className="">Employers</div>
                </div>
                <div className="p-2 px-32 mt-8 border-b border-b-black"> </div>
              </div>
              <div className="p-2 py-14 ml-4 border-r border-r-black"> </div>
            </div>
            <div className="items-center flex text-center">
              <div className="ml-8">
                <div>
                  <div className=" text-5xl">40+</div>
                  <div className="">Nationalities</div>
                </div>
                <div className="p-2 px-32 mt-8 border-b border-b-black"> </div>
              </div>
              <div className="p-2 py-14 ml-4 border-r border-r-black"> </div>
            </div>
            <div className="items-center flex text-center">
              <div className="ml-8">
                <div>
                  <div className=" text-5xl">20+</div>
                  <div className="">Offices / Showrooms</div>
                </div>
                <div className="p-2 px-32 mt-8 border-b border-b-black"> </div>
              </div>
              <div className="p-2 py-14 ml-4 border-r border-r-black"> </div>
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
         
          <div className="hidden md:flex ">
            <div className="font-bold text-5xl ml-14 my-10 ">
              EXPLORE OUR PARTNERS
            </div>
            <div>
              <img src={Img6} className="w-screen" />
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
          <div className="mx-28 my-32 hidden md:block ">
            <div>
              <div className="font-bold text-5xl  my-4">LAMBORGHINI WORLD</div>
              <div>
                <img src={Lamborghini} />
              </div>
            </div>
            <div className="mt-5">
              <div className="text-masala-500 font-bold">
                May 20, 2024, Dubai, UAE
              </div>
              <div className="flex justify-between items-center">
                <div className="font-bold text-2xl my-3">
                  LAMBORGHINI URUS SE DEBUTS IN GERMANY
                </div>
                <div>READ MORE</div>
              </div>

              <div>LAMBORGHINI URUS SE DEBUTS IN GERMANY</div>
            </div>
            <div className="mt-16 flex gap-3">
              <div>
                <div>
                  <img src={Img2} />
                </div>
                <div className="text-masala-500 font-bold mt-3">
                  February 22, 2024, Dubai, UAE
                </div>
                <div className="font-bold text-3xl my-3">
                  The Elite Cars Presents
                  <br />
                  Zenvo Aurora - Agil & Tur in
                  <br />
                  the MENA
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
                <div className="font-bold text-3xl my-3">
                  The All-New Jetour T2 <br />
                  Debuts in the UAE
                </div>

                <div className="mt-12">
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
                <div className="font-bold text-3xl my-3">
                  2023 Jetour Dashing Makes <br />
                  Its Debut in UAE Through
                  <br />
                  The Elite Cars
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
                <div>
                  <div className="absolute top-0 left-0 w-full h-full text-white  m-20 mb-24">
                    <div className="w-[800px]">
                      <div className="font-extrabold text-4xl text-white">
                        {" "}
                        OUR BRANDS
                      </div>
                      <div className="text-nobel-500 mt-8">
                        Our portfolio showcases a diverse range of projects in
                        different scales and styles, reflecting our commitment
                        to
                        <br /> excellence and innovation in design. With a team
                        of experienced architects, designers and engineers,
                        ELITE GROUP <br />
                        provides end-to-end solutions that change people's life.
                      </div>
                      <div className="mt-12  ">
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
                <div className="bg-woodsmoke-500 p-5 pb-36 h-screen  ">
                    <div className="justify-center items-center flex">
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
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
