import React, { useState } from 'react';
import Logo from '../assets/Logo.png'
import { Squash as Hamburger } from 'hamburger-react';
import SocialLinks from './SocialLinks';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className='fixed z-50 w-screen'>
        <div className="flex justify-between px-[2.5%] py-4 bg-[linear-gradient(rgba(15,15,15,0.7),rgba(0,0,0,0))]">
          <SocialLinks className='gap-2 hidden md:flex items-center' />
          <img src={Logo} className=' mr-0 md:mr-8' />
          <div className='flex items-center gap-8'>
            <a href='/contact-us' className='text-white text-lg hidden md:flex'>CONTACT</a>
            <Hamburger toggled={showMenu} toggle={setShowMenu} color="white" />
          </div>
        </div>
      </div>
      <div className={`menu w-screen h-screen fixed z-40 bg-[#b5aba1] transition-all duration-1000 ease-in-out ${showMenu ? 'bottom-0' : 'bottom-full'}`}>
        <div className='relative h-screen w-screen'>
          <div className="grid content-center h-full px-[2.5%] gap-3">
            <a href='/' className='text-white text-3xl'>HOME</a>
            <a href='/about-group' className='text-white text-3xl'>ABOUT GROUP</a>
            <a href='/group-companies' className='text-white text-3xl'>GROUP COMPANIES</a>
            <a href='/careers' className='text-white text-3xl'>CAREERS</a>
            <a href='/media-center' className='text-white text-3xl'>MEDIA CENTER</a>
            <a href='/contact-us' className='text-white text-3xl'>CONTACT US</a>
          </div>

          <SocialLinks className='absolute z-30 bottom-[3%] right-[3%] gap-2 md:hidden flex items-center' />
        </div>
      </div>
    </>
  );
}

export default Navbar;
