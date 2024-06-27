import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Img1 from "../../assets/Img1.png";
import Img2 from "../../assets/Img2.png";
import Img3 from "../../assets/Img3.png";
import Img8 from "../../assets/Img8.png";
import Img5 from "../../assets/Img5.png";
import Img6 from "../../assets/Img6.png";

const SectorExplore = () => {
  const backgroundRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const background = backgroundRef.current;
    const texts = textRefs.current;

    gsap.set(texts, { y: '100%', autoAlpha: 0 });

    const handleMouseEnter = (index) => {
      gsap.to(background, { backgroundImage: `url(${getBackgroundImage(index)})`, duration: 0.3 });
      gsap.to(texts[index], { y: '0%', autoAlpha: 1, duration: 0.3 });
    };

    const handleMouseLeave = (index) => {
      gsap.to(texts[index], { y: '100%', autoAlpha: 0, duration: 0.3 });
    };

    texts.forEach((text, index) => {
      text.addEventListener('mouseenter', () => handleMouseEnter(index));
      text.addEventListener('mouseleave', () => handleMouseLeave(index));
    });

    return () => {
      texts.forEach((text, index) => {
        text.removeEventListener('mouseenter', () => handleMouseEnter(index));
        text.removeEventListener('mouseleave', () => handleMouseLeave(index));
      });
    };
  }, []);

  const getBackgroundImage = (index) => {
    switch (index) {
      case 0:
        return Img1;
      case 1:
        return Img2;
      case 2:
        return Img3;
      case 3:
        return Img8;
      case 4:
        return Img5;
      case 5:
        return Img6;
      default:
        return '';
    }
  };

  return (
    <div className="relative h-screen">
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center transition-all duration-300"
        style={{ backgroundImage: `url(${Img6})` }}
      ></div>

      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="flex w-full h-full justify-between">
          {['LAMBORGHINI', 'ZENVO AUTOMOBILE', 'JETOUR', 'THE ELITE CARS', 'SUN CITY MOTORS', 'ECOMMERCE'].map((text, index) => (
            <div
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              className="flex hidden md:flex border-r border-white cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="pb-1 text-white items-end mt-56">
                <div className="mt-80 text-xl text-center mr-8 px-4">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectorExplore;
