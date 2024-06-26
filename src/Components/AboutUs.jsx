import React from 'react';
import AboutImg from "./../assets/AboutImg.png";
import AboutImgMob from "./../assets/AboutImgMob.png";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Solid icons from Heroicons v1

const AboutUs = () => {
  return (
    <div>
       <div className="flex flex-col-reverse lg:flex-row mx-4 lg:mx-0  lg:my-0">
        <div className="lg:w-2/4 mr-5 lg:mr-0 mt-2 lg:mt-0">
  <img src={AboutImg} className="hidden lg:block" />
  <img src={AboutImgMob} className="block lg:hidden" />
</div>
          <div className="lg:w-1/2 ml-2 mt-4 lg:mt-16 lg:ml-4 ">
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
    </div>
  );
}

export default AboutUs;
