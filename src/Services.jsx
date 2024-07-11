import React from 'react'
import Navbar from './Navbar'

import { IoCodeSlash } from "react-icons/io5";

import { LuFileCode } from "react-icons/lu";
import { TbDeviceDesktopCode } from "react-icons/tb";
import Footer from './Footer';


function Services() {
  return (
    <>
    <Navbar/>


    <section className='min-h-screen pt-10 pb-24 bg-[rgb(17,24,39)] px-4 sm:px-6 lg:px-8'>
    <h1 className='mt-8 md:mt-32 text-white text-center text-4xl md:text-5xl '>My <span className='text-[rgb(26,209,163)] font-bold'>Services</span></h1>

    <div className='container mx-auto mt-12 flex flex-wrap justify-center gap-8'>
        <div className='card w-full md:w-[380px] bg-[rgb(32,32,32)] rounded-lg overflow-hidden'>
            <IoCodeSlash className='mx-auto mt-8 text-5xl text-[rgb(26,209,163)]' />
            <div className='p-6'>
                <p className='text-center text-gray-500 mt-4'>High-quality web development services tailored to your needs.</p>
                <h3 className='text-gray-300 text-center text-xl mt-5'>Web Development</h3>
            </div>
        </div>

        <div className='card w-full md:w-[380px] bg-[rgb(32,32,32)] rounded-lg overflow-hidden'>
            <LuFileCode className='mx-auto mt-8 text-5xl text-[rgb(26,209,163)]' />
            <div className='p-6'>
                <p className='text-center text-gray-500 mt-4'>Expert PSD to HTML conversion for pixel-perfect, responsive websites.</p>
                <h3 className='text-gray-300 text-center text-xl mt-5'>PSD To HTML</h3>
            </div>
        </div>

        <div className='card w-full md:w-[380px] bg-[rgb(32,32,32)] rounded-lg overflow-hidden'>
            <TbDeviceDesktopCode className='mx-auto mt-8 text-5xl text-[rgb(26,209,163)]' />
            <div className='p-6'>
                <p className='text-center text-gray-500 mt-4'>Stunning web design services that blend creativity and functionality for a seamless user experience.</p>
                <h3 className='text-gray-300 text-center text-xl mt-5'>Web Design</h3>
            </div>
        </div>
    </div>
</section>

    <Footer/>
    </>
  )
}

export default Services