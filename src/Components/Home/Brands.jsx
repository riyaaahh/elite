import React from 'react'
import Footer from "../../assets/Footer.png";
import Logo from "../../assets/Logo.png";
import Logo2 from "../../assets/Logo2.png";
import Logo3 from "../../assets/Logo3.png";
import Logo4 from "../../assets/Logo4.png";
import Logo5 from "../../assets/Logo5.png";
import Logo6 from "../../assets/Logo6.png";
import Logo7 from "../../assets/Logo7.png";


const Brands = () => {
    return (
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
                                <dissv className="mt-12    ">
                                    <div className="flex gap-8 mt-[50px]">
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
                                    <div className="flex gap-8 mt-[50px]">
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
                                    <div className="flex gap-8 mt-[50px]">
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
                                    <div className="flex gap-8 mt-[50px]">
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

            </div>
        </div>
    )
}

export default Brands