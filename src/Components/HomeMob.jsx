import React from "react";
import Navbar from "./Navbar";
import AboutImg from "./../assets/AboutImg.png";
import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import LamborghiniMob from "../assets/LamborghiniMob.png";
import Footer from "../assets/Footer.png";
import Logo from "./../assets/Logo.png";
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.png";
import Logo5 from "../assets/Logo5.png";
import Logo6 from "../assets/Logo6.png";
import Logo7 from "../assets/Logo7.png";
import ArrowLeft from '../assets/ArrowLeft.png'
import ArrowRight from '../assets/ArrowRight.png'
import FB from "../assets/FB.png";
import IG from "../assets/IG.png";
import ImgMob1 from "../assets/ImgMob1.png";
import ImgMob4 from "../assets/ImgMob4.png";
import Lin from "../assets/Lin.png";
import ImgMob3 from "../assets/ImgMob3.png";

import Twtr from "../assets/Twtr.png";
import Yt from "../assets/Yt.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Linkedin from "../assets/Linkedin.png";
import Youtube from "../assets/Youtube.png";
import Instagram from "../assets/Instagram.png";
import { Bars4Icon } from "@heroicons/react/24/solid";
const HomeMob = () => {
  return (
    <div className=" h-screen w-screen">
      <div className="bg-woodsmoke-500   font-barlow ">
        <div className="mx-6">
          <div className="flex items-center  justify-between  ">
            <div>
              <img src={Logo} />
            </div>

            <div>
              <Bars4Icon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="bg-black text-white pt-28 pl-10 font-barlow pb-28 ">
        <div className="m-4 font-barlow ">WELCOME TO ELITE GROUP HOLDINGS</div>
        <div className="m-4 text-5xl font-bold">
          DRIVING EXCELLENCE <br />
          BUILDING FEATURES
        </div>
        <button className="m-4 p-1 border-white border rounded-full px-10 ">
          EXPLORE
        </button>
        <div className="flex  mt-40 mr-10">
          <div className="border border-x-0 border-t-0 pb-3 text-3xl text-silver-500 w-full">
            Our Company
          </div>
        </div>
      </div>
      <div className="font-barlow flex flex-col bg-white">
        <div className=" m-4">
          <div className="font-extrabold  text-4xl mb-6">ABOUT US</div>
          <div className="mb-1">
            <div className="mb-6">
              Elite Group Holding Ltd, is more than just a group holding
              company. We are visionaries, innovators and creators of tomorrow’s
              possibilities.
            </div>
            <div>
              We believe in the power of purpose-driven business. Our commitment
              revolves around enhancing the quality of life within the
              communities we serve and continuously seeking new avenues for
              fostering growth
            </div>
          </div>
          <div>
            <div className=" mt-4 ">
              <img src={AboutImg} style={{ width: "1750px", height: "auto" }} />
            </div>{" "}
            <div className="p-4"></div>
          </div>
        </div>

        <div className="m-6">
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
        <div className="relative inline-block">
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
        <div className="bg-blackhaze-500">
          <div className="  items-center mt-3">
            <div className="font-bold text-5xl m-8 mr-12"> HIGHLIGHTS</div>
            <div className="m-4">
              We are pragmatic in our approach to design and 
              handle each project in accordance with its particular
              set of requirements and imperatives. When working in
              conservation areas or on listed buildings we aim to
              respect and retain the best of the historic elements
              and to supplement these with contemporary interventions 
              wherever appropriate.
            </div>
          
          </div>
          <div className="  text-center items-center justify-center ml-4 mr-4 ">
           <div className="  gap-2 flex">
            <div className="bg-black  text-white   text-center justify-center items-center w-full py-16 ">
              <div className="text-6xl">30+</div>
              <div className="text-xs text-nowrap">Years of experience</div>
            </div>
            <div className="bg-black  text-white  text-center  justify-center items-center w-full py-16  ">
            <div className="text-6xl">5000+</div>
            <div className="text-xs">Employers</div>
            </div>
           </div>
           <div className=" gap-2 flex ">
            <div className="bg-black text-white mt-2 text-center justify-center  items-center w-full  py-16 ">
            <div className="text-6xl">40+</div> 
            <div className="text-xs">Nationalities</div>
            </div>
            <div className="bg-black  text-white mt-2  text-center justify-center items-center w-full  py-16">
            <div className="text-6xl">20+</div>
            <div className="text-nowrap text-xs">Offices / Showrooms</div>
            </div>
           </div>
           
          </div>
          <div className="mt-10">
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
         
          <div className=" m-6">
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
          <div className="flex flex-col">
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
                  <div className="w-full border-t border-white"></div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default HomeMob;
