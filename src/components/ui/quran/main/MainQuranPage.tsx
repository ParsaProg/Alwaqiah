import convertToFarsiNumbers from "@/functions/EnToFnNumbers";
import QuranBorder from "../configs/QuranBorder";
import QuranLayout from "../configs/QuranLayout";
import Image from "next/image";
import Hezb1 from "@/../public/svg/hezb.svg";
import Hezb2 from "@/../public/svg/hezb-2.svg";
import AyeNumberImage from "@/../public/images/quran/3.png";
import "@/styles/quran-page-scrollbar.css";

export default function MainQuranPage() {
  const quranPage = [
    {
      ayeText: "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
      ayeNumber: "1",
    },
    {
      ayeText: "ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
      ayeNumber: "2",
    },
    {
      ayeText: "مَٰلِكِ يَوۡمِ ٱلدِّينِ",
      ayeNumber: "3",
    },
    {
      ayeText: "إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ",
      ayeNumber: "4",
    },
    {
      ayeText: "ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ",
      ayeNumber: "5",
    },
    {
      ayeText:
        "صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ",
      ayeNumber: "6",
    },
  ];
  const quranPageTranslated = [
    {
      ayeText: "ستايش خداى راست،پروردگار جهانيان",
      ayeNumber: "1",
    },
    {
      ayeText: "بخشاينده مهربان",
      ayeNumber: "2",
    },
    {
      ayeText: "خداوند روز جزا",
      ayeNumber: "3",
    },
    {
      ayeText: "تنها تو را بندگى مى‌كنيم و تنها از تو يارى مى‌جوييم",
      ayeNumber: "4",
    },
    {
      ayeText:
        "راه كسانى كه به آنان انعام كرده‌اى،آنان نه كه مورد خشم قرار گرفته‌اند و نه گمراهان",
      ayeNumber: "5",
    },
  ];
  return (
    <div className="main-quran-layout w-full h-[900px] flex items-center gap-x-[100px] justify-center relative">
      <div
        className="right-[calc(170px+96px)] w-[calc(36%-(96px+15px))] h-[calc(710px-(96px+30px))] [@media(max-width:153 0px)]:right-[calc(50px+96px)] [@media(max-width:1530px)]:w-[calc(43%-(96px+15px))] select-auto absolute bg-[#FDFBDA] overflow-y-scroll custom-scrollbar"
      >
        <div className="flex items-center justify-center mt-6 w-[95%] h-20 mx-auto outline-[3px] outline-[#36367d]">
          <div className="overflow-hidden w-full h-20 mx-auto border-[3px] border-[#D6B46E] relative">
            <Image
              alt=""
              src={
                "https://quran.inoor.ir/_nuxt/surah-corner-small.X0b1ROLj.png"
              }
              unoptimized
              width={800}
              height={800}
              className="absolute right-0 h-full w-[90px]"
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
              className="absolute left-0 rotate-[180deg] h-[100%] w-[90px]"
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
              className="fill-[#E5AE1E] w-10 h-10"
            />
            <div
              style={{
                backgroundImage: `url(${Hezb2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter:
                  "invert(25%) sepia(14%) saturate(2706%) hue-rotate(202deg) brightness(91%) contrast(97%)",
              }}
              className="fill-[#E5AE1E] w-10 h-10"
            />
          </section>
          <h1 className="hover:bg-secondry-Light transition-colors duration-200 cursor-grab z-100 p-1 untihamo text-2xl text-center">
            بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
          </h1>
          <div
            style={{
              backgroundImage: `url(${AyeNumberImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-10 h-10 text-center flex items-center justify-center"
          >
            <h1 className="text-black text-sm mt-1">
              {convertToFarsiNumbers("1")}
            </h1>
          </div>
        </div>
        <div
          style={{
            flex: "0 0 auto",
            width: "100%",
          }}
          className="shrink-0 p-5 w-full flex items-center justify-center gap-3 flex-wrap  text-black untihamo text-2xl"
        >
          {quranPage.map((aye, _i) => {
            return (
              <div
                key={_i}
                className="group z-100 text-start flex items-center justify-center flex-wrap gap-3"
              >
                <span className="group-hover:bg-secondry-Light transition-colors duration-200 cursor-grab text-center relative box-border leading-10">
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
            );
          })}
        </div>
      </div>
      <div
        
        className="left-[calc(170px+96px)] w-[calc(36%-(96px+15px))] h-[calc(710px-(96px+30px))] [@media(max-width:1530px)]:left-[calc(50px+96px)] [@media(max-width:1530px)]:w-[calc(43%-(96px+15px))] select-auto absolute  bg-[#FDFBDA] overflow-y-scroll custom-scrollbar"
      >
        <div className="flex items-center justify-center mt-6 w-[95%] h-20 mx-auto outline-[3px] outline-[#36367d]">
          <div className="overflow-hidden w-full h-20 mx-auto border-[3px] border-[#D6B46E] relative">
            <Image
              alt=""
              src={
                "https://quran.inoor.ir/_nuxt/surah-corner-small.X0b1ROLj.png"
              }
              unoptimized
              width={800}
              height={800}
              className="absolute right-0 h-full w-[90px]"
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
              className="absolute left-0 rotate-[180deg] h-[100%] w-[90px]"
            />
          </div>
        </div>
        <div className="mt-5 flex items-center gap-x-1 justify-center">
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
          <h1 className="hover:bg-secondry-Light transition-colors duration-200 cursor-grab z-100 p-1 text-lg text-center">
            به نام خداوند بخشنده مهربان
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
        <div
          style={{
            flex: "0 0 auto",
            width: "100%",
          }}
          className="shrink-0 p-5 w-full flex items-center justify-center text-center gap-3 flex-wrap  text-black text-xl"
        >
          {quranPageTranslated.map((aye, _i) => {
            return (
              <div
                key={_i}
                className="group z-1 text-center flex items-center justify-center flex-wrap gap-3"
              >
                <span className="group-hover:bg-secondry-Light transition-colors duration-200 cursor-grab text-center relative box-border leading-10">
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
                    {convertToFarsiNumbers(
                      (Number(aye.ayeNumber) + 1).toString()
                    )}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="[@media(max-width:1530px)]:hidden block absolute w-[45%] right-[60px]">
        <div
          style={{
            backgroundImage:
              "url(https://quran.inoor.ir/_nuxt/page-number.C_OD3npz.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="w-[80px] h-[900px] z-[1999]"
        >
          <div className="absolute text-center text-md top-[50%] translate-y-[-50%] right-[20px]">
            <h1>صفحه</h1>
            <h1>{convertToFarsiNumbers("132")}</h1>
          </div>
        </div>
      </div>

      <div className="[@media(max-width:1530px)]:hidden block absolute left-10">
        <div
          style={{
            backgroundImage:
              "url(https://quran.inoor.ir/_nuxt/page-number.C_OD3npz.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="w-20 h-[900px] z-1999"
        >
          <div className="absolute text-center text-md top-[50%] translate-y-[-50%] right-5">
            <h1>صفحه</h1>
            <h1>{convertToFarsiNumbers("132")}</h1>
          </div>
        </div>
      </div>
      <div className="quran-taha absolute right-[50px] top-2.5 flex items-center w-[45%] justify-between mx-auto text-xl px-10 text-[#707070]">
        <h1>جزء هفدهم</h1>
        <h1>سوره انبیاء</h1>
      </div>
      <div className="quran-taha absolute left-[50px] top-2.5 flex items-center w-[45%] justify-between mx-auto text-xl px-10 text-[#707070]">
        <h1>جزء هفدهم</h1>
        <h1>سوره انبیاء</h1>
      </div>
      <QuranLayout />
      <QuranBorder isRight={true} />
      <QuranBorder isRight={false} />
    </div>
  );
}
