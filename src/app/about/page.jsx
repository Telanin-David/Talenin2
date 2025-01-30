"use client";

import Join from "../components/join";
import Team from "../components/team";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {

  const parentVariants = {
    hidden: {  opacity: 0, x: -50 ,scale:0.98  },
    visible: { opacity: 1,
               x: 0,
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

  // useInView hook detects when the element is in view
  const { ref: section1Ref, inView: section1InView } = useInView({ threshold: 0.1 });
  const { ref: section2Ref, inView: section2InView } = useInView({ threshold: 0.1 });
  const { ref: section3Ref, inView: section3InView } = useInView({ threshold: 0.1 });
  const { ref: section4Ref, inView: section4InView } = useInView({ threshold: 0.1 });
 

  return (
    <motion.div 
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="bg-slate-100 py-24"
     >
      <motion.div 
        ref={section1Ref}
        variants={childVariants}
        animate={section1InView ? "visible" : "hidden"}
        className="flex flex-col w-11/12 sm:w-10/12 mx-auto my-12"
        >
        <p className="font-extrabold text-2xl sm:text-4xl  text-center">
          About Us
        </p>
        <p className="font-normal text-base sm:text-lg text-gray-700 text-center">
          Enim egestas at massa senectus justo ut. Hac est.
        </p>
      </motion.div>
    
      <motion.div
        ref={section2Ref}
        variants={childVariants}
        animate={section2InView ? "visible" : "hidden"}
        className="py-12 bg-gray-200 flex flex-col space-y-6 lg:space-y-0 lg:space-x-4 lg:flex-row"
        >
        <div className="flex flex-col lg:flex-row w-11/12 sm:w-10/12 mx-auto justify-between py-8 lg:space-y-0 sm:space-y-4 xs:space-y-4">
          <p className="font-bold text-center text-xl sm:text-2xl lg:text-3xl text-black lg:w-5/12 lg:text-left">
            You guessed it. We’re changing the game.
          </p>
    
          <div className="hidden lg:block h-full border-2 border-gray-300"></div>
    
          <p className="font-normal text-sm sm:text-base lg:text-lg text-gray-500 lg:w-5/12 text-justify leading-loose">
            Semper bibendum nisl, fermentum mi convallis. Sed vitae tincidunt nunc, aliquam orci. Porttitor faucibus morbi sed senectus justo, adipiscing augue. Est, in in pretium at libero morbi. Euismod viverra arcu nisi eu sit.
            Praesent diam non imperdiet imperdiet potenti tristique et. Amet nec.
          </p>
        </div>
      </motion.div>
    
      <motion.section
       ref={section3Ref}
       variants={childVariants}
       animate={section3InView ? "visible" : "hidden"} 
       className="pt-16 bg-slate-100 mx-auto"
       >
        <div className="flex flex-col justify-center w-11/12 sm:w-10/12 mx-auto space-y-7">
          <p className="font-extrabold text-2xl sm:text-4xl text-center">
            Our Leadership Team
          </p>
          <p className="text-sm sm:text-base text-gray-600 text-center md:w-8/12 mx-auto">
            Innovative services designed to streamline operations, boost productivity, and drive business success. Empowering you to stay ahead in a competitive market.
          </p>
          <div className="w-full mx-auto">
            <Team />
          </div>
        </div>
      </motion.section>
      
      <motion.section
       ref={section4Ref}
       variants={childVariants}
       animate={section4InView ? "visible" : "hidden"}
       >
        <Join />
      </motion.section>
      
    </motion.div>
  );
}