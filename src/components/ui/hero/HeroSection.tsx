import Image from "next/image";
import QuranHeroImage from "@/../public/images/quran-hero-image.png";
import HeaderPattern from "@/../public/images/header-patterns.png";
import QuranKarimNast from "@/../public/images/quran-karim-title.png";
import UnderQuran from "@/../public/images/under-quran.png";
import { Microscope, Search } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative w-full py-2 bg-[#4C5FD5] [@media(max-width:1220px)]:h-auto h-[525px]">
      <div
        className="absolute inset-0 w-full [@media(max-width:1220px)]:h-auto h-[525px]"
        style={{
          backgroundImage: `url(${HeaderPattern.src})`,
          backgroundPosition: "center",
          backgroundSize: "100px",
          backgroundRepeat: "repeat",
          opacity: 0.4
        }}
      ></div>
      <div className="mx-auto [@media(min-width:1495px)]:w-[90%] w-[95%] flex [@media(max-width:1220px)]:flex-col items-center relative justify-center gap-x-[100px]  [@media(max-width:1220px)]:pb-5">
        <Image
          alt="quran"
          src={QuranHeroImage}
          width={800}
          height={800}
          className=" [@media(max-width:1220px)]:mt-[50px] mt-[70px]  [@media(max-width:1220px)]:w-[250px] [@media(max-width:1220px)]:h-[290px] w-[390px] h-[472px] mb-5"
        />
        <div className="flex flex-col [@media(max-width:1220px)]:items-center items-start gap-y-5">
          <Image
            width={800}
            height={800}
            alt="قران کریم"
            src={QuranKarimNast.src}
            className="w-[66px] h-[41px]"
          ></Image>
          <h1 className="text-white font-thin text-lg">سوره الحج ، آیه 1</h1>
          <h1 className="text-white font-thin text-3xl untihamo">
            يَـٰٓأَيُّهَا ٱلنَّاسُ ٱتَّقُواْ رَبَّكُمۡۚ إِنَّ زَلۡزَلَةَ
            ٱلسَّاعَةِ شَيۡءٌ عَظِيمࣱ
          </h1>
          <Image
            width={800}
            height={800}
            alt="قران کریم"
            src={UnderQuran.src}
            className="w-[568px] h-[24px]"
          ></Image>
          <h2 className="text-white font-thin text-lg">
            اى مردم! از پروردگارتان پروا كنيد، بى‌ترديد زلزلۀ قيامت، واقعه‌اى
            بزرگ است
          </h2>
          <div className=" w-full bg-white rounded-lg p-1 relative flex items-center">
            <div className="relative w-full text-[#6B6F80]">
              <input
                type="text"
                placeholder="جستجو در آیه‌ها، تفاسیر و ترجمه‌ها"
                className="text-black placeholder:text-[#6B6F80] outline-none border-none rounded-lg py-2 pl-2 pr-8 [@media(max-width:620px)]:w-[95%] w-[450px]"
              />
              <Search
                size={18}
                className="absolute right-2 top-[50%] translate-y-[-50%]"
              />
            </div>
            <div className="cursor-pointer transition-colors duration-200 p-3 rounded-lg bg-[#FFB400] text-black gap-x-2 flex items-center flex-shrink-0 justify-center hover:bg-[#7C5CE3] hover:text-white">
              بررسی آیه
              <Microscope size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
