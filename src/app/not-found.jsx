'use client';
import Image from "next/image";
import websiteContentData from "./info";
import Link from "next/link";

import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

export default function NotFound() {
  
    const parentVariants = {
        hidden: {  opacity: 0, y: -50 ,scale:0.98  },
        visible: { opacity: 1,
                   y: 0,
                   scale:1,
                   transition: {
                   duration: 0.9,
                   ease: "easeIn", 
                   staggerChildren: 0.2, // Stagger children animations
                  }, },
        exit: { opacity: 0 }
      }
    
      const childVariants = {
        hidden: {  opacity: 0, y: 50 ,scale:0.98  },
        visible: { opacity: 1,
                   y: 0,
                   scale:1,
                   transition:{
                   duration: 0.5
                   } },
      }
 
  return (
    
    <motion.div 
      variants={parentVariants}
      initial="hidden"
      animate="visible"
   
      className=" bg-slate-100 pt-24 pb-10 "
    >
        <div className=" flex flex-col space-y-7 w-full mx-auto">
            <Image
                  src="/pi/404/404.svg"
                  height={360}
                  width={360}
                  alt="404"
                  className=" mx-auto   object-contain"
              />

            <div className="flex-col space-y-5 justify-center items-center font-custom">
                   <p className="text-black font-semibold text-2xl text-center">
                       Oops!
                   </p>

                   <p className="text-gray-700 font-light w-10/12 md:w-6/12 text-base leading-loose mx-auto text-center">
                       We cant seem to find the page you are looking for or it is currently down and undergoing maintainance, please check back later....signed:Talenin Management 
                   </p>
                  
                   <Link href="/" 
                     
                     >
                        <div className="text-white my-5 rounded-3xl font-medium mx-auto font-custom bg-brand-blue-500 h-fit w-fit py-2 px-6 shadow-lg hover:bg-blue-600">
                            Back to home page
                        </div>

                   </Link>

                   
            </div>

            {/* Social Media Links */}
            <div className="flex-col md:w-4/12 w-6/12 mx-auto space-y-4  ">
                <p className="text-sm text-center font-custom"> Follow us on all Social Media </p>
                
                <div className="flex  justify-between">
                    {websiteContentData.hamSocials.map((item) => (
                    <div key={item.key} className=" h-fit w-fit p-4 hover:bg-brand-blue-200 bg-brand-blue-100 opacity-95 rounded-2xl" >
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
            
    </motion.div>
  );
}
