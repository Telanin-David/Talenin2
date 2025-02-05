import websiteContentData from "../info";
import Image from 'next/image';

export default function Works ()  {
    return (
        <div className="flex flex-wrap gap-4 mx-auto justify-between">
            {websiteContentData.pastWorkd.map((work) => (
                <div key={work.id} className="rounded-xl lg:w-3/12 sm:w-10/12 xs:w-10/12 mx-auto  ">
                
                    <Image
                        src={work.image}
                        alt={work.title}
                        height={500}
                        width={500}
                        className=" w-full"
                    />
                </div>
            ))}
        </div>
     );
}