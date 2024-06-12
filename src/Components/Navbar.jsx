import React from 'react';
import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import Linkedin from '../assets/Linkedin.png'
import Youtube from '../assets/Youtube.png'
import Instagram from '../assets/Instagram.png'
import Logo from '../assets/Logo.png'
import { Bars4Icon } from '@heroicons/react/24/solid';


const Navbar = () => {
  return (
    <div className='bg-woodsmoke-500 p-4 px-20 font-barlow '>
        <div className='flex justify-between items-center'>
            <div className='flex gap-6'>
                <div><img src={Facebook}/></div>
                <div><img src={Twitter}/></div>
                <div><img src={Linkedin}/></div>
                <div><img src={Youtube}/></div>
                <div><img src={Instagram}/></div>

            </div>
            <div><img src={Logo}/></div>
            <div className='flex gap-8'>
                <div className='text-white text-lg'>OUR GROUP</div>
                <div className='text-white text-lg'>CONTACT</div>
                <div><Bars4Icon className='w-8 h-8 text-white'/></div>

            </div>
        </div>
      
    </div>
  );
}

export default Navbar;
