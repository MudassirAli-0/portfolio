import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import propic from "./assets/d114decc-542b-4fa9-ae31-18060ef4b2f8.jfif";
import Navbar from "./Navbar";
import Footer from "./Footer";
import resumePDF from './assets/MudassirCV.pdf'; // Import the PDF file

const Home = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["Frontend Developer", "Web Designer"], // Words to type
      typeSpeed: 100, // Typing speed in milliseconds
      backSpeed: 60, // Backspacing speed in milliseconds
      loop: true, // Whether to loop through the words
    });

    return () => {
      typed.destroy(); // Cleanup typed instance on unmount
    };
  }, []);

  // Function to handle download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'MudassirCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <section className="pt-[170px] pb-[170px] flex items-center justify-center bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:mt-16">
          {/* Left Column */}
          <div className="w-full md:w-1/2 md:pr-8">
            <p className="text-lightgrey text-xl md:text-3xl">HELLO, THIS IS</p>
            <h1 className="text-5xl md:text-6xl font-bold mt-2 md:mt-4">
              Mudassir Ali
            </h1>
            <h3 className="text-2xl md:text-4xl mt-2 md:mt-4">
              <span className="text-white">I'm a </span>
              <span ref={typingRef} className="text-[rgb(26,209,163)]"></span>
            </h3>
            <p className="text-md md:text-xl mt-4 md:mt-6">
              Welcome to my web developer portfolio! I'm Mudassir Ali, a skilled
              and creative web developer with a passion for creating beautiful,
              responsive, and user-friendly websites. I've worked on a variety of
              web projects, ranging from personal blogs to e-commerce platforms.
            </p>

            <button
              onClick={handleDownload} // Trigger the download on click
              className="w-48 md:w-56 mt-5 p-3 text-white text-lg cursor-pointer rounded-lg border border-[rgb(26,209,163)] bg-transparent 
              hover:bg-[rgb(26,209,163)] hover:text-gray-900 transition duration-300 ease-in-out 
              shadow-md"
              style={{ boxShadow: "0px 0px 10px 3px rgba(26, 209, 163, 0.75)" }}
            >
              Download CV
            </button>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <div className="w-64 md:w-80 h-64 md:h-80 overflow-hidden rounded-full border-4 border-[rgb(26,209,163)]">
              <img
                src={propic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
