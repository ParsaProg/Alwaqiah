import { HeroSection } from "@/components/ui/hero/HeroSection";
import BlueContainerAye from "@/components/ui/landing/BlueContainerAye";
import ErabQuranSection from "@/components/ui/landing/ErabQuran";
import QuranSearch from "@/components/ui/landing/QuranSearch";
import QuranContainerTypes from "@/components/ui/landing/QuranTypesContainers";

export default function Home(){
  return <div className="">
    <HeroSection />
    <QuranContainerTypes />
    <QuranSearch />
    <BlueContainerAye />
    <ErabQuranSection />
    <div className="mt-[100px]"></div>
  </div>
}