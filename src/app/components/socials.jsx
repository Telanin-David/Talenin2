import websiteContentData from "../info";
import Image from 'next/image';

export default function Socials ()  {
    return (
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mx-auto">
        {websiteContentData.socials.map((social) => (
          <div
            key={social.id}
            className="rounded-xl p-3 bg-white bg-opacity-25 flex items-center justify-center hover:bg-opacity-40 transition"
          >
            <Image
              src={social.icon}
              alt={social.title}
              height={24}
              width={24}
              className="opacity-75 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
      
     );
}
  
  