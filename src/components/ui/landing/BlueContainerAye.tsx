import BlueContainerBackground from "@/../public/images/blue-ayecontainer-background.jpg";
import Image from "next/image";
import QuranHeroImage from "@/../public/images/quran-hero-image.png";
import QuranKarimNast from "@/../public/images/quran-karim-title.png";
import UnderQuran from "@/../public/images/under-quran.png";
import { Microscope, } from "lucide-react";

export default function BlueContainerAye() {
  return (
    <div
      className="mx-auto mt-[100px] [@media(min-width:1495px)]:w-[90%] w-[90%] bg-primary-Light p-8 rounded-xl"
      style={{
        backgroundImage: `url(${BlueContainerBackground.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="md:bg-center bg-bottom mx-auto [@media(min-width:1495px)]:w-[90%] w-[95%] flex [@media(max-width:1220px)]:flex-col items-center relative justify-center gap-x-[100px] ">
        <div className="flex flex-col items-center gap-y-5">
          <Image
            width={800}
            height={800}
            alt="قران کریم"
            src={QuranKarimNast.src}
            className="w-[66px] h-[41px]"
          ></Image>
          <h1 className="text-white font-thin text-lg">سوره الحج ، آیه 1</h1>
          <h1 className="text-white font-thin text-3xl untihamo sm:text-start text-center">
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
          <h2 className="text-white font-thin text-lg sm:text-start text-center">
            اى مردم! از پروردگارتان پروا كنيد، بى‌ترديد زلزلۀ قيامت، واقعه‌اى
            بزرگ است
          </h2>

          <div className="flex justify-end items-center w-full">
            <div className="cursor-pointer transition-colors duration-200 p-3 rounded-lg bg-secondry-Light text-black gap-x-2 flex items-center flex-shrink-0 justify-center hover:bg-confirmHover-Light hover:text-white">
              بررسی آیه
              <Microscope size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
