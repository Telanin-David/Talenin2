"use client";

import Works from "../components/work";
import Contact1 from "../components/contact";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import axios from "axios"; // Import Axios

export default function Contact() {

  const [formData, setFormData] = useState({ firstName: "",lastName: "", email: "", phone: "", service:"", message: "" });
  const [status, setStatus] = useState(""); // For feedback messages
  const [loading, setLoading] = useState(false); // For showing a loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Indicate the request is in progress
    setStatus(""); // Clear any previous status messages

    try {
      // Use Axios for the POST request
      const response = await axios.post("http://localhost:5000/send-email", formData);

      if (response.status === 200) { // Check for success (status 200)
        setStatus("Email sent successfully!"); // Success message
        setFormData({ firstName: "",lastName: "", email: "", phone: "", service:"", message: "" }); // Clear the form
        setTimeout(() => {
            setStatus("");
          }, 5000);
      } else {
        setStatus("Error sending email."); // Display generic error message
        setTimeout(() => {
          setStatus("");
        }, 5000);
      }
    } catch (error) {
      // Handle errors
      if (error.response && error.response.data) {
        setStatus(error.response.data.message || "Error sending email."); // Specific error from server
      } else {
        setStatus(error.message);
        setTimeout(() => {
          setStatus("");
        }, 5000);
        console.log(error.message)
      }
    } finally {
      setLoading(false); // End loading state
      
    }
  };

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
          className="bg-slate-100 py-24"
          >
          {/* Status message */}
          {status && (
            <p className="fixed top-0 left-0 right-0 text-center bg-green-500 text-white py-2 z-50">
              {status}
            </p>
          )}
          <motion.div 
           ref={section1Ref}
           variants={childVariants}
           animate={section1InView ? "visible" : "hidden"}
           className="flex-col w-10/12 mx-auto my-12"
           >
            <p className="font-extrabold text-2xl sm:text-4xl text-center">
              Contact Us
            </p>
            <p className="font-normal text-lg text-gray-700 text-center">
              Enim egestas at massa senectus justo ut. Hac est.
            </p>
          </motion.div>
      
          <motion.div
           ref={section2Ref}
           variants={childVariants}
           animate={section2InView ? "visible" : "hidden"}
           className="flex flex-col lg:flex-row justify-between w-10/12 mx-auto my-12 h-auto lg:h-[84vh] rounded-3xl bg-white shadow-lg p-12 space-y-6 lg:space-y-0"
           >
            {/* Left Section */}
            <div className="flex flex-col bg-contain text-white bg-brand-blue-500 rounded-3xl w-full lg:w-4/12 overflow-hidden p-6">
              <div className="ml-0 lg:ml-12 mt-12">
                <p className="font-bold text-lg">Contact information</p>
                <p className="text-sm mt-6 mb-10 leading-relaxed">
                  Fill up the form and our Team will get <br /> back to you within 24 hours.
                </p>
                <Contact1 />
              </div>
    
            </div>
      
            {/* Right Section (Form) */}
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col relative w-full lg:w-7/12 space-y-6"
              >
              <div className="flex flex-col lg:flex-row gap-10 justify-between">
                <div className="flex flex-col gap-1 w-full lg:w-5/12">
                  <label htmlFor="firstName" className="text-xs font-medium text-gray-500">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="p-2 text-xs w-full border-b-2 border-gray-300 focus:outline-none"
                  />
                </div>
      
                <div className="flex flex-col gap-1 w-full lg:w-5/12">
                  <label htmlFor="lastName" className="text-xs font-medium text-gray-500">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="p-2 w-full text-xs border-b-2 border-gray-300 focus:outline-none"
                  />
                </div>
              </div>
      
              <div className="flex flex-col lg:flex-row gap-10 justify-between">
                <div className="flex flex-col gap-1 w-full lg:w-5/12">
                  <label htmlFor="email" className="text-xs font-medium text-gray-500">Mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-2 w-full text-xs border-b-2 border-gray-300 focus:outline-none"
                  />
                </div>
      
                <div className="flex flex-col gap-1 w-full lg:w-5/12">
                  <label htmlFor="phone" className="text-xs font-medium text-gray-500">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="p-2 w-full text-xs border-b-2 border-gray-300 focus:outline-none"
                  />
                </div>
              </div>
      
              <div className="flex flex-col gap-4">
                <p className="w-full text-sm font-semibold text-gray-600">
                  What service do you need?
                </p>
      
                <div className="flex flex-wrap justify-start gap-4">
                  <div className="flex items-center w-full lg:w-3/12 space-x-4">
                    <input 
                      type="radio" 
                      name="service" 
                      value="Web Development"
                      onChange={handleChange}
                      required 
                    />
                    <p className="text-xs">Web Development</p>
                  </div>
      
                  <div className="flex items-center w-full lg:w-3/12 space-x-4">
                    <input 
                      type="radio" 
                      name="service" 
                      value="Mobile Development" 
                      onChange={handleChange}
                    />
                    <p className="text-xs">Mobile Development</p>
                  </div>
      
                  <div className="flex items-center w-full lg:w-3/12 space-x-4">
                    <input 
                      type="radio" 
                      name="service" 
                      value="Brand and UI/UX Design"
                      onChange={handleChange} 
                    />
                    <p className="text-xs">Brand and UI/UX Design</p>
                  </div>
      
                  <div className="flex items-center w-full lg:w-3/12 space-x-4">
                    <input 
                      type="radio" 
                      name="service" 
                      value="Digital Marketing" 
                      onChange={handleChange}
                    />
                    <p className="text-xs">Digital Marketing</p>
                  </div>
      
                  <div className="flex items-center w-full lg:w-3/12 space-x-4">
                    <input 
                      type="radio" 
                      name="service" 
                      value="Automation and Bots" 
                      onChange={handleChange}
                    />
                    <p className="text-xs">Automation and Bots</p>
                  </div>
                </div>
              </div>
      
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <input
                  type="textarea"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Reach out to us"
                  className="p-2 w-full text-xs border-b-2 border-gray-300 focus:outline-none"
                />
              </div>
      
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full lg:w-4/12 py-2 px-2 text-white font-normal text-sm bg-brand-blue-600 rounded-3xl shadow-md hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2"
                >
                  {loading ? "Sending the message..." : "Send a message"}
                </button>
              </div>
            </form>
             
          </motion.div>
      
          <motion.div
           ref={section3Ref}
           variants={childVariants}
           animate={section3InView ? "visible" : "hidden"}
           className="pt-20 pb-10 w-10/12 bg-slate-100 flex-col mx-auto space-y-12"
           >
            <p className="font-extrabold text-2xl sm:text-4xl mx-auto text-black text-center">
              See Our Work
            </p>
            <p className="text-lg mx-auto text-gray-600 text-justify sm:text-center w-full sm:w-10/12">
              Interdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum diam quam. 
              Scelerisque mus vel egestas justo, purus consequat nibh eget. Non risus feugiat porta integer.
            </p>
      
            <Works />
      
            <div className="rounded-3xl w-fit h-fit py-3 px-8 bg-brand-blue-500 mx-auto flex justify-center">
              <p className="text-white text-base">
                See All Projects
              </p>
            </div>
          </motion.div>
        </motion.div>
      );
      
}