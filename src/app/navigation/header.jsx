"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import websiteContentData from "../info";
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  function change() {
    setMenuOpen(!menuOpen);
    console.log(!menuOpen);
  }
  
 
  return (
    <div className="w-full fixed z-50 bg-white px-4 py-3">
      <div className="flex items-center  lg:justify-around">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 lg:mr-0 mr-auto ">
          <Image
            src="/pi/nav-assets/logo-blue.svg"
            height={36}
            width={36}
            alt="Logo"
          />
          <p className="text-xl font-bold font-custom">Talenin</p>
        </div>

        {/* Navigation Links */}
        <motion.nav
            className="hidden lg:flex max-h-full space-x-8 items-center text-base"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }} // Fade-in effect for the entire nav
            transition={{ duration: 0.5 }} // Smooth fade-in for the nav
          >
            {websiteContentData.hamNav.map((item, index) => (
              <div
                key={item.key}
                onClick={change}
                className="space-y-4"
              >
                <motion.div
                  initial={{ opacity: 1, x: -30 }} // Start off slightly to the left
                  animate={{
                    opacity: pathname === item.link ? 1 : 1,
                    scale: pathname === item.link ? 1.03 : 1, // Slight scale for active item
                    x: 0, // Move to the final position
                  }}
                  exit={{ opacity: 1, x: 30 }} // Slide out to the right when removed
                  transition={{
                    opacity: { duration: 0.7 }, // Smooth fade-in/fade-out
                    scale: { duration: 0.5 }, // Scale transition
                    x: { duration: 0.5 }, // Slide transition
                    delay: index * 0.1, // Staggered entrance for each item
                  }}
                  className={`pt-2 ${pathname === item.link ? 'border-t-2 pt-2 border-brand-blue-600 font-semibold glow-border' : ''}`}
                >
                  <Link href={item.link}>{item.title}</Link>
                </motion.div>
              </div>
            ))}
        </motion.nav>


        {/* Call-to-Action Button */}
        <Link href="/contact">
          <motion.div
            className= { pathname === "/contact" ? " border-brand-blue-600 border-2 shadow-xl hidden md:flex bg-brand-blue-500 text-white text-sm rounded-2xl py-2 px-4" :"hidden md:flex bg-brand-blue-500 text-white text-sm rounded-2xl py-2 px-4" }
            
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.05, // Scale up when hovered
              transition: { repeat: Infinity, repeatType: 'reverse', duration: 1 }, // Pulsing effect
            }}
            whileTap={{
              x: [-5, 5, -5, 5, -5], // Shaking left and right
              transition: { duration: 0.3, times: [0, 0.2, 0.4, 0.6, 1] }, // Shake timing
            }} // Shake left to right
            animate={{
              boxShadow: pathname === "/contact"? '0 0 10px 4px rgba(255, 255, 255, 0.5)' : 'none', // Glow when active, no glow when inactive
            }}
            transition={{ duration: 0.3 }}
          >
            <p>Connect with us</p>
          </motion.div>
        </Link>
        {/* Hamburger Menu for Smaller Screens */}
        <div className="flex justify-center items-center  w-fit h-fit lg:hidden lg:ml-0 ml-auto">
          <div onClick={change} className=" lg:hidden ">
              <Image
                src="/pi/nav-assets/hamburger.svg"
                alt="menu"
                width={50}
                height={50}
                className="h-6 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
              />
           
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div
            className={
              menuOpen
                ? "flex-col space-y-10  h-fit  mx-auto fixed top-0 left-0 w-full py-10   px-4 bg-white"
                : "hidden"
            }
          >
            <div className=" flex justify-between w-8/12 ml-auto mr-10">
              <div  className="flex items-center space-x-4 lg:mr-0 mr-auto mt-4 ">
                <Image
                  src="/pi/nav-assets/logo-blue.svg"
                  height={30}
                  width={30}
                  alt="Logo"
                />
                <p className="text-lg font-bold font-custom">Talenin</p>
              </div>

              <div onClick={change} className= {menuOpen ? "rounded-full w-fit h-fit p-3 bg-gray-300 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" : "hidden"} >
                <Image
                    src="/pi/nav-assets/closed.svg"
                    height={12}
                    width={12}
                    alt="closed"
                  />
              </div>
               
            </div>

            <div className=" w-10/12 mx-auto font-medium text-gray-500 text-lg  space-y-10 my-12 text-left">
              {websiteContentData.hamNav.map((item) => (
                <div
                  key={item.key}
                  onClick={change}
                  className="space-y-4 "
                >
                  <div className={
                    pathname === item.link
                      ? "border-r-2    border-brand-blue-600 w-full text-black font-semibold"
                      : ""
                    }>
                     <Link href={item.link}> {item.title}</Link>
                  </div>
                 
                </div>
              ))}

              <div onClick={change} className="flex py-2 px-6 h-fit w-fit mr-auto bg-brand-blue-500 text-white rounded-full text-sm space-x-2">
                 <Image
                    src="/pi/nav-assets/arrow.svg"
                    height={12}
                    width={14}
                    alt="closed"
                  />
                <Link href= "/contact" className="">Start a New Project</Link>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex-col w-9/12 mx-auto space-y-6  ">
              <p className="text-sm font-custom"> Follow us on all Social Media </p>
              
              <div className="flex  justify-between">
                {websiteContentData.hamSocials.map((item) => (
                  <div key={item.key} className=" h-fit w-fit p-4 hover:bg-brand-blue-200 bg-brand-blue-100 opacity-90 rounded-2xl" >
                    <Image
                      src={item.image}
                      height={16}
                      width={16}
                      alt={item.title}
                    />
                  </div>
                ))}
              </div>
              
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
