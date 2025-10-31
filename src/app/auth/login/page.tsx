"use client";

import dynamic from "next/dynamic";

const ModernAnalogClock = dynamic(
  () => import("@/components/ui/clock/IslamicAnalogClock"),
  { ssr: false }
);

import "@/styles/analog_clock.css";
import convertToFarsiNumbers from "@/functions/EnToFnNumbers";
import { useEffect, useState } from "react";
import { getShamsiDate } from "@/utils/shamsiDate";
import { ArrowDown, Eye, Lock, User } from "lucide-react";
import { getGreeting } from "@/utils/setWelcomeText";

export default function LoginPage() {
  const [time, setTime] = useState<Date>(new Date());
  const [tabIndex, setTabIndex] = useState<number>(0);
  const day = new Date().getDay();
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const Hour = time?.getHours();
  const Minute = time?.getMinutes();
  const Second = time?.getSeconds();

  if (!time) return null;

  return (
    <div className="[@media(max-width:1060px)]:mt-[50px] mt-[100px] gap-y-[30px] gap-x-[100px] flex items-start justify-center flex-row [@media(max-width:1060px)]:items-center [@media(max-width:1060px)]:flex-col">
      <div className="[@media(max-width:1060px)]:hidden visible text-center flex flex-col items-center gap-y-5">
        <ModernAnalogClock />
        <div>
          <h1 dir="ltr" className="font-bold text-lg text-primary-Light">
            {convertToFarsiNumbers(
              `${Hour < 10 ? `0${Hour}` : Hour}:${
                Minute < 10 ? `0${Minute}` : Minute
              }:${Second < 10 ? `0${Second}` : Second}`
            )}
          </h1>
          <h2 className="mt-1 font-bold text-sm text-confirmHover-Light">
            {getShamsiDate().weekday} {getShamsiDate().day}{" "}
            {getShamsiDate().month} {getShamsiDate().year}
          </h2>
        </div>
        <section>
          <h1 className="font-bold text-2xl text-primary-Light">{getGreeting()}</h1>
          <h3 className="mt-2 font-thin text-sm text-black">
            به سامانه قران کریم خوش آمدید
          </h3>
        </section>
        <div className="rounded-xl shadow-[0px_0px_15px_5px] flex text-center flex-col gap-y-3 shadow-[#CBD6FD] p-10 text-black">
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
          <p className="mt-2 w-[200px] text-justify">
            {tabIndex === 0
              ? "به نام خداوند بخشنده مهربان"
              : "این آیه با نام خدا آغاز می‌شود که بیانگر توحید و وابستگی همه امور به ذات مقدس الهی است."}
          </p>
        </div>
      </div>
      <div className="[@media(min-width:1060px)]:hidden visible flex flex-col gap-y-5 items-center text-center">
        <ModernAnalogClock />
        <div>
          <h1 dir="ltr" className="font-bold text-lg text-primary-Light">
            {convertToFarsiNumbers(
              `${Hour < 10 ? `0${Hour}` : Hour}:${
                Minute < 10 ? `0${Minute}` : Minute
              }:${Second < 10 ? `0${Second}` : Second}`
            )}
          </h1>
          <h2 className="mt-1 font-bold text-sm text-confirmHover-Light">
            {getShamsiDate().weekday}{" "}
            {convertToFarsiNumbers(getShamsiDate().day.toString())}{" "}
            {getShamsiDate().month}{" "}
            {convertToFarsiNumbers(getShamsiDate().year.toString())}
          </h2>
        </div>
        <section>
          <h1 className="font-bold text-2xl text-primary-Light">{getGreeting()}</h1>
          <h3 className="mt-2 font-thin text-sm text-black">
            به سامانه قران کریم خوش آمدید
          </h3>
        </section>
      </div>
      <ArrowDown className=" [@media(min-width:1060px)]:hidden visible animate-bounce text-primary-Light" size={20}/>
      <div className="w-full [@media(min-width:601px)]:max-w-[600px] max-w-[90%] rounded-xl shadow-[0px_0px_15px_5px] flex text-center flex-col gap-y-3 shadow-[#CBD6FD] p-8 text-black">
        <h1 className="mt-3 font-thin text-confirmHover-Light text-3xl">
          ورود به سامانه‌ی الواقعه
        </h1>

        <section className="flex flex-col items-start mt-5">
          <h2 className="font-bold text-black text-xl">نام کاربری</h2>
          <div className="relative text-slate-500 w-full">
            <User className="absolute top-[50%]  right-3" size={20} />
            <input
              type="text"
              placeholder="نام کاربری خود را وارد کنید"
              className="w-full py-5 px-10 outline-none rounded-xl focus:ring-2 focus:ring-confirmHover-Light focus:ring-offset-2 border-[1px] mt-5 border-slate-300 placeholder:text-slate-500 transition-shadow duration-200"
            />
          </div>
        </section>

        <section className="flex flex-col items-start mt-5">
          <h2 className="font-bold text-black text-xl">رمز عبور</h2>
          <div className="relative text-slate-500 w-full">
            <Lock className="absolute top-[50%]  right-3" size={20} />
            <Eye
              className="absolute top-[50%] cursor-pointer left-5"
              size={20}
            />
            <input
              type="text"
              placeholder="رمز عبور خود را وارد کنید"
              className="w-full py-5 px-10 outline-none rounded-xl focus:ring-2 focus:ring-confirmHover-Light focus:ring-offset-2 border-[1px] mt-5 border-slate-300 placeholder:text-slate-500 transition-shadow duration-200"
            />
          </div>
        </section>

        <button className="hover:bg-blue-800 transition-colors duration-200 rounded-xl p-5 text-white bg-primary-Light mt-5 text-lg">
          ورود به سامانه
        </button>

        <section className="mt-5 text-primary-Light w-full flex justify-between items-center">
          <div className="cursor-pointer">ثبت نام کنید</div>
          <div className="cursor-pointer">فراموشی رمز‌عبور؟</div>
        </section>
      </div>
      <div className="[@media(max-width:1060px)]:flex hidden w-[90%] rounded-xl shadow-[0px_0px_15px_5px]  text-center flex-col gap-y-3 shadow-[#CBD6FD] p-10 text-black">
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
        <p className="mt-2 text-justify">
          {tabIndex === 0
            ? "به نام خداوند بخشنده مهربان"
            : "این آیه با نام خدا آغاز می‌شود که بیانگر توحید و وابستگی همه امور به ذات مقدس الهی است."}
        </p>
      </div>
    </div>
  );
}
