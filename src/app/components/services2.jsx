import Link from "next/link";
import websiteContentData from "../info";
import Image from 'next/image';

export default function Service2 ()  {
    return (
        <div className="flex flex-wrap gap-8 w-11/12 items-center justify-center mx-auto py-10">
            {websiteContentData.services.map((service) => (
                <div
                key={service.id}
                className="flex flex-col items-center lg:items-start space-y-6 p-8 rounded-3xl bg-white hover:shadow-xl transition-shadow lg:w-5/12 sm:w-10/12 xs:w-full"
                >
                {/* Icon Section */}
                <div className="rounded-full p-4 bg-brand-blue-200 flex justify-center items-center">
                    <Image
                    src={service.icon}
                    alt={service.title}
                    height={24}
                    width={24}
                    className="mx-auto"
                    />
                </div>

                {/* Title */}
                <p className="font-bold text-lg text-gray-800 text-center lg:text-left">
                    {service.title}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed text-center lg:text-left">
                    {service.writeUpLong}
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex justify-between items-center w-full lg:w-8/12 gap-4">
                    
                    <button 
                     className="bg-brand-blue-500 text-white font-bold text-xs rounded-3xl px-4 py-2 w-5/12 text-center hover:bg-brand-blue-600 transition lg:w-full sm:w-8/12 xs:w-8/12"
                     >
                        <Link
                         href="/contact"
                         >
                            Connect Now
                        </Link>
                    </button>
                    
                    <button className="border-2 border-brand-blue-500 text-brand-blue-500 font-bold text-xs rounded-3xl px-4 py-2 w-5/12 text-center hover:bg-brand-blue-100 transition lg:w-full sm:w-8/12 xs:w-8/12">
                    Our Works
                    </button>
                </div>
                </div>
            ))}
        </div>

     );
}
  