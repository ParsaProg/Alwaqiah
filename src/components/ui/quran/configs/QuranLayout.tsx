import Image from "next/image";
import MainQuranLayoutImage from "@/../public/images/quran-layout.png";
import "@/styles/quran-main-border.css";
import QuranBookCenterBottom from "@/../public/images/quran-book-center-bottom.jpg";
export default function QuranLayout() {
  return (
    <>
      <Image
      draggable={false}
        alt="main-quran-layout-image"
        src={MainQuranLayoutImage.src}
        width={800}
        height={800}
        className="select-none w-full h-[100%]"
      />

      <Image
      draggable={false}
        alt="quran-book-center"
        src={QuranBookCenterBottom.src}
        width={800}
        height={800}
        className="select-none w-full absolute bottom-[-25px]"
      />
    </>
  );
}
