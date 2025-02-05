import websiteContentData from "../info";
import Image from 'next/image';

export default function Team ()  {
    return (
        <div className="flex flex-wrap gap-12  py-10 mx-auto justify-evenly">
            {websiteContentData.teams.map((team) => (
                <div key={team.id} className=" flex-col items-center lg:w-3/12 sm:w-4/12 xs:w-4/12 space-y-10 ">
                
                  <div className="rounded-full mx-auto flex justify-center  h-fit w-fit">
                    <Image
                            src={team.icons}
                            alt={team.title}
                            height={96}
                            width={96}
                            className=" object-contain"
                        />
                  </div>

                  <div className="flex-col justify-center ">

                    <p className=" font-bold  lg:text-xl sm:text-lg xs:text-lg text-center">
                        {team.name}

                    </p>

                    <p className="text-gray-600 text-base text-center">
                        {team.name}

                    </p>

                  </div>
                    
                </div>
            ))}
        </div>
     );
}
  