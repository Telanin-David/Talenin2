"use client";

import Join from "../components/join";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Terms() {
 

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

  const child1Variants = {
    hidden: {  opacity: 0, y: 50 ,scale:0.98  },
    visible: { opacity: 1,
               y: 0,
               scale:1,
               transition:{
               duration: 0.5
               } },
  }

  const child2Variants = {
    hidden: {  opacity: 0, x: -100 ,scale:0.98  },
    visible: { opacity: 1,
               x: 0,
               scale:1,
               transition:{
               duration: 0.7
               } },
    
  }

  // useInView hook detects when the element is in view
  const { ref: section1Ref, inView: section1InView } = useInView({ threshold: 0.1 });
  const { ref: section2Ref, inView: section2InView } = useInView({ threshold: 0.1 });
  const { ref: section3Ref, inView: section3InView } = useInView({ threshold: 0.1 });
  
  const { ref: sectionA1Ref, inView: sectionA1InView } = useInView({ threshold: 0.1 });
  const { ref: sectionA2Ref, inView: sectionA2InView } = useInView({ threshold: 0.3 });
  const { ref: sectionA3Ref, inView: sectionA3InView } = useInView({ threshold: 0.3 });
  const { ref: sectionA4Ref, inView: sectionA4InView } = useInView({ threshold: 0.3 });
  
  return (
    <motion.div 
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className=" bg-slate-100 py-24 "
    >
        <motion.div
         ref={section1Ref}
         variants={child1Variants}
         animate={section1InView ? "visible" : "hidden"} 
         className=" flex-col w-10/12 mx-auto my-12 "
         >
          
            <p className="font-extrabold text-2xl sm:text-4xl text-center">
                Terms & Conditions
            </p>

            <p className="font-normal text-lg text-gray-700 text-center">
                Enim egestas at massa senectus justo ut. Hac est.
            </p>

        </motion.div>

        <motion.div
         ref={section2Ref}
         variants={child1Variants}
         animate={section2InView ? "visible" : "hidden"} 
         className=" flex-col w-10/12 mx-auto my-12 space-y-3 "
         >
          
          
          <motion.div
           ref={sectionA1Ref}
           variants={child2Variants}
           animate={sectionA1InView ? "visible" : "hidden"}
          
          >
              <p className="font-extrabold text-2xl sm:text-4xl text-left">
                Terms and Conditions
              </p>

              <p className="font-normal w-11/12 text-sm text-gray-700 text-left leading-relaxed">
                  Orci, et ipsum gravida eget risus. Nunc velit quam pellentesque viverra. 
                  Feugiat mi purus ornare vitae aliquet cras tellus velit sociis. Ut augue tellus sed at. Duis 
                  morbi lorem nibh amet, mus urna, purus velit. Mi condimentum laoreet sed iaculis nunc vestibulum 
                  nunc diam tortor. Pulvinar orci, non lectus nec duis. Adipiscing vitae augue sed sapien purus.
                    Porttitor at eu mi, non enim nunc diam. Vel nisl cursus nam risus morbi ac venenatis faucibus ac.
                  Enim ullamcorper nullam in aliquam, curabitur dapibus risus interdum cursus. Arcu et quis egestas scelerisque tempor,
                  mauris. Dictum amet odio pellentesque dis euismod diam arcu, pellentesque. Leo sem pellentesque pretium volutpat quam
                  consequat. Eu nec consectetur mus consectetur eget. Vitae eu ultrices adipiscing commodo. Interdum vivamus enim ut
                  diam nisl.
              </p>
              
              <p className="font-normal w-10/12 text-sm text-gray-700 text-left leading-relaxed">
                  Orci, et ipsum gravida eget risus. Nunc velit quam pellentesque viverra. 
                  Feugiat mi purus ornare vitae aliquet cras tellus velit sociis. Ut augue tellus sed at. Duis 
                  morbi lorem nibh amet, mus urna, purus velit. Mi condimentum laoreet sed iaculis nunc vestibulum 
                  nunc diam tortor. Pulvinar orci, non lectus nec duis. Adipiscing vitae augue sed sapien purus.
                    Porttitor at eu mi, non enim nunc diam. Vel nisl cursus nam risus morbi ac venenatis faucibus ac.
                  Enim ullamcorper nullam in aliquam, curabitur dapibus risus interdum cursus. Arcu et quis egestas scelerisque tempor,
                  mauris. Dictum amet odio pellentesque dis euismod diam arcu, pellentesque. Leo sem pellentesque pretium volutpat quam
                  consequat. Eu nec consectetur mus consectetur eget. Vitae eu ultrices adipiscing commodo. Interdum vivamus enim ut
                  diam nisl.
              </p>

              <p className="font-normal w-10/12 text-sm text-gray-700 text-left leading-relaxed">
                  Orci, et ipsum gravida eget risus. Nunc velit quam pellentesque viverra. 
                  Feugiat mi purus ornare vitae aliquet cras tellus velit sociis. Ut augue tellus sed at. Duis 
                  morbi lorem nibh amet, mus urna, purus velit. Mi condimentum laoreet sed iaculis nunc vestibulum 
                  nunc diam tortor. Pulvinar orci, non lectus nec duis. Adipiscing vitae augue sed sapien purus.
                    Porttitor at eu mi, non enim nunc diam. Vel nisl cursus nam risus morbi ac venenatis faucibus ac.
                  Enim ullamcorper nullam in aliquam, curabitur dapibus risus interdum cursus. Arcu et quis egestas scelerisque tempor,
                  mauris. Dictum amet odio pellentesque dis euismod diam arcu, pellentesque. Leo sem pellentesque pretium volutpat quam
                  consequat. Eu nec consectetur mus consectetur eget. Vitae eu ultrices adipiscing commodo. Interdum vivamus enim ut
                  diam nisl.
              </p>

          </motion.div>

          <motion.div
           ref={sectionA2Ref}
           variants={child2Variants}
           animate={sectionA2InView ? "visible" : "hidden"}
           
          >
            <p className="font-extrabold text-2xl sm:text-4xl text-left">
              Est sem adipiscing commodo cursus.
            </p>
            
            <p className="font-normal w-11/12 text-sm text-gray-700 text-left leading-relaxed">
                Orci, et ipsum gravida eget risus. Nunc velit quam pellentesque viverra. 
                Feugiat mi purus ornare vitae aliquet cras tellus velit sociis. Ut augue tellus sed at. Duis 
                morbi lorem nibh amet, mus urna, purus velit. Mi condimentum laoreet sed iaculis nunc vestibulum 
                nunc diam tortor. Pulvinar orci, non lectus nec duis. Adipiscing vitae augue sed sapien purus.
                  Porttitor at eu mi, non enim nunc diam. Vel nisl cursus nam risus morbi ac venenatis faucibus ac.
                Enim ullamcorper nullam in aliquam, curabitur dapibus risus interdum cursus. Arcu et quis egestas scelerisque tempor,
                mauris. Dictum amet odio pellentesque dis euismod diam arcu, pellentesque. Leo sem pellentesque pretium volutpat quam
                consequat. Eu nec consectetur mus consectetur eget. Vitae eu ultrices adipiscing commodo. Interdum vivamus enim ut
                diam nisl.
            </p>
          </motion.div>

          <motion.div
           ref={sectionA3Ref}
           variants={child2Variants}
           animate={sectionA3InView ? "visible" : "hidden"}
          
          >
              <p className="font-extrabold text-2xl sm:text-4xl text-left">
                Tincidunt.
              </p>
              
              <p className="font-normal w-11/12 text-sm text-gray-700 text-left leading-relaxed">
                  Orci, et ipsum gravida eget risus. Nunc velit quam pellentesque viverra. 
                  Feugiat mi purus ornare vitae aliquet cras tellus velit sociis. Ut augue tellus sed at. Duis 
                  morbi lorem nibh amet, mus urna, purus velit. Mi condimentum laoreet sed iaculis nunc vestibulum 
                  nunc diam tortor. Pulvinar orci, non lectus nec duis. Adipiscing vitae augue sed sapien purus.
                    Porttitor at eu mi, non enim nunc diam. Vel nisl cursus nam risus morbi ac venenatis faucibus ac.
                  Enim ullamcorper nullam in aliquam, curabitur dapibus risus interdum cursus. Arcu et quis egestas scelerisque tempor,
                  mauris. Dictum amet odio pellentesque dis euismod diam arcu, pellentesque. Leo sem pellentesque pretium volutpat quam
                  consequat. Eu nec consectetur mus consectetur eget. Vitae eu ultrices adipiscing commodo. Interdum vivamus enim ut
                  diam nisl.
              </p>
          </motion.div>

          <motion.div
           ref={sectionA4Ref}
           variants={child2Variants}
           animate={sectionA4InView ? "visible" : "hidden"}
           
          >
              <p className="font-extrabold text-2xl sm:text-4xl text-left">
                Odio.
              </p>

              <p className="font-normal w-11/12 text-sm text-gray-700 text-left leading-relaxed">
                  Orci, et ipsum gravida eget risus. Nunc velit quam pellentesque viverra. 
                  Feugiat mi purus ornare vitae aliquet cras tellus velit sociis. Ut augue tellus sed at. Duis 
                  morbi lorem nibh amet, mus urna, purus velit. Mi condimentum laoreet sed iaculis nunc vestibulum 
                  nunc diam tortor. Pulvinar orci, non lectus nec duis. Adipiscing vitae augue sed sapien purus.
                    Porttitor at eu mi, non enim nunc diam. Vel nisl cursus nam risus morbi ac venenatis faucibus ac.
                  Enim ullamcorper nullam in aliquam, curabitur dapibus risus interdum cursus. Arcu et quis egestas scelerisque tempor,
                  mauris. Dictum amet odio pellentesque dis euismod diam arcu, pellentesque. Leo sem pellentesque pretium volutpat quam
                  consequat. Eu nec consectetur mus consectetur eget. Vitae eu ultrices adipiscing commodo. Interdum vivamus enim ut
                  diam nisl.
              </p>
          </motion.div>
          
        </motion.div>
        
        <motion.div
         ref={section3Ref}
         variants={child1Variants}
         animate={section3InView ? "visible" : "hidden"}
         >
         <Join />
        </motion.div>
        


    </motion.div>
  );
}