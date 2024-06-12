import React from 'react';
import Navbar from './Navbar';
import AboutImg from './../assets/AboutImg.png'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <div className='bg-black text-white pt-28 pl-10 font-barlow pb-28 '>
      <div className='m-4 font-barlow '>WELCOME TO ELITE GROUP HOLDINGS</div>
      <div className='m-4 text-5xl font-bold'>DRIVING EXCELLENCE <br/>
      BUILDING FEATURES</div>
      <button className='m-4 p-1 border-white border rounded-full px-10 '>EXPLORE</button>
      <div className='flex gap-28 mx-4 mt-40'>
        <div className='border border-x-0 border-t-0 pb-3 text-silver-500'>Our Company</div>
        <div className='border border-x-0 border-t-0 pb-3 text-silver-500'>Automotive</div>
        <div className='border border-x-0 border-t-0 pb-3 text-silver-500'>Investments</div>
        <div className='border border-x-0 border-t-0 pb-3 text-silver-500'>Real-Estate</div>
        <div className='border border-x-0 border-t-0 pb-3 text-silver-500'>Healthcare</div>      
        <div className='border border-x-0 border-t-0 pb-3 text-silver-500'>Education</div>
        <div className='border border-x-0 border-t-0 pb-3 text-silver-500'>Ecommerce</div>


      </div>
    </div>
    <div className='font-barlow flex flex-col bg-blackhaze-500'>
    <div className='flex'>
      <div>
        <div className='w-[750px] h-[750px]'><img src={AboutImg} /></div>
        </div>
        <div className=' mt-20'>    <div className='font-extrabold  text-4xl mb-2'>ABOUT US</div>
          <div>  <div className='mb-1'>Elite Group Holding Ltd, is more than just a group holding company. We are visionaries, innovators and creators of tomorrow’s possibilities.</ div><br/>

We believe in the power of purpose-driven business. Our commitment revolves around enhancing the quality of life within the communities we serve and continuously seeking new avenues for fostering growth</div>
        </div>

        </div>
        <div>
        <div className='font-extrabold text-5xl mb-4'>EXPLORE OUR GROUP COMPANIES</div>
        <div className='gap-3 flex'>

            <button className='bg-white text-black p-1 px-8 border border-black rounded-full'>AUTOMOTIVE</button>
            <button className='bg-white text-black p-1 px-8 border border-black rounded-full'>INVESTMENTS</button>
            <button className='bg-white text-black p-1 px-8 border border-black rounded-full'>REAL ESTATE</button>
            <button className='bg-white text-black p-1 px-8 border border-black rounded-full'>HEALTHCARE</button>
            <button className='bg-white text-black p-1 px-8 border border-black rounded-full'>EDUCATION</button>
            <button className='bg-white text-black p-1 px-8 border border-black rounded-full'>E-COMMERCE</button>

        </div>
        </div>
    </div>
    </div>
  );
}

export default Home;
