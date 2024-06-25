import React from 'react';
import FB from '../assets/FB.png'
import IG from '../assets/IG.png'
import Lin from '../assets/Lin.png'
import Twtr from '../assets/Twtr.png'
import Yt from '../assets/Yt.png'
import Logo from '../assets/Logo.png'
import { Bars4Icon } from '@heroicons/react/24/solid';


const Navbar = () => {
  return (
    <div className='bg-transparent p-2 px-8 font-barlow '>
        <div className='flex justify-between items-center'>
        <div className='flex gap-6  hidden md:flex'>
    <div><img src={FB} alt="Facebook" /></div>
    <div><img src={Lin} alt="LinkedIn" /></div>
    <div><img src={IG} alt="Instagram" /></div>

    <div><img src={Yt} alt="Youtube" /></div>
    <div><img src={Twtr} alt="Twitter" /></div>

</div>



            <div><img src={Logo} className=' mr-0 md:mr-8'/></div>
            <div className='flex gap-8  '>
                <div className='text-white text-lg hidden md:flex'>CONTACT</div>
                <div><Bars4Icon className='w-8 h-8 text-white'/></div>

            </div>
        </div>
      
    </div>
  );
}

export default Navbar;
