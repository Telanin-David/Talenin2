import Image from 'next/image';

export default function Join ()  {
    return (
     <div className="flex flex-col lg:flex-row bg-gray-200 mt-10 w-11/12 rounded-xl overflow-hidden mx-auto">
          {/* Left Section: Text Content */}
          <div className="flex flex-col px-6 py-8 lg:w-6/12 space-y-6">
          {/* Heading */}
          <p className="font-extrabold text-2xl sm:text-4xl">
               Join a global team of change-makers.
          </p>

          {/* Description */}
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
               Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed.
               Elit cursus est lorem in est id nec. Quis diam posuere at nisl 
               eget turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis erat nunc in parturient.
          </p>

          {/* Call-to-Action Button */}
          <div className="bg-brand-blue-500 rounded-3xl w-full md:w-6/12 p-3">
               <p className="text-white text-center">
               View Job Openings
               </p>
          </div>
          </div>

          {/* Right Section: Image */}
          <div className="w-full lg:w-6/12 flex justify-center items-center p-4">
          <Image
               src="/pi/join/joins.svg"
               alt="Join"
               height={900}
               width={900}
               className="w-full h-auto max-w-md lg:max-w-none rounded-xl"
          />
          </div>
     </div>
     );
}