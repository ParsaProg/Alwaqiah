import Image from "next/image";

export default function MobileQuranBorder() {
  return (
    <div className={`relative w-[100%] h-[650px] z-100`}>
      <Image
        draggable={false}
        alt="main-quran-layout-image"
        unoptimized
        src={"https://quran.inoor.ir/_nuxt/quran-taz-corner-small.D8Ll9_5B.png"}
        width={800}
        height={800}
        className="select-none absolute w-[49px] h-[49px] rotate-[-90deg] left-[0]"
      />
      <Image
        draggable={false}
        alt="main-quran-layout-image"
        unoptimized
        src={"https://quran.inoor.ir/_nuxt/quran-taz-corner-small.D8Ll9_5B.png"}
        width={800}
        height={800}
        className="select-none absolute w-[49px] h-[49px] rotate-[180deg] left-[0] bottom-0"
      />
      <Image
        draggable={false}
        alt="main-quran-layout-image"
        unoptimized
        src={"https://quran.inoor.ir/_nuxt/quran-taz-corner-small.D8Ll9_5B.png"}
        width={800}
        height={800}
        className="select-none absolute w-[49px] h-[49px] rotate-[90deg] right-[0] bottom-0"
      />
      <Image
        draggable={false}
        alt="main-quran-layout-image"
        unoptimized
        src={"https://quran.inoor.ir/_nuxt/quran-taz-corner-small.D8Ll9_5B.png"}
        width={800}
        height={800}
        className="select-none absolute w-[49px] h-[49px] right-[0] top-0"
      />
      <div
        style={{
          height: "calc(650px - (2 * 24px))",
          backgroundImage:
            "url(https://quran.inoor.ir/_nuxt/quran-taz-rep-ver-small.BcZYRBDe.png)",
          backgroundSize: "24px",
          backgroundPosition: "left",
          backgroundRepeat: "0 repeat-y",
        }}
        className="absolute w-[23px] h-[710px] rotate-[-180deg] left-0 top-[50%] translate-y-[-50%]"
      />
      <div
        style={{
          width: "calc(100% - (38px + 49px))",
          backgroundImage:
            "url(https://quran.inoor.ir/_nuxt/quran-taz-rep-small.BbykIFoM.png)",
          backgroundSize: "38px",
          backgroundPosition: "top",
          backgroundRepeat: "0 repeat-x",
        }}
        className="z-[2] left-[38px] absolute h-[25px]"
      ></div>
      <div
        style={{  
          width: "calc(100% - (38px + 49px))",
          backgroundImage:
            "url(https://quran.inoor.ir/_nuxt/quran-taz-rep-small.BbykIFoM.png)",
          backgroundSize: "38px",
          backgroundPosition: "top",
          backgroundRepeat: "0 repeat-x",
        }}
        className="z-[2] bottom-0 rotate-[180deg] left-[38px] absolute h-[25px]"
      ></div>
       <div
        style={{
          height: "calc(650px - (2 * 24px))",
          backgroundImage:
            "url(https://quran.inoor.ir/_nuxt/quran-taz-rep-ver-small.BcZYRBDe.png)",
          backgroundSize: "24px",
          backgroundPosition: "left",
          backgroundRepeat: "0 repeat-y",
        }}
        className="absolute w-[23px] h-[710px] right-0 top-[50%] translate-y-[-50%]"
      />
    </div>
  );
}
