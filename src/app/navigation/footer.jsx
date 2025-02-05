"use client";

import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/socials';

export default function Footer() {

    return (
         
        <div className="flex flex-col items-center p-10 lg:p-16 bg-brand-black text-white space-y-12">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 mx-auto justify-center">
          <Image
            src="/pi/nav-assets/logo-yellow.svg"
            height={36}
            width={36}
            alt="Logo"
          />
          <p className="text-xl font-bold font-custom">Talenin</p>
        </div>
      
        {/* Navigation Section */}
        <nav className="flex flex-wrap justify-center gap-4 lg:space-x-16 sm:space-x-8 text-center">
          <Link href="#" className="hover:underline">
            Work
          </Link>
          <Link href="/service" className="hover:underline">
            Services
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link href="/tt" className="hover:underline">
            Careers
          </Link>
        </nav>
      
        {/* Socials Section */}
        <div className="w-full flex justify-center">
          <Socials />
        </div>
      
        {/* Footer Section */}
        <div className="flex flex-wrap justify-between items-center space-y-4 lg:space-y-0 w-full lg:w-5/12 text-center lg:text-left">
          <p>&copy; 2025 Talenin</p>
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
      
                    
    );
}