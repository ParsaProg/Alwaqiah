import MainQuranLayoutImage from "@/../public/images/quran-layout.png";
import QuranBookCenter from "@/../public/images/quran-center-book.png";
import QuranBookCenterBottom from "@/../public/images/quran-book-center-bottom.jpg";
import "@/styles/quran-main-border.css";

import Image from "next/image";

export default function MainQuranPage() {
  return (
    <div className="main-quran-layout w-full h-[800px] flex items-center gap-x-[100px] justify-center relative">
      
      <Image
        alt="main-quran-layout-image"
        src={MainQuranLayoutImage.src}
        width={800}
        height={800}
        className="w-full h-[100%]"
      />
      <Image
        alt="quran-book-center"
        src={QuranBookCenterBottom.src}
        width={800}
        height={800}
        className="w-full absolute bottom-[-25px]"
      />
      <div className="right-[50px] absolute w-[45%] h-[750px] border-black"></div>
      <div className="overflow-hidden left-[50px] absolute w-[45%] h-[750px]">
        {" "}
        <Image
          alt="main-quran-layout-image"
          unoptimized
          src={"https://quran.inoor.ir/_nuxt/quran-taz-corner.BYGpA34w.png"}
          width={800}
          height={800}
          className="absolute w-[160px] h-[160px] rotate-[-90deg] left-[0]"
        />
        <Image
          alt="main-quran-layout-image"
          unoptimized
          src={"https://quran.inoor.ir/_nuxt/quran-taz-corner.BYGpA34w.png"}
          width={800}
          height={800}
          className="absolute w-[160px] h-[160px] rotate-[180deg] left-[0] bottom-0"
        />
        <div
          style={{
            backgroundImage:
              "url(https://quran.inoor.ir/_nuxt/quran-border-ver.6WPMh9t8.png)",
            backgroundSize: "15px",
            backgroundPosition: "left",
            backgroundRepeat: "0 repeat-y",
          }}
          className="absolute w-[15px] right-0 top-[50%] translate-y-[-50%] rotate-[180deg]"
        />
        <div
          style={{
            height: "calc(710px - (2 * 96px))",
            backgroundImage:
              "url(https://quran.inoor.ir/_nuxt/quran-taz-rep-ver.BiLvh9eQ.png)",
            backgroundSize: "96px",
            backgroundPosition: "left",
            backgroundRepeat: "0 repeat-y",
          }}
          className="absolute w-[96px] h-[710px] rotate-[-180deg] left-0 top-[50%] translate-y-[-50%]"
        />
        <div
          style={{
            width: "calc(100% - 96px)",
            backgroundImage:
              "url(https://quran.inoor.ir/_nuxt/quran-taz-rep.BkNmBljV.png)",
            backgroundSize: "96px",
            backgroundPosition: "top",
            backgroundRepeat: "0 repeat-x",
          }}
          className="z-[2] absolute h-[96px] mx-auto"
        ></div>
        <div
          style={{
            width: "calc(100% - 96px)",
            backgroundImage:
              "url(https://quran.inoor.ir/_nuxt/quran-taz-rep.BkNmBljV.png)",
            backgroundSize: "96px",
            backgroundPosition: "top",
            backgroundRepeat: "0 repeat-x",
          }}
          className="bottom-0 rotate-[180deg] z-[2] absolute h-[96px] mx-auto"
        ></div>
        <div
          style={{
            height: "calc(710px - 96px)",
            backgroundImage:
              "url(https://quran.inoor.ir/_nuxt/quran-border-ver.6WPMh9t8.png)",
            backgroundSize: "15px",
            backgroundRepeat: "0 repeat-y",
          }}
          className="z-[1] absolute right-0 w-[15px] top-[50%] translate-y-[-50%]"
        ></div>
      </div>
    </div>
  );
}
