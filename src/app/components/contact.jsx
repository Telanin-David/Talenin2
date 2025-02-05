import websiteContentData from "../info";
import Image from 'next/image';

export default function Contact1 ()  {
    return (
        <div className="flex-col space-y-4 ">
            {websiteContentData.forms.map((form) => (
                <div key={form.id} className="flex space-x-4 items-center w-9/12  ">

                    <div className="h-fit w-fit p-2 rounded-full bg-white  ">

                        <Image
                            src={form.icon}
                            alt={form.title}
                            height={14}
                            width={14}
                            className="mx-auto"
                        />

                    </div>
                
                    <p className=" w-8/12 text-xs">
                       {form.writeUp}
                    </p>
                </div>
            ))}
        </div>
     );
}
  