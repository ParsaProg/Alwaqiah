"use client";

import convertToFarsiNumbers from "@/functions/EnToFnNumbers";
import ModernAnalogClock from "@/components/ui/clock/IslamicAnalogClock";
import { useEffect, useState } from "react";
import { getShamsiDate } from "@/utils/shamsiDate";
import { getGreeting } from "@/utils/setWelcomeText";
export default function RightLoginPageSection({ mode }: { mode: string }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [time, setTime] = useState<Date | null>(new Date());
  const Hour = time?.getHours();
  const Minute = time?.getMinutes();
  const Second = time?.getSeconds();
  const [tabIndex, setTabIndex] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted || !time) {
    return null;
  }
  return (
    <div
      className={`${
        mode === "desktop"
          ? "[@media(max-width:1060px)]:hidden"
          : "[@media(min-width:1060px)]:hidden w-full [@media(min-width:601px)]:max-w-[600px] max-w-[90%] "
      } visible text-center flex flex-col items-center gap-y-3`}
    >
      {mode !== "mobile-end" && <ModernAnalogClock />}
      {mode !== "mobile-end" && (
        <div>
          <h1 dir="ltr" className="font-bold text-lg text-primary-Light">
            {convertToFarsiNumbers(
              `${Hour! < 10 ? `0${Hour}` : Hour}:${
                Minute! < 10 ? `0${Minute}` : Minute
              }:${Second! < 10 ? `0${Second}` : Second}`
            )}
          </h1>
          <h2 className="mt-1 font-bold text-sm text-confirmHover-Light">
            {getShamsiDate().weekday} {getShamsiDate().day}{" "}
            {getShamsiDate().month} {getShamsiDate().year}
          </h2>
        </div>
      )}
      {mode !== "mobile-end" && (
        <section>
          <h1 className="font-bold text-2xl text-primary-Light">
            {getGreeting()}
          </h1>
          <h3 className="mt-2 font-thin text-sm text-black">
            به سامانه قران کریم خوش آمدید
          </h3>
        </section>
      )}

      {mode === "mobile-end" || mode === "desktop" ? (
        <LastSection
          isLast={mode}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          mode={mode}
        />
      ) : null}
    </div>
  );
}

function LastSection({ tabIndex, setTabIndex, isLast, mode }: any) {
  return (
    <div
      className={`${
        isLast === "mobile-end" ? "w-full" : ""
      } rounded-xl shadow-[0px_0px_15px_5px] flex text-center flex-col gap-y-3 shadow-[#CBD6FD] p-10 text-black`}
    >
      <h1 className="font-bold untihamo text-2xl">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </h1>
      <h5 className="font-thin text-md">سوره الفاتحة، آیه ۱</h5>
      <div className="flex flex-col items-start justify-start">
        <div className="flex justify-start items-center gap-x-7 mt-5 relative">
          <div
            className={`${
              tabIndex === 0 ? "translate-x-3" : "translate-x-[-55px]"
            } transition-transform ease-in-out absolute rounded-xl w-[62px] h-[40px] z-[-1] bg-primary-Light`}
          ></div>
          <div
            onClick={() => setTabIndex(0)}
            className={`cursor-pointer ${
              tabIndex === 0 ? "text-white" : "text-black"
            }`}
          >
            ترجمه
          </div>
          <div
            onClick={() => setTabIndex(1)}
            className={`cursor-pointer ${
              tabIndex === 1 ? "text-white" : "text-black"
            }`}
          >
            تفسیر
          </div>
        </div>
      </div>
      <hr className="mt-3 w-full border-slate-400" />
      <p
        className={`mt-2 ${mode === "desktop" ? "w-[200px]": "w-full"} text-justify`}
      >
        {tabIndex === 0
          ? "به نام خداوند بخشنده مهربان"
          : "این آیه با نام خدا آغاز می‌شود که بیانگر توحید و وابستگی همه امور به ذات مقدس الهی است."}
      </p>
    </div>
  );
}
