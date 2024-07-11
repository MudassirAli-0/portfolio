import React from 'react'
import Navbar from './Navbar'

import ProjectButton from './ProjectButton'
import Footer from './Footer'



function Projects() {
  return (
    <>
    <Navbar/>


    <section className='w-full min-h-screen bg-[rgb(17,24,39)] px-4 sm:px-6 lg:px-8 py-12'>
    <h1 className='mt-8 md:mt-32 text-white text-center text-4xl md:text-5xl'>My <span className='text-[rgb(26,209,163)]  font-bold'>Projects</span></h1>

    {/* HTML & CSS Projects */}
    <div className='container mx-auto mt-12 max-w-3xl'>
        <h1 className='text-white text-2xl md:text-3xl font-medium '>HTML & CSS <span className='text-[rgb(26,209,163)]'>PROJECTS</span></h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
            <a target='_blank' href="https://mudassirali-0.github.io/hellion-website/">
            <ProjectButton title="Hillion" />
            </a>
            <a target='_blank' href="https://mudassirali-0.github.io/newreach/">
            <ProjectButton title="NewReach" />
            </a>
            <a target='_blank' href="https://mudassirali-0.github.io/electro-clone/">
            <ProjectButton title="Electro" />
            </a>
            <a target='_blank' href="https://mudassirali-0.github.io/ellamart-website/">
            <ProjectButton title="Ella Mart" />
            </a>
        </div>
    </div>

    {/* JavaScript Projects */}
    <div className='container mx-auto mt-12 max-w-3xl'>
        <h1 className='text-white text-2xl md:text-3xl font-medium '>JAVASCRIPT <span className='text-[rgb(26,209,163)]'>PROJECTS</span></h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
            
            <a target='_blank' href="https://mudassirali-0.github.io/tummy-website/">
            <ProjectButton title="Tummie Website" />
            </a>
            
            <a target='_blank' href=" https://mudassirali-0.github.io/creative/">
            <ProjectButton title="Creative" />
            </a>
            
            <ProjectButton title="Dashboard" />
            <ProjectButton title="Calculator" />
        </div>
    </div>
</section>



<Footer/>
    
    </>
  )
}

export default Projects