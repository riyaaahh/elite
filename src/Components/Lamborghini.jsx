import React from "react";

import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import LamborghiniMob from "../assets/LamborghiniMob.png"
import LamborghiniImg from "../assets/LamborghiniImg.png";

const Lamborghini = () => {
  return (
    <div>
     <div className="mx-4 lg:mx-24 my-4 lg:my-32   ">
            <div className="mx-4 lg:mx-0 lg:my-4 my-32 hidden md:block  relative">
              <div className="hidden md:block">
                <div className="font-bold text-5xl my-4">LAMBORGHINI WORLD</div>
                <div className="relative">
                  <img
                    src={LamborghiniImg}
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
            <div className="mt-4 lg:mt-16 flex gap-3 justify-between">
  <div className="m-6 hidden md:block">
    <div className="relative h-full">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${LamborghiniMob})` }}>
        <div className="relative z-10 p-6 h-full flex flex-col justify-end bg-black bg-opacity-50">
          <div className="text-white text-base font-extrabold text-nowrap">NEWS</div>
          <div className="text-white text-center text-sm mt-1">SWIPE</div>
          <div className="text-white font-extrabold text-2xl text-nowrap my-4">LAMBORGHINI WORLD</div>
          <div className="text-white text-masala-500 font-bold">May 20, 2024, Dubai, UAE</div>
          <div className="text-white font-bold text-xl my-3">LAMBORGHINI URUS SE DEBUTS IN GERMANY</div>
          <div className="text-white">LAMBORGHINI URUS SE DEBUTS IN GERMANY</div>
          <div>
            <button className="p-1 border-chicago-400 mt-2 border text-chicago-400 rounded-full px-10">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="m-6 hidden md:block">
    <div className="relative h-full">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${LamborghiniMob})` }}>
        <div className="relative z-10 p-6 h-full flex flex-col justify-end bg-black bg-opacity-50">
          <div className="text-white text-base font-extrabold text-nowrap">NEWS</div>
          <div className="text-white text-center text-sm mt-1">SWIPE</div>
          <div className="text-white font-extrabold text-2xl text-nowrap my-4">LAMBORGHINI WORLD</div>
          <div className="text-white text-masala-500 font-bold">May 20, 2024, Dubai, UAE</div>
          <div className="text-white font-bold text-xl my-3">LAMBORGHINI URUS SE DEBUTS IN GERMANY</div>
          <div className="text-white">LAMBORGHINI URUS SE DEBUTS IN GERMANY</div>
          <div>
            <button className="p-1 border-chicago-400 mt-2 border text-chicago-400 rounded-full px-10">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="m-6 hidden md:block">
    <div className="relative h-full">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${LamborghiniMob})` }}>
        <div className="relative z-10 p-6 h-full flex flex-col justify-end bg-black bg-opacity-50">
          <div className="text-white text-base font-extrabold text-nowrap">NEWS</div>
          <div className="text-white text-center text-sm mt-1">SWIPE</div>
          <div className="text-white font-extrabold text-2xl text-nowrap my-4">LAMBORGHINI WORLD</div>
          <div className="text-white text-masala-500 font-bold">May 20, 2024, Dubai, UAE</div>
          <div className="text-white font-bold text-xl my-3">LAMBORGHINI URUS SE DEBUTS IN GERMANY</div>
          <div className="text-white">LAMBORGHINI URUS SE DEBUTS IN GERMANY</div>
          <div>
            <button className="p-1 border-chicago-400 mt-2 border text-chicago-400 rounded-full px-10">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          </div> 
    </div>
  );
}

export default Lamborghini;
