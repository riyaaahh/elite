import React, { useEffect, useRef } from "react";
import LamborghiniMob from "../assets/LamborghiniMob.png";
import LamborghiniImg from "../assets/LamborghiniImg.png";
import { gsap } from "gsap";

const Lamborghini = () => {
  const headingRef = useRef(null); // Ref for the heading element
  const mainImageRef = useRef(null); // Ref for the main image

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateHeading();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    observer.observe(headingRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateHeading = () => {
    const headingTimeline = gsap.timeline();
    const imagesTimeline = gsap.timeline({ defaults: { opacity: 0, y: 50, ease: "power3.out" } });

    // Animation for heading
    headingTimeline.fromTo(
      headingRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animation for main image
    imagesTimeline.fromTo(
      mainImageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Animation for smaller images with stagger effect
    imagesTimeline.fromTo(
      ".lamborghini-image",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.3, ease: "power3.out" },
      "-=0.6" // Delay after the main image animation
    );
  };

  return (
    <div>
      <div className="mx-4 lg:mx-24 my-4 lg:my-32">
        <div className="mx-4 lg:mx-0 lg:my-4 my-32 hidden md:block relative">
          <div className="hidden md:block">
            <div className="font-bold text-5xl my-4" ref={headingRef}>
              LAMBORGHINI WORLD
            </div>
            <div className="relative " ref={mainImageRef}>
              <img
                src={LamborghiniImg}
                alt="Lamborghini"
                className="w-full h-auto "
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
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="transform  md:block lamborghini-image"
              style={{ width: "calc(33.33% - 1rem)" }}
            >
              <div className="relative h-full">
                <div
                  className="inset-0 bg-cover bg-center hover:scale-95 transition-transform duration-300"
                  style={{ backgroundImage: `url(${LamborghiniMob})` }}
                >
                  <div className="z-10 px-12 py-12 h-full flex flex-col justify-end bg-black bg-opacity-50">
                    <div className="flex lg:hidden justify-between">
                      <div className="text-white text-base font-extrabold text-nowrap">
                        NEWS
                      </div>
                      <div className="text-white text-center text-sm mt-1">
                        SWIPE
                      </div>
                    </div>
                    <div className="text-white font-extrabold text-2xl text-nowrap my-4">
                      LAMBORGHINI WORLD
                    </div>
                    <div className="text-white text-masala-500 font-bold">
                      May 20, 2024, Dubai, UAE
                    </div>
                    <div className="text-white font-bold text-xl my-3">
                      LAMBORGHINI URUS SE DEBUTS IN GERMANY
                    </div>
                    <div className="text-white">
                      LAMBORGHINI URUS SE DEBUTS IN GERMANY
                    </div>
                    <div>
                      <button className="p-1 border-chicago-400 mt-2 border text-chicago-400 rounded-full px-10">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lamborghini;
