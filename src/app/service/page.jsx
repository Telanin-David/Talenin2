"use client";


import Service2 from "../components/services2";
import Join from "../components/join";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {

  const parentVariants = {
    hidden: {  opacity: 0, y: 50 ,scale:0.98  },
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

  // useInView hook detects when the element is in view
  const { ref: section1Ref, inView: section1InView } = useInView({ threshold: 0.1 });
  const { ref: section2Ref, inView: section2InView } = useInView({ threshold: 0.1 });
  const { ref: section3Ref, inView: section3InView } = useInView({ threshold: 0.1 });
  
 


  return (
    <motion.div 
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className=" bg-slate-100 py-24  "
    >
      
       <motion.div 
         ref={section1Ref}
         variants={childVariants}
         animate={section1InView ? "visible" : "hidden"}
         className=" flex-col w-10/12 mx-auto my-12 "
       >
          
          <p className="font-extrabold text-2xl sm:text-4xl  text-center">
              Services We Provide
          </p>

          <p className="font-normal text-lg text-gray-700 text-center">
            Enim egestas at massa senectus justo ut. Hac est.
          </p>

       </motion.div>

       <motion.div
         ref={section2Ref}
         variants={childVariants}
         animate={section2InView ? "visible" : "hidden"}
        >
        <Service2 />
       </motion.div>

       <motion.div
         ref={section3Ref}
         variants={childVariants}
         animate={section3InView ? "visible" : "hidden"}
        >
        <Join />
       </motion.div>
       
       

    </motion.div>
  );
}