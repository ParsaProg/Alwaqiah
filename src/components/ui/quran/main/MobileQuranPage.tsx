"use client";

import Image from "next/image";
import MobileQuranBorder from "../configs/MoibleQuranBorder";
import convertToFarsiNumbers from "@/functions/EnToFnNumbers";
import Hezb1 from "@/../public/svg/hezb.svg";
import Hezb2 from "@/../public/svg/hezb-2.svg";
import AyeNumberImage from "@/../public/images/quran/3.png";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function MobileQuranPage() {
  const opendedContainerClickedData = [
    "ترجمه",
    "تفسیر",
    "حدیث",
    "واژه نامه",
    "موضوعات",
    "اعراب قران",
    "اعلام و اسما",
  ];
  const [clickedIndex, setClickedIndex] = useState<number | undefined>(
    undefined
  );
  
  const quranPage = [
    {
      ayeText: "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
      ayeNumber: "1",
      translate: "ستايش خداى راست،پروردگار جهانيان",
    },
    {
      ayeText: "ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
      ayeNumber: "2",
      translate: "بخشاينده مهربان",
    },
    {
      ayeText: "مَٰلِكِ يَوۡمِ ٱلدِّينِ",
      ayeNumber: "3",
      translate: "خداوند روز جزا",
    },
    {
      ayeText: "إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ",
      ayeNumber: "4",
      translate: "تنها تو را بندگى مى‌كنيم و تنها از تو يارى مى‌جوييم",
    },
    {
      ayeText: "ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ",
      ayeNumber: "5",
      translate:
        "راه كسانى كه به آنان انعام كرده‌اى،آنان نه كه مورد خشم قرار گرفته‌اند و نه گمراهان",
    },
  ];


  return (
    <div className="w-[98%] mx-auto relative">
      <MobileQuranBorder />
      <div
        style={{
          height: "calc(800px - (2 * 25px))",
          width: "calc(100% - 48px)",
        }}
        className={`top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] h-[800px] select-auto absolute top-0 z-1 bg-[#FDFBDA] ${
          clickedIndex === undefined && "overflow-y-scroll"
        } custom-scrollbar p-3`}
      >
        <div className="flex items-center justify-center mt-3 w-[100%] [@media(max-width:560px)]:h-15 h-20 mx-auto outline-[3px] outline-[#36367d]">
          <div className="overflow-hidden w-full [@media(max-width:560px)]:h-15 h-20 mx-auto border-[3px] border-[#D6B46E] relative">
            <Image
              alt=""
              src={
                "https://quran.inoor.ir/_nuxt/surah-corner-small.X0b1ROLj.png"
              }
              unoptimized
              width={800}
              height={800}
              className="absolute right-0 h-full w-[70px] hidden [@media(max-width:560px)]:block"
            />
            <Image
              alt=""
              src={"https://quran.inoor.ir/_nuxt/surah-corner.Di9CoE_Y.png"}
              unoptimized
              width={800}
              height={800}
              className="absolute right-0 h-[100%] w-[150px] hidden [@media(min-width:560px)]:block"
            />
            <div className="absolute right-[50%] translate-x-[50%] top-[50%] translate-y-[-50%] text-2xl font-thin">
              {" "}
              <div className="absolute right-[50%] translate-x-[50%] top-[50%] translate-y-[-50%] text-3xl w-[400px] font-thin text-center quran-taha">
                سوره حمد
              </div>
            </div>
            <Image
              alt=""
              src={
                "https://quran.inoor.ir/_nuxt/surah-corner-small.X0b1ROLj.png"
              }
              unoptimized
              width={800}
              height={800}
              className="absolute left-0 rotate-[180deg] h-[100%] w-[70px] hidden [@media(max-width:560px)]:block"
            />
            <Image
              alt=""
              src={"https://quran.inoor.ir/_nuxt/surah-corner.Di9CoE_Y.png"}
              unoptimized
              width={800}
              height={800}
              className="absolute left-0 rotate-[180deg] h-[100%] w-[150px] hidden [@media(min-width:560px)]:block"
            />
          </div>
        </div>
        <div className="mt-5 flex items-center gap-x-3 justify-center">
          <section className="flex items-center gap-x-1">
            <div
              style={{
                backgroundImage: `url(${Hezb1.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter:
                  "invert(68%) sepia(74%) saturate(492%) hue-rotate(358deg) brightness(92%) contrast(95%)",
              }}
              className="fill-[#E5AE1E] w-8 h-8"
            />
            <div
              style={{
                backgroundImage: `url(${Hezb2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter:
                  "invert(25%) sepia(14%) saturate(2706%) hue-rotate(202deg) brightness(91%) contrast(97%)",
              }}
              className="fill-[#E5AE1E] w-8 h-8"
            />
          </section>
          <h1 className="hover:bg-secondry-Light transition-colors duration-200 cursor-grab z-100 p-1 untihamo text-lg text-center">
            بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
          </h1>
          <div
            style={{
              backgroundImage: `url(${AyeNumberImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-8 h-8 text-center flex items-center justify-center"
          >
            <h1 className="text-black text-sm mt-1">
              {convertToFarsiNumbers("1")}
            </h1>
          </div>
        </div>
        <h1 className="group-hover:bg-secondry-Light transition-colors duration-200 cursor-grab relative leading-5 iransans text-md font-thin text-center w-full mt-3">
          به نام خداوند بخشندۀ مهربان
        </h1>
        <div className="mt-5 shrink-0 p-5 w-full flex items-start justify-center gap-3 flex-col  text-black untihamo text-xl">
          {quranPage.map((aye, _i) => {
            const localRef = useRef<HTMLDivElement | null>(null);

            useEffect(() => {
              if (clickedIndex !== _i) return;

              const handleClickOutside = (e: MouseEvent) => {
                if (
                  localRef.current &&
                  !localRef.current.contains(e.target as Node)
                ) {
                  setClickedIndex(undefined);
                }
              };

              document.addEventListener("mousedown", handleClickOutside);
              return () =>
                document.removeEventListener("mousedown", handleClickOutside);
            }, [clickedIndex, _i]);
            return (
              <div
                onClick={() => setClickedIndex(_i)}
                key={_i}
                className="group relative"
              >
                <div className="select-none z-300 text-start flex items-start justify-start flex-wrap gap-3">
                  <span
                    className={`${
                      clickedIndex === _i && "bg-secondry-Light"
                    } group-hover:bg-secondry-Light z-300 transition-colors duration-200 cursor-grab text-center relative box-border leading-10`}
                  >
                    {aye.ayeText}
                  </span>
                  <div
                    style={{
                      backgroundImage: `url(${AyeNumberImage.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="cursor-grab w-10 h-10 text-center flex items-center justify-center"
                  >
                    <h1 className="text-black text-sm mt-1 iransans">
                      {convertToFarsiNumbers(String(Number(aye.ayeNumber) + 1))}
                    </h1>
                  </div>
                </div>
                <span
                  className={`z-300 ${
                    clickedIndex === _i && "bg-secondry-Light"
                  } group-hover:bg-secondry-Light transition-colors duration-200 cursor-grab relative leading-5 iransans text-sm font-thin text-start`}
                >
                  {aye.translate}
                </span>
                <AnimatePresence mode="wait">
                  {clickedIndex === _i && (
                    <motion.div
                      ref={localRef}
                      key="container"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ duration: 0.1 }}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      className="select-none iransans text-sm font-thin flex flex-col gap-y-3 items-start text-start absolute top-[40px] bg-white rounded-lg text-black  py-4 shadow-[#00000040] shadow-[0px_0px_10px_5px] z-400"
                    >
                      {opendedContainerClickedData.map((val, index) => {
                        return (
                          <div className="w-full" key={index}>
                            <div className="w-full px-7 cursor-pointer hover:text-primary-Light transition-colors duration-200">
                              {val}
                            </div>
                            {index !==
                              opendedContainerClickedData.length - 1 && (
                              <div className="mt-2 w-[90%] mx-auto rounded-xl h-[1px] bg-[#00000040]"></div>
                            )}
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
