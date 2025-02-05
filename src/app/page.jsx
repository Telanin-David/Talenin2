'use client';
import Image from "next/image";
import Service1 from "./components/services1";
import Process from "./components/process";
import Works from "./components/work";
import Link from "next/link";

import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

export default function Home() {
  
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

// useInView hook detects when the element is in view
const { ref: section1Ref, inView: section1InView } = useInView({ threshold: 0.1 });
const { ref: section2Ref, inView: section2InView } = useInView({ threshold: 0.1 });
const { ref: section3Ref, inView: section3InView } = useInView({ threshold: 0.1 });
const { ref: section4Ref, inView: section4InView } = useInView({ threshold: 0.1 });
const { ref: section5Ref, inView: section5InView } = useInView({ threshold: 0.1 });
const { ref: section6Ref, inView: section6InView } = useInView({ threshold: 0.1 });
const { ref: section7Ref, inView: section7InView } = useInView({ threshold: 0.1 });


  return (
    
    <motion.div 
      variants={parentVariants}
      initial="hidden"
      animate="visible"
   
      className=" bg-slate-100 pt-24 "
    >
       <motion.section
          ref={section1Ref}
          variants={childVariants}
          animate={section1InView ? "visible" : "hidden"}
          className="bg-slate-100 lg:flex lg:flex-nowrap sm:flex xs:flex sm:flex-wrap xs:flex-wrap w-11/12 mx-auto justify-between sm:gap-12 xs:gap-12 py-6" 
         >
         
         <sub className="flex-col  lg:w-7/12 sm:w-10/12 xs:w-11/12 lg:mx-0 sm:mx-auto xs:mx-auto lg:py-4  lg:space-y-8 sm:space-y-6 xs:space-y-6  ">
           
           <div className="lg:visible sm:invisible xs:invisible rounded-2xl bg-slate-300 space-x-3 flex justify-center items-center w-6/12 lg:p-3 ">
               
              <div className="h-4 w-4 bg-yellow-400 rounded-xl " />
                   
               
               <p className=" font-semibold  ">
                   #1 software solutions architects in Nigeria 
               </p>

           </div>

           <p className=" lg:w-6/12 lg:mx-0 sm:mx-auto xs:mx-auto sm:w-10/12 xs:w-10/12  font-extrabold text-2xl sm:text-3xl  my-0 lg:text-left sm:text-center xs:text-center leading-relaxed">
             Empowering Your Business With Innovative Software  Solutions 
           </p>

           <p className=" w-10/12 lg:mx-0 sm:mx-auto xs:mx-auto text-gray-700 lg:text-2xl lg:text-left sm:text-center xs:text-center sm:text-lg xs:text-lg">
             Customized technology solutions designed to drive efficiency, innovation, and long-term success. 
           </p> 

           <div className="flex lg:justify-between sm:justify-between xs:justify-between items-center pt-5  lg:w-8/12 sm:w-9/12 xs:w-9/12 lg:mx-0 sm:mx-auto xs:mx-auto">
              
              <Link href="/contact">
                <motion.button 
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
                   boxShadow:  'none', // Glow when active, no glow when inactive
                 }}
                 transition={{ duration: 0.3 }}
                 className="lg:py-3 sm:py-2 xs:py-2 lg:px-8 sm:px-6 xs:px-6 bg-brand-blue-500 rounded-2xl flex justify-center items-center "
                 >
                  <p className=" font-medium lg:text-base sm:text-sm xs:text-xs text-white">
                    Connect with us 
                  </p>
                </motion.button>
              </Link>

              <p className="text-brand-blue-500 lg:text-lg sm:text-sm xs:text-xs font-bold ">
                  Browse our Work 
              </p>
           </div>

         </sub>
         
         <sub className="lg:w-5/12  sm:w-8/12 xs:w-8/12 lg:mx-0 sm:mx-auto xs:mx-auto flex justify-center lg:py-4 sm:py-2 xs:py-2 ">
            <Image
                  src="/pi/webPics/empowering.svg"
                  height={400}
                  width={400}
                  alt="Empower"
                  
              />
         </sub>
       </motion.section>

       <motion.section
        ref={section2Ref}
        variants={childVariants}
        animate={section2InView ? "visible" : "hidden"}
       
        className="pt-10 bg-slate-100 mx-auto " 
        >
           
           <div className="flex-col justify-center w-10/12 mx-auto space-y-7">
              
              <p className="w-10/12 mx-auto font-extrabold text-2xl sm:text-3xl text-center ">
                 Services That lead The Way To Better Business
              </p>

              <p className=" w-11/12 mx-auto pt-2 text-center text-gray-600  ">
                  Innovative services designed to streamline operations, boost productivity, and drive business success.
                  Empowering you to stay ahead in a competitive market.
              </p>

              <div className=" md:w-10/12 w-full mx-auto ">
                  <Service1 />
              </div>
           </div>

       </motion.section>

       <motion.section
          ref={section3Ref}
          variants={childVariants}
          animate={section3InView ? "visible" : "hidden"}
          
          className="pt-10 bg-slate-100 lg:flex lg:flex-nowrap sm:flex-wrap xs:flex-wrap  mx-auto w-10/12 h-auto lg:space-x-8 sm:space-x-0 xs:space-x-0  justify-around"
         >

            <div className=" lg:w-5/12 sm:w-10/12 rounded-xl py-4 sm:mx-auto xs:mx-auto">
              <Image
                  src="/pi/webPics/process.svg"
                  height={540}
                  width={540}
                  alt="Profile picture"
                  className=" mx-auto   object-contain"
              />
              
            </div>
            
          
            
            <div className=" lg:w-5/12 sm:w-full xs:w-full flex-col lg:space-y-2 sm:space-y-0 xs:space-y-0 lg:mx-0 sm:mx-auto xs:mx-auto">
              <p className="lg:text-left sm:text-center xs:text-center font-extrabold text-2xl sm:text-3xl my-3">
                  Our Process
              </p>

              <p className=" md:text-left xs:text-center text-gray-700 md:w-11/12 w-full md:mr-auto md:mx-0 xs:mx-auto text-base">
                  Sit arcu, egestas nunc, eros dignissim nunc, pretium malesuada. Tristique est tellus non maecenas in egestas aliquam.
                  Eget dolor pellentesque consequat donec lectus nisl ligula. Ut sed nisi amet.
              </p>

               <Process />
            </div>

          
       </motion.section>

       <motion.section
          ref={section4Ref}
          variants={childVariants}
          animate={section4InView ? "visible" : "hidden"}
        className="lg:pt-20 sm:pt-10 xs:pt-10 pb-10 w-10/12 bg-slate-100 flex-col mx-auto lg:space-y-12 sm:space-y-8 xs:space-y-8 "
       >
         
          <p className=" font-extrabold text-2xl sm:text-3xl mx-auto text-center">
              See Our Work
          </p>

          <p className=" text-lg mx-auto text-gray-600 text-center lg:w-9/12 sm:w-11/12  xs:w-11/12  ">
              Interdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum diam quam. 
              Scelerisque mus vel egestas justo, purus consequat nibh eget. Non risus feugiat porta integer.
          </p>

          <Works />

          <div className="rounded-3xl w-fit h-fit lg:py-3 sm:py-2 xs:py-2  lg:px-8 sm:px-6 xs:px-6 bg-brand-blue-500 mx-auto flex justify-center">
              
                <p className="font-medium lg:text-base sm:text-sm xs:text-sm text-white ">
                    See All Projects
                </p>
          </div>
         
       </motion.section>

       <motion.section 
        ref={section5Ref}
        variants={childVariants}
        animate={section5InView ? "visible" : "hidden"}
       
       className="py-12  bg-gray-200  "
       > 
          
          <div className=" lg:space-y-0 sm:space-y-4 xs:space-y-4 lg:flex lg:flex-row sm:flex-col xs:flex-col w-10/12 mx-auto justify-between  h-fit ">

              <p className=" font-extrabold text-2xl sm:text-3xl lg:w-5/12 sm:w-full xs:w-full lg:text-left sm:text-center xs:text-center  ">
                  We’re a lean creative agency that uses design and code to solve problems.
              </p>

              <div className=" hidden lg:block h-full border-2 border-gray-300">

              </div>

              <p className=" lg:font-bold sm:font-medium xs:font-medium lg:text-base sm:text-sm xs:text-sm text-gray-500 lg:w-5/12 sm:w-full xs:w-full text-justify leading-loose ">
                Semper bibendum nisl, fermentum mi convallis. Sed vitae tincidunt nunc, aliquam orci. Porttitor faucibus morbi sed senectus justo, adipiscing augue. Est, in in pretium at libero morbi. Euismod viverra arcu nisi eu sit.
                Praesent diam non imperdiet imperdiet potenti tristique et. Amet nec.

              </p>


          </div>
            
       </motion.section>

       <motion.section
          ref={section6Ref}
          variants={childVariants}
          animate={section6InView ? "visible" : "hidden"}
         className=" lg:py-12 sm:py-8 xs:py-8 lg:space-y-24 sm:space-y-12 xs:space-y-12"
         >
         
          <div className="w-10/12 mx-auto ">
        
            <div className=" flex flex-wrap gap-8 justify-between ">
                
                <div className=" lg:w-5/12 sm:w-10/12 xs:w-10/12 sm:mx-auto xs:mx-auto rounded-lg">
                    
                          <Image
                              src="/pi/webPics/team.svg"
                              alt="astonishing team"
                              height={500}
                              width={500}
                              className="mx-auto"
                          />
                </div>

                <div className="lg:w-6/12 sm:w-10/12 xs:w-10/12 sm:mx-auto xs:mx-auto flex-col space-y-10 ">

                  <p className="font-extrabold text-2xl sm:text-3xl lg:w-7/12 sm:w-10/12 xs:w-10/12 lg:text-3xl  lg:text-left sm:text-center xs:text-center lg:mx-0 sm:mx-auto xs:mx-auto leading-relaxed">

                    Designed and built by an astonishing creative team.

                  </p>

                  <p className=" font-normal text-gray-500 lg:w-10/12 sm:w-full xs:w-full text-base lg:mx-0 sm:mx-auto xs:mx-auto lg:text-left sm:text-justify xs:text-justify leading-relaxed ">
                        Et eleifend consectetur tellus consectetur nibh non urna lobortis. 
                        Quis sapien enim posuere mollis risus. Nec dictumst ullamcorper et leo. Varius praesent tinc.
                  </p>

                 l<Link href="/about">
                    <motion.button   
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
                         boxShadow:  'none', // Glow when active, no glow when inactive
                       }}
                       transition={{ duration: 0.3 }}
                       className="bg-brand-blue-500 flex justify-center rounded-3xl h-fit lg:py-3 sm:py-2 xs:py-2 lg:px-8 sm:px-6 xs:px-6 w-4/12 lg:mx-0 sm:mx-auto xs:mx-auto "
                       >
                        
                          <p className=" font-medium md:text-base xs:text-xs text-white  text-center items-center ">
                              About Us
                          </p>
                    </motion.button>
                  </Link>
                </div>

            </div>

          </div>   
          
          <hr className="border-gray-200 border-2 " />
       </motion.section>

       <motion.section 
        ref={section7Ref}
        variants={childVariants}
        animate={section7InView ? "visible" : "hidden"}
        className=" lg:py-12 sm:py-8 xs:py-8"
       >
        
         <div className=" flex flex-wrap w-10/12 mx-auto justify-between lg:space-y-0 sm:space-y-8 xs:space-y-8">
           
            <div className="lg:w-6/12 sm:w-full xs:w-full flex-col lg:space-y-14 sm:space-y-10 xs:space-y-10 mt-2 ">

                <p className="font-extrabold text-2xl sm:text-3xl lg:w-9/12 sm:w-11/12 xs:w-11/12  lg:mx-0 sm:mx-auto xs:mx-auto lg:text-left sm:text-center xs:text-center leading-relaxed">

                  Designed and built by an astonishing creative team.

                </p>

                <p className="lg:mx-0 sm:mx-auto xs:mx-auto font-normal text-gray-500 lg:w-full sm:w-full xs:w-full lg:text-left sm:text-justify xs:text-justify  text-base leading-relaxed ">
                      Et eleifend consectetur tellus consectetur nibh non urna lobortis. 
                      Quis sapien enim posuere mollis risus. Nec dictumst ullamcorper et leo.
                       Varius praesent tinc.
                       Et eleifend consectetur tellus consectetur nibh non urna lobortis. 
                      Quis sapien enim posuere mollis risus. Nec dictumst ullamcorper et leo.
                       Varius praesent tinc.
                       Et eleifend consectetur tellus consectetur nibh non urna lobortis. 
                      Quis sapien enim posuere mollis risus. Nec dictumst ullamcorper et leo.
                       Varius praesent tinc.
                </p>

                <div className="flex justify-center md:justify-start items-center lg:pt-7 sm:pt-0 xs:pt-0  lg:w-8/12 sm:w-full xs:w-full lg:mx-0 sm:mx-auto xs:mx-auto ">
                 
                 <Link href="/contact">
                  <motion.button
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
                      boxShadow:  'none', // Glow when active, no glow when inactive
                    }}
                    transition={{ duration: 0.3 }} 
                    className="lg:py-3 sm:py-2 xs:py-2 lg:px-8 sm:px-6 xs:px-6 bg-brand-blue-500 rounded-2xl flex justify-center items-center "
                    >
                    <p className=" font-medium lg:text-base sm:text-sm xs:text-sm text-white">
                      Connect with us 
                    </p>
                  </motion.button>
                 </Link>

               </div>

            </div>

             <div className=" lg:w-5/12 sm:w-full xs:w-full  rounded-3xl px-7 py-12 bg-brand-blue-200">
                    
                    <Image
                        src="/pi/webPics/journey.svg"
                        alt="astonishing team"
                        height={330}
                        width={270}
                        className="mx-auto"
                    />
             </div>
             
           


         </div>
        
       </motion.section>
    </motion.div>
  );
}
