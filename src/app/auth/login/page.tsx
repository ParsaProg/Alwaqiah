"use client";
import RightLoginPageSection from "@/components/ui/auth/login/RightSection";
import "@/styles/analog_clock.css";
import { ArrowDown, Eye, Lock, User } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="[@media(max-width:1060px)]:mt-[50px] mt-[100px] gap-y-[20px] gap-x-[100px] flex items-start justify-center flex-row [@media(max-width:1060px)]:items-center [@media(max-width:1060px)]:flex-col">
      <RightLoginPageSection mode="desktop" />
      <RightLoginPageSection mode="mobile" />
      <ArrowDown
        className=" [@media(min-width:1060px)]:hidden visible animate-bounce text-primary-Light"
        size={20}
      />
      <section className="flex flex-col w-full rounded-xl gap-y-5 [@media(min-width:601px)]:max-w-[600px] max-w-[90%] ">
        <div className="w-full rounded-xl shadow-[0px_0px_15px_5px] flex text-center flex-col gap-y-3 shadow-[#CBD6FD] p-8 text-black">
          <h1 className="mt-3 font-bold text-confirmHover-Light [@media(max-width:1060px)]:text-xl text-3xl">
            ورود به سامانه‌ی الواقعه
          </h1>

          <section className="flex flex-col items-start mt-5">
            <h2 className="font-bold text-black text-xl">نام کاربری</h2>
            <div className="relative text-slate-500 w-full">
              <User className="absolute top-[50%]  right-3" size={20} />
              <input
                type="text"
                placeholder="نام کاربری خود را وارد کنید"
                className="text-black w-full py-5 px-10 outline-none rounded-xl focus:ring-2 focus:ring-confirmHover-Light focus:ring-offset-2 border-[1px] mt-5 border-slate-300 placeholder:text-slate-500 transition-shadow duration-200"
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
                className="text-black w-full py-5 px-10 outline-none rounded-xl focus:ring-2 focus:ring-confirmHover-Light focus:ring-offset-2 border-[1px] mt-5 border-slate-300 placeholder:text-slate-500 transition-shadow duration-200"
              />
            </div>
          </section>

          <button className="hover:bg-blue-800 transition-colors duration-200 rounded-xl p-5 text-white bg-primary-Light mt-5 text-lg">
            ورود به سامانه
          </button>

          <section className="mt-5 text-primary-Light w-full flex justify-between items-center">
            <Link href={"/auth/sign-up"}>
              ثبت نام کنید
            </Link>
            <div className="cursor-pointer">فراموشی رمز‌عبور؟</div>
          </section>
        </div>
        <div className="w-full rounded-xl shadow-[0px_0px_15px_5px]  text-center gap-y-3 shadow-[#CBD6FD] p-8 text-black flex flex-col items-start">
          <h1 className="font-bold text-2xl text-confirmHover-Light">
            امکانات سامانه
          </h1>
          <ul className="text-start text-lg flex flex-col gap-y-3">
            <li className="flex items-center gap-x-2">
              <div className="rounded-full bg-black w-2 h-2"></div>
              مطالعه قرآن با ترجمه و تفسیر
            </li>
            <li className="flex items-center gap-x-2">
              <div className="rounded-full bg-black w-2 h-2"></div>جستجوی
              پیشرفته در آیات قرآن{" "}
            </li>
            <li className="flex items-center gap-x-2">
              <div className="rounded-full bg-black w-2 h-2"></div>ذخیره آیات
              مورد علاقه
            </li>
            <li className="flex items-center gap-x-2">
              <div className="rounded-full bg-black w-2 h-2"></div>پخش صوت
              قاریان مختلف
            </li>
          </ul>
        </div>
      </section>
      <RightLoginPageSection mode="mobile-end" />
    </div>
  );
}
