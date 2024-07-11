import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen); // Toggle the sidebarOpen state
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <div className={`fixed  left-0 w-[200px] md:w-[300px] top-0 h-full bg-gray-900 text-white z-50 transition-transform duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <ul className="space-y-4">
           
          <li  className="text-lg hover:text-[rgb(26,209,163)]">
           <Link to={'/'}>
              Home
           </Link>
          </li>
          <li  className="text-lg hover:text-[rgb(26,209,163)]">
           <Link to={'/about'}>
              About
           </Link>
          </li>
          <li  className="text-lg hover:text-[rgb(26,209,163)]">
           <Link to={'/services'}>
              Services
           </Link>
          </li>
          <li  className="text-lg hover:text-[rgb(26,209,163)]">
           <Link to={'/projects'}>
              Projects
           </Link>
          </li>
          <li  className="text-lg hover:text-[rgb(26,209,163)]">
           <Link to={'/contact'}>
              Contact
           </Link>
          </li>
      
          </ul>
        </div>
      </div>

      {/* Navbar */}
      <nav className="  bg-[rgb(19,19,26)] text-white fixed w-full top-0 left-0 z-40 transition-colors duration-300">
        <div className="w-[95%] md:w-[98%]  m-auto  container mx-auto flex justify-between items-center p-4">
          
          <Link to={'/home'}>
          
          <h1 className="text-2xl font-bold cursor-pointer">Mudassir <span className='text-[rgb(26,209,163)]'>Ali</span></h1>
          
          </Link>

          <div id="open-menu-btn" className="md:hidden text-2xl cursor-pointer" onClick={handleMenuToggle}>
            {sidebarOpen ? '✖' : '☰'}
          </div>
          {/* Desktop Menu */}
            
          <ul className="hidden md:flex space-x-4">
            
          <li  className="text-lg hover:text-[rgb(26,209,163)]">
           <Link to={'/home'}>
              Home
           </Link>
          </li>
          <li  className="text-lg hover:text-[rgb(26,209,163)]">
           <Link to={'/about'}>
              About
           </Link>
          </li>
          <li  className="text-lg hover:text-[rgb(26,209,163)]">
           <Link to={'/services'}>
              Services
           </Link>
          </li>
          <li  className="text-lg hover:text-[rgb(26,209,163)]">
           <Link to={'/projects'}>
              Projects
           </Link>
          </li>
          <li  className="text-lg hover:text-[rgb(26,209,163)]">
           <Link to={'/contact'}>
              Contact
           </Link>
          </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
