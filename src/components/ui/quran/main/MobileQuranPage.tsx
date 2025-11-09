import MobileQuranBorder from "../configs/MoibleQuranBorder";

export default function MobileQuranPage() {
  return (
    <div className="w-[98%] mx-auto relative">
      <MobileQuranBorder />
      <div style={{
        height: "calc(650px - (2 * 25px))",
        width: "calc(100% - 48px)"
      }} className="top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] h-[650px] select-auto absolute top-0 z-1 bg-[#FDFBDA] overflow-y-scroll custom-scrollbar"></div>
    </div>
  );
}
