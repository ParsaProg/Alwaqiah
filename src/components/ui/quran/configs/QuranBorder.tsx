import Image from "next/image";

export default function QuranBorder({ isRight }: { isRight: boolean }) {
  return (
    <div
      className={` absolute w-[36%] h-[750px] ${
        isRight ? "rotate-[180deg] right-[170px]" : "left-[170px]"
      }`}
    >
      <Image
      draggable={false}
        alt="main-quran-layout-image"
        unoptimized
        src={"https://quran.inoor.ir/_nuxt/quran-taz-corner.BYGpA34w.png"}
        width={800}
        height={800}
        className="select-none absolute w-[160px] h-[160px] rotate-[-90deg] left-[0]"
      />
      <Image
      draggable={false}
        alt="main-quran-layout-image"
        unoptimized
        src={"https://quran.inoor.ir/_nuxt/quran-taz-corner.BYGpA34w.png"}
        width={800}
        height={800}
        className="select-none absolute w-[160px] h-[160px] rotate-[180deg] left-[0] bottom-0"
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
        className="z-[2] left-[96px] absolute h-[96px] mx-auto"
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
        className="left-[96px] bottom-0 rotate-[180deg] z-[2] absolute h-[96px]"
      ></div>
      <div
        style={{
          height: "calc(710px - (96px + 45px))",
          backgroundImage:
            "url(https://quran.inoor.ir/_nuxt/quran-border-ver.6WPMh9t8.png)",
          backgroundSize: "15px",
          backgroundRepeat: "repeat-y",
        }}
        className="z-[3] absolute right-0 w-[15px] rotate-[180deg] top-[50%] translate-y-[-50%]"
      ></div>
    </div>
  );
}
