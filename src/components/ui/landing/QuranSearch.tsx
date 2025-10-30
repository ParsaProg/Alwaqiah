import Image from "next/image";
import QuranRahl from "@/../public/images/quran-rahl.png";
import { Globe } from "lucide-react";

export default function QuranSearch() {
    const items = [
        {},
        {},
        {},
        {}
    ]
  return (
    <div className="overflow-hidden mt-[100px] flex flex-shrink-0 items-center justify-center bg-[#FEFCEC] w-full py-5 relative h-[500px]">
        <h1 className="absolute top-10 sm:right-10 right-5 text-4xl font-thin text-black z-[100]">قران پژوهی</h1>
      <div className="mt-[-50px] z-[101] grid grid-cols-2 gap-5">
        {items.map((val, _i) => {
            return <div style={{
                boxShadow: "1px 0px 20px 3px #CBD6FD"
            }} className="sm:p-5 p-3 rounded-xl bg-white text-black flex flex-shrink-0 items-center justify-start gap-x-3" key={_i}>
                <div className="bg-primary-Light text-xl p-3 rounded-full text-white">
                    <Globe size={18}/>
                </div>
                <h1 className="sm:text-lg text-sm">اعراب قران</h1>
            </div>
        })}
      </div>
      <div className="z-[90] left-[250px]">
        <Image alt="قران پژوهی، رحل قران" width={1000} height={1000} className={"[@media(max-width:1200px)]:w-[55vw] [@media(max-width:1200px)]:h-[40vw] w-[700px] h-[450px] [@media(max-width:1249px)]:absolute bottom-0 right-[50%] [@media(max-width:1249px)]:translate-x-[50%]"} src={QuranRahl.src} />
      </div>
    </div>
  );
}
