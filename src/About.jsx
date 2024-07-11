import React from 'react'
import Navbar from './Navbar'

import aboutimg from './assets/about.png'
import Footer from './Footer'

function About() {
  return (
    <>
    <Navbar/>

    <section className=' min-h-screen bg-[rgb(17,24,39)] flex flex-col md:flex-row justify-around items-center p-5 md:p-0 cursor-default'>
    <div className='w-full mt-10  md:w-[40%] mb-5 md:mb-0'>
        <img src={aboutimg} alt="About Image" className='w-full' />
    </div>
    <div className='w-full md:w-[45%] text-center md:text-left'>
        <h1 className='text-[30px] md:text-[40px] text-white'>
            About <span className='text-[rgb(26,209,163)] font-[700]'>Me</span>
        </h1>
        <p className='text-white mt-5'>
            <span className='text-[rgb(26,209,163)]'>»</span> I am an undergraduate of <span className='text-[rgb(26,209,163)]'>Computer Science</span> from Superior University of Lahore.
        </p>
        <p className='text-white mt-5'>
            <span className='text-[rgb(26,209,163)]'>»</span> I love to explore new technologies and leverage them to solve real-life problems. I am a passionate learner and always ready to learn and work across technologies and domains 💡
        </p>
        <p className='text-white mt-5'>
            <span className='text-[rgb(26,209,163)]'>»</span> I am currently working on my <span className='text-[rgb(26,209,163)]'>Backend & Frontend Developing</span> skills and exploring new technologies. I am also open to any <span className='text-[rgb(26,209,163)]'>Web Development</span> and <span className='text-[rgb(26,209,163)]'>UI/UX Design</span> opportunities.
        </p>
        <p className='text-white mt-5'>
            <span className='text-[rgb(26,209,163)]'>»</span> Whenever possible, I also apply my passion for developing products with <span className='text-[rgb(26,209,163)]'>HTML/CSS</span> and modern TypeScript & JavaScript libraries and frameworks like <span className='text-[rgb(26,209,163)]'>React.js</span>.
        </p>
    </div>
</section>

    <Footer/>
    </>
  )
}

export default About