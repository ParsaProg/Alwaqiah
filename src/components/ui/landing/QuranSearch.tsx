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
    <div className="overflow-hidden mt-[100px] flex items-center justify-center bg-[#FEFCEC] w-full py-5 relative h-[500px]">
        <h1 className="absolute top-10 right-10 text-4xl font-thin text-black">قران پژوهی</h1>
      <div className="mr-[-500px] z-[101] grid grid-cols-2 gap-5">
        {items.map((val, _i) => {
            return <div style={{
                boxShadow: "1px 0px 20px 3px #CBD6FD"
            }} className="p-5  rounded-xl bg-white text-black flex items-center justify-start gap-x-3" key={_i}>
                <div className="bg-[#4C5FD5] p-3 rounded-full text-white">
                    <Globe size={20}/>
                </div>
                <h1>اعراب قران را در بیابید</h1>
            </div>
        })}
      </div>
      <div className="absolute z-[90] left-[250px]">
        <Image alt="قران پژوهی، رحل قران" width={1000} height={1000} className={"w-[832px] h-[588px]"} src={QuranRahl.src} />
      </div>
    </div>
  );
}
