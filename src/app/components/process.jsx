import websiteContentData from "../info";
import Image from 'next/image';


export default function Process() {
    return (
        <div className="flex-col space-y-5 py-5 mx-auto justify-center">
            {websiteContentData.processes.map((process) => (
                <div key={process.id} className="flex space-x-2">

                    <div className={`rounded-full h-fit w-fit ${process.colour} p-3 mt-3 mr-3 `}>

                        <Image
                            src={process.icon}
                            alt={process.title}
                            height={50}
                            width={50}
                            className="mx-auto"
                        />

                    </div>
                
                    <div className=" space-y-2 flex-col ">
                       
                       <p className="text-base font-bold">
                          {process.title}
                       </p>

                       <p className=" text-gray-700 w-11/12 text-justify text-sm leading-relaxed">
                         {process.writeUp}
                       </p>

                    </div>
                </div>
            ))}
        </div>
    );
}

  