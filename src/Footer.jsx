import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-[rgb(42,42,42)] text-white py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* About section */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-lg font-bold mb-2">Mudassir Ali</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                sequi nobis enim.
              </p>
            </div>

            {/* Permalinks section */}
            <div>
              <h3 className="text-lg font-bold mb-2">Permalinks</h3>
              <ul className="space-y-2">
                <li className="text-md hover:text-gray-400 transition duration-300">
                  <Link to={"/home"}>Home</Link>
                </li>
                <li className="text-md hover:text-gray-400 transition duration-300">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="text-md hover:text-gray-400 transition duration-300">
                  <Link to={"/services"}>Services</Link>
                </li>
                <li className="text-md hover:text-gray-400 transition duration-300">
                  <Link to={"/projects"}>Projects</Link>
                </li>
                <li className="text-md hover:text-gray-400 transition duration-300">
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Privacy</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-400 transition duration-300"
                  >
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-400 transition duration-300"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-400 transition duration-300"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact section */}
            <div>
              <h3 className="text-lg font-bold mb-2">Contact Me</h3>
              <p className="text-sm">+923099950697</p>
              <p className="text-sm cursor-pointer hover:underline">
                mudassar.asghar2003@gmail.com
              </p>
            </div>

            {/* Social Icons section */}
            <div className="w-[280px] flex justify-between items-center mt-6">
              <div
                className="p-3 hover:bg-[rgb(26,209,163)] hover:text-gray-900 transition duration-300 ease-in-out 
              shadow-md rounded-full cursor-pointer"
                style={{
                  boxShadow: "0px 0px 10px 3px rgba(26, 209, 163, 0.75)",
                }}
              >
                <a target="_blank" href="https://www.facebook.com/">
                  <FaFacebookF size={20} />
                </a>
              </div>
              <div
                className="p-3 hover:bg-[rgb(26,209,163)] hover:text-gray-900 transition duration-300 ease-in-out 
              shadow-md rounded-full cursor-pointer"
                style={{
                  boxShadow: "0px 0px 10px 3px rgba(26, 209, 163, 0.75)",
                }}
              >
                <a target="_blank" href="https://www.instagram.com/">
                  <FaInstagram size={20} />
                </a>
              </div>
              <div
                className="p-3 hover:bg-[rgb(26,209,163)] hover:text-gray-900 transition duration-300 ease-in-out 
              shadow-md rounded-full cursor-pointer"
                style={{
                  boxShadow: "0px 0px 10px 3px rgba(26, 209, 163, 0.75)",
                }}
              >
                <a target="_blank" href="https://twitter.com/?lang=en">
                  <FaTwitter size={20} />
                </a>
              </div>
              <div
                className="p-3 hover:bg-[rgb(26,209,163)] hover:text-gray-900 transition duration-300 ease-in-out 
              shadow-md rounded-full cursor-pointer"
                style={{
                  boxShadow: "0px 0px 10px 3px rgba(26, 209, 163, 0.75)",
                }}
              >
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/mudassar-ali-057624226/"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
