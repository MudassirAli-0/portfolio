import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {

    

  return (
    <>
      <Navbar />

      <section className="w-full bg-[rgb(17,24,39)] p-1  pb-8   ">
    <h1 className="mt-20   text-white text-center text-4xl md:text-5xl">
        Contact <span className="text-[rgb(26,209,163)] font-bold">US</span>
    </h1>

    <div className="w-full max-w-[600px] mx-auto mt-10 bg-[rgb(42,42,42)] rounded-lg p-3">
        <div className="w-[95%] m-auto">
            <p className="mt-10 text-gray-400 text-[18px] font-medium">
                Full Name
            </p>
            <input
                type="text"
                className="text-white outline-none w-full bg-transparent border border-gray-500 rounded-md p-2 mt-2"
            />
            <p className="mt-5 text-gray-400 text-[18px] font-medium">
                Email
            </p>
            <input
                type="email"
                className="text-white outline-none w-full bg-transparent border border-gray-500 rounded-md p-2 mt-2"
            />

            <p className="mt-5 text-gray-400 text-[18px] font-medium">
                Your message
            </p>

            <textarea
                className="rounded-md text-white p-2 w-full outline-none h-32 bg-transparent border border-gray-500 mt-2"
            ></textarea>

            <button className="w-full md:w-auto mt-5 p-3 text-white cursor-pointer rounded-lg border border-[rgb(26,209,163)] bg-transparent 
                hover:bg-[rgb(26,209,163)] hover:text-gray-900 transition duration-300 ease-in-out shadow-md"
                style={{ boxShadow: "0px 0px 10px 3px rgba(26, 209, 163, 0.75)" }}>
                Submit
            </button>
        </div>
    </div>
</section>

      <Footer/>
    </>
  );
}

export default Contact;
