import websiteContentData from "../info";
import Image from 'next/image';

export default function Service1 ()  {
    return (
        <div className="flex flex-wrap gap-5 my-2 ">
            {websiteContentData.services.map((service) => (
                
                <div key={service.id} className=" flex-col items-center lg:mx-auto sm:mx-auto xs:mx-auto lg:w-5/12 sm:w-full xs:w-full space-y-4 p-2 mx-auto ">
                   
                    <div className="rounded-full p-4 bg-brand-blue-200 flex justify-center h-12 w-12 mx-auto">
                        <Image
                            src={service.icon}
                            alt={service.title}
                            height={16}
                            width={16}
                            className="mx-auto "
                        />
                    </div>
                    

                    <p className=" bg-brand-blue font-bold text-lg text-center text-brand-blue-500 w-10/12 mx-auto ">
                        {service.title}
                    </p>

                    <p className="text-center text-gray-600 text-base leading-relaxed">
                        {service.writeUpShort}
                    </p>
                </div>

            ))}
        </div>
     );
}
  