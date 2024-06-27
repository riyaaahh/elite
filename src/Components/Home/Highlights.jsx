import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Highlights = () => {
  const counters = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateHighlights();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(headingRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateHighlights = () => {
    const timeline = gsap.timeline();

    // Animation for heading
    timeline.fromTo(
      headingRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animation for counters
    counters.current.forEach((counter) => {
      const targetNumber = parseInt(counter.getAttribute('data-target'), 10);
      gsap.to(counter, {
        innerText: targetNumber,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power1.inOut",
        onUpdate: () => {
          counter.innerText = Math.ceil(counter.innerText) + '+';
        }
      });
    });
  };

  return (
    <div>
      <div className="lg:p-8  lg:mr-0  bg-blackhaze-500">
        <div className=" ">
          <div className="py-6 flex flex-col md:flex-row sm:items-center gap-4 lg:gap-32 md:gap-4 mx-6 mt-3 justify-between">
            <div className="font-extrabold text-4xl ml-0 lg:ml-8 text-start" ref={headingRef}>
              HIGHLIGHTS
            </div>
            <div className="lg:gap-32 flex">
              <div className="text-base">
                We are pragmatic in our approach to design and handle each project in accordance with its particular set of requirements and imperatives. When working in conservation areas or on listed buildings we aim to respect retain the best of the historic elements and to supplement these with contemporary interventions wherever appropriate.
              </div>
              <div className="flex hidden md:flex text-base">
                Energy efficiency and sustainability issues are given serious consideration at the outset of the design process, in particular on new-build projects. Properly considered they play an important part in adding present and future value.
              </div>
            </div>
          </div>
          <div className="ml-4 lg:ml-2 flex hidden text-xs text-nowrap">
            We are pragmatic in our approach to design and handle each project in accordance with its particular set of requirements and imperatives. When working in conservation areas or on listed buildings we aim to respect and retain the best of the historic elements and to supplement these with contemporary interventions s wherever appropriate.
          </div>


          <div className="flex m-4 text-center items-center justify-between hidden md:flex">
            <div className="items-center text-center flex py-10">
              <div className="p-2 py-14 border-l pr-4 border-l-black"></div>
              <div>
                <div ref={el => counters.current[0] = el} data-target="30" className="text-5xl">0+</div>
                <div>Years of experience</div>
                <div className="p-2 px-32 mt-8 border-b border-b-black"></div>
              </div>
              <div className="p-2 py-14 border-r pl-4 border-r-black"></div>
            </div>
            <div className="items-center text-center flex py-10">
              <div>
                <div ref={el => counters.current[1] = el} data-target="5000" className="text-5xl">0+</div>
                <div>Employers</div>
                <div className="p-2 px-32 mt-8 border-b border-b-black"></div>
              </div>
              <div className="p-2 py-14 pl-4 pr-4 border-r border-r-black"></div>
            </div>
            <div className="items-center text-center flex py-10">
              <div>
                <div ref={el => counters.current[2] = el} data-target="40" className="text-5xl">0+</div>
                <div>Nationalities</div>
                <div className="p-2 px-32 mt-8 border-b border-b-black"></div>
              </div>
              <div className="p-2 py-14 border-r pl-4 pr-4 border-r-black"></div>
            </div>
            <div className="items-center text-center flex py-10">
              <div>
                <div ref={el => counters.current[3] = el} data-target="20" className="text-5xl">0+</div>
                <div>Offices/Showrooms</div>
                <div className="p-2 px-32 mt-8 border-b border-b-black"></div>
              </div>
              <div className="p-2 py-14 border-r pl-4 border-r-black"></div>
            </div>
          </div>
          <div className="text-center px-4 items-center justify-center mt-4 md:hidden ">
            <div className="gap-2 flex justify-between">
              <div className="bg-white text-black border border-black text-center justify-center items-center flex-1 p-8 py-10">
                <div className="text-4xl">30+</div>
                <div className="text-xs text-nowrap">Years of experience</div>
              </div>
              <div className="bg-white text-black border border-black text-center justify-center items-center flex-1 p-8 py-10">
                <div className="text-4xl">5000+</div>
                <div className="text-xs">Employers</div>
              </div>
            </div>
            <div className="gap-2 flex justify-between mt-3 mb-3">
              <div className="bg-white text-black border border-black text-center justify-center items-center flex-1 p-8 py-10">
                <div className="text-4xl">40+</div>
                <div className="text-xs text-nowrap">Nationalities</div>
              </div>
              <div className="bg-white text-black border border-black text-center justify-center items-center flex-1 p-8 py-10">
                <div className="text-4xl">20+</div>
                <div className="text-xs">Offices / Showrooms</div>
              </div>
            </div>

            {/* <div className="gap-2 flex justify-between">
              <div className="bg-white text-black border border-black mt-2 text-center justify-center items-center w-full p-8 px-12 py-10">
                <div className="text-4xl">40+</div>
                <div className="text-xs">Nationalities</div>
              </div>
              <div className="bg-white text-black border border-black mt-2 text-center justify-center items-center w-full p-7 py-10">
                <div className="text-4xl">20+</div>
                <div className="text-xs text-nowrap">Offices / Showrooms</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
