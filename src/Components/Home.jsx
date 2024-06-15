import React from "react";
import Navbar from "./Navbar";
import AboutImg from "./../assets/AboutImg.png";
import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import ImgMob1 from '../assets/ImgMob1.png'
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
import ImgMob2 from "../assets/ImgMob2.png"
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div
      className="bg-black text-white pt-28 pl-10 font-barlow pb-28"
      style={{
        backgroundImage: `url(${ImgMob1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <div className="m-4 font-barlow">WELCOME TO ELITE GROUP HOLDINGS</div>
        <div className="m-4 text-5xl font-bold">
          DRIVING EXCELLENCE <br />
          BUILDING FEATURES
        </div>
        <button className="m-4 p-1 border-white border rounded-full px-10">
          EXPLORE
        </button>

        <div className="flex gap-28 mx-4 mt-40">
          <div className="border border-x-0 border-t-0 pb-3 text-silver-500">Our Company</div>
          <div className="border border-x-0 border-t-0 pb-3 text-silver-500">Automotive</div>
          <div className="border border-x-0 border-t-0 pb-3 text-silver-500">Investments</div>
          <div className="border border-x-0 border-t-0 pb-3 text-silver-500">Real-Estate</div>
          <div className="border border-x-0 border-t-0 pb-3 text-silver-500">Healthcare</div>
          <div className="border border-x-0 border-t-0 pb-3 text-silver-500">Education</div>
          <div className="border border-x-0 border-t-0 pb-3 text-silver-500">Ecommerce</div>
        </div>
      </div>
    </div>

      <div className="font-barlow flex flex-col bg-white">
        <div className="flex">
          <div>
            <div className=" ">
              <img src={AboutImg} style={{ width: "1750px", height: "auto" }} />
            </div>{" "}
            <div className="p-4"></div>
          </div>
          <div className="  ml-4 mt-20">
            {" "}
            <div className="font-extrabold  text-4xl mb-2">ABOUT US</div>
            <div>
              {" "}
              <div className="mb-1">
                Elite Group Holding Ltd, is more than just a group holding
                company. We are visionaries, innovators and creators of
                tomorrow’s possibilities.
              </div>
              <br />
              We believe in the power of purpose-driven business. Our commitment
              revolves around enhancing the quality of life within the
              communities we serve and continuously seeking new avenues for
              fostering growth
            </div>
            <div className="bg-black  px-6 mt-6 rounded-full text-white flex mr-96"> 
              <button className="m-2 p-1 border-black border rounded-full px-10 flex text-center items-center  ">
              <div className="text-nowrap">READ MORE </div>
                <div><ArrowRightIcon className="w-6 h-6"/></div>
                  </button></div>
          </div>
        </div>
        <div className="mx-10">
          <div className="font-extrabold text-5xl mb-6">
            EXPLORE OUR GROUP COMPANIES
          </div>
          <div className="gap-3 flex">
            <button className="bg-white text-black p-1 px-12 border border-black rounded-full">
              AUTOMOTIVE
            </button>
            <button className="bg-white text-black p-1 px-12 border border-black rounded-full">
              INVESTMENTS
            </button>
            <button className="bg-white text-black p-1 px-12 border border-black rounded-full">
              REAL ESTATE
            </button>
            <button className="bg-white text-black p-1 px-12 border border-black rounded-full">
              HEALTHCARE
            </button>
            <button className="bg-white text-black p-1 px-12 border border-black rounded-full">
              EDUCATION
            </button>
            <button className="bg-white text-black p-1 px-12 border border-black rounded-full">
              E-COMMERCE
            </button>
          </div>
        </div>
        <div>
          {" "}
          <img src={ImgMob1} className="w-full mt-4 " />
        </div>
        <div className="bg-blackhaze-500">
          <div className="ml-14">
          <div className="flex  items-center mt-3">
            <div className="font-bold text-5xl ml-4"> HIGHLIGHTS</div>
            <div className="ml-32">
              We are pragmatic in our approach to design and <br />
              handle each project in accordance with its particular
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
            <div className="ml-32">
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
          <div className="flex  m-4 text-center items-center ">
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
          <div>
            <div className="font-bold text-5xl ml-14 my-10">
              EXPLORE OUR PARTNERS
            </div>
            <div>
              <img src={Img1} className="w-screen" />
            </div>
          </div>
          <div className="mx-28 my-32">
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
          <div className="bg-woodsmoke-500">
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
