import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BackgroundImage from "../../assets/69ef976c37520c78cc1a8ccc57885bdf.png";
import BackgroundImage2 from "../../assets/b1d4e88e46f820c7640c4d2b42e3a3aa.png";
import ImageRakanTurki from "../../assets/rakan-turki.png";
import Logo from '../../assets/Logo.png';
import AwardImage from '../../assets/39ba59d0bbe862e6563ad730221e9051.png';
import { SocialIcon } from "react-social-icons";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="h-screen w-screen relative">
                <img src={BackgroundImage} alt="" className="object-cover object-center h-screen w-screen brightness-50" />

                <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    <div className="text-lg md:text-xl font-medium mb-4 uppercase">Elite Group Holdings</div>
                    <div className="text-4xl md:text-6xl font-extrabold mb-4 uppercase">ABOUT COMPANY</div>
                </div>
            </div>

            <div className="px-[3%]">
                <div className="py-5 flex items-center justify-end">
                    <div className="text-[#404040]">
                        <a href="">Home</a> / About us
                    </div>
                </div>
            </div>

            <div className="container mx-auto mb-10">
                <div className="font-extrabold text-4xl uppercase sm:ps-0 ps-[3%]">Meet the team</div>
            </div>

            <div className="py-5 bg-[#F7F7F7]">
                <div className="md:grid grid-cols-2 gap-16 items-center md:px-0 px-[3%]">
                    <img src={ImageRakanTurki} alt="" className="h-full object-cover" />

                    <div className="md:mt-0 mt-5">
                        <div className="text-2xl mb-3">Rakan Turki</div>
                        <p className="md:mb-10 mb-5 font-bold">CEO</p>
                        <p className="text-xs md:text-sm mb-5">Elite Group Holding Ltd, is more than just a group holding company. We are visionaries, innovators and creators of tomorrow’s possibilities.</p>
                        <p className="text-xs md:text-sm mb-5">We believe in the power of purpose-driven business. Our commitment revolves around enhancing the quality of life within the communities we serve and continuously seeking new avenues for fostering growth</p>
                        <p className="text-xs md:text-sm mb-5">We believe in the power of purpose-driven business. Our commitment revolves around enhancing the quality of life within the communities we serve and continuously seeking new avenues for fostering growth</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto md:py-24 py-16 md:px-0 px-[3%]">
                <div className="font-bold text-xl mb-5">ORGANIZATION STRUCTURE</div>

                <div className="grid md:grid-cols-3 md:gap-10">
                    <div className="relative aspect-square">
                        <img src={ImageRakanTurki} className="h-full object-cover brightness-75 hover:grayscale transition-all duration-300 ease-in-out cursor-pointer" />
                        <div className="absolute bottom-3 w-full px-5">
                            <div className="flex items-center justify-between">
                                <div className="text-white">
                                    <div>Rakan Turki</div>
                                    <div>Chairman & Chief Executive Officer</div>
                                </div>
                                <SocialIcon network='linkedin' bgColor='white' fgColor='black' />
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square hidden md:block">
                        <img src={ImageRakanTurki} className="h-full object-cover brightness-75 hover:grayscale transition-all duration-300 ease-in-out cursor-pointer" />
                        <div className="absolute bottom-3 w-full px-5">
                            <div className="flex items-center justify-between">
                                <div className="text-white">
                                    <div>Rakan Turki</div>
                                    <div>Chairman & Chief Executive Officer</div>
                                </div>
                                <SocialIcon network='linkedin' bgColor='white' fgColor='black' />
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square hidden md:block">
                        <img src={ImageRakanTurki} className="h-full object-cover brightness-75 hover:grayscale transition-all duration-300 ease-in-out cursor-pointer" />
                        <div className="absolute bottom-3 w-full px-5">
                            <div className="flex items-center justify-between">
                                <div className="text-white">
                                    <div>Rakan Turki</div>
                                    <div>Chairman & Chief Executive Officer</div>
                                </div>
                                <SocialIcon network='linkedin' bgColor='white' fgColor='black' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-screen h-[75vh]">
                <img src={BackgroundImage2} className="object-cover object-center w-full h-full brightness-50" />
                <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    <img src={Logo} className="w-40 mb-5" />
                    <div className="text-xl md:text-2xl font-medium mb-3 uppercase">ABOUT COMPANY</div>
                    <div className="text-md md:text-lg font-medium w-1/2 text-[#B3B3B3]">Enriching Communities program was launched in 2018, to affirm the Group’s commitment to CSR and helping local and international communities. CSR is embedded in the organization’s culture, as we continue to launch initiatives to support the UAE leadership’s vision and contribute to the economic development while improving the quality of life of our society, customers, partners, and employees.</div>
                </div>
            </div>

            <div className="py-24 container mx-auto md:px-0 px-[3%]">
                <div className="text-2xl font-medium mb-3">Awards & Publications</div>
                <p>AW Rostamani has a long, rich heritage started in 1954 and it has grown to become one of the largest, privately-owned family businesses in the Middle East.</p>

                <div className="grid md:grid-cols-3 mt-5 md:gap-10">
                    <div className="md:col-span-2">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="border-b-2 border-[#B0B0B0] text-start p-2">Project</th>
                                    <th className="border-b-2 border-[#B0B0B0] text-start p-2">Context</th>
                                    <th className="border-b-2 border-[#B0B0B0] text-start p-2">Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-[##717171] hover:bg-black hover:text-white transition-all duration-300">
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">dubizzle Cars</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">The Best Car Dealer Awards</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">2023</td>
                                </tr>
                                <tr className="text-[##717171] hover:bg-black hover:text-white transition-all duration-300">
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">dubizzle Cars</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">The Best Car Dealer Awards</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">2023</td>
                                </tr>
                                <tr className="text-[##717171] hover:bg-black hover:text-white transition-all duration-300">
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">dubizzle Cars</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">The Best Car Dealer Awards</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">2023</td>
                                </tr>
                                <tr className="text-[##717171] hover:bg-black hover:text-white transition-all duration-300">
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">dubizzle Cars</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">The Best Car Dealer Awards</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">2023</td>
                                </tr>
                                <tr className="text-[##717171] hover:bg-black hover:text-white transition-all duration-300">
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">dubizzle Cars</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">The Best Car Dealer Awards</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">2023</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="">
                        <img src={AwardImage} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AboutUs;
