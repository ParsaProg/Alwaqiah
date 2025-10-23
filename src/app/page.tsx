import { HeroSection } from "@/components/ui/hero/HeroSection";
import QuranSearch from "@/components/ui/landing/QuranSearch";
import QuranContainerTypes from "@/components/ui/landing/QuranTypesContainers";

export default function Home(){
  return <div className="">
    <HeroSection />
    <QuranContainerTypes />
    <QuranSearch />
    <div className="mt-[100px]"></div>
  </div>
}