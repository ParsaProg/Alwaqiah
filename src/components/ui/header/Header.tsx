"use client";

import Logo from "@/../public/logo/waqiah-logo.svg";
import {
  Album,
  Book,
  BookOpen,
  BookOpenText,
  Building2,
  ChevronDown,
  Clock10,
  Ear,
  GraduationCap,
  Images,
  LibraryBig,
  Menu,
  MessageCircleDashed,
  Moon,
  Store,
  University,
  UserRoundCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./mobile/mobile-header";

export default function Header() {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const navItems = [
    {
      title: "قران",
      route: "/quran",
      icon: <BookOpen size={18} />,
    },
    {
      title: "سوره‌نامه",
      route: "/surah",
      icon: <GraduationCap size={18} />,
    },
    {
      title: "دانش‌نامه",
      route: "/since",
      icon: <University size={18} />,
      subs: [],
    },
    {
      title: "اعلام و اسما",
      route: "/ears",
      icon: <Ear size={18} />,
    },
    {
      title: "فرهنگ موضوعی",
      route: "/farhang",
      icon: <Building2 size={18} />,
    },
    {
      title: "معجم صرفی",
      route: "/moajam",
      icon: <Album size={18} />,
    },
    {
      title: "واژه نامه",
      route: "/almoajam",
      icon: <BookOpenText size={18} />,
    },
    {
      title: "کتابخانه",
      route: "/library",
      icon: <LibraryBig size={18} />,
    },
    {
      title: "گالری تصاویر",
      route: "/gallery",
      icon: <Images size={18} />,
    },
    {
      title: "اوقات شرعی",
      route: "/azan-times",
      icon: <Clock10 size={18} />,
    },
  ];
  return (
    <>
      <div className="text-white bg-[#4c5ed5] backdrop-blur-lg z-[10000] fixed top-0 w-full h-auto flex flex-col items-center justify-center mx-auto">
        <div className="[@media(min-width:1495px)]:w-[90%] w-[95%] flex items-center justify-between border-b-[1px] border-b-white py-5">
          <Link href="/" className="flex items-center gap-x-2">
            <Image
              draggable={false}
              alt="logo"
              src={Logo.src}
              width={800}
              height={800}
              className="w-[60px] h-[60px]"
            ></Image>
            <h1 className="text-white untihamo text-3xl">الواقعه</h1>
          </Link>
          <div className="flex items-center gap-x-3 text-sm">
            <button className="[@media(max-width:1495px)]:hidden visible hover:bg-white hover:text-[#4C5FD5] transition-colors duration-200 font-bold border-[2px] border-[#E2E6F0] rounded-xl flex items-center justify-center gap-x-2 p-3">
              <Store size={18} />
              درباره تیم‌توسعه
            </button>
            <button className="[@media(max-width:1495px)]:hidden visible hover:bg-white hover:text-[#4C5FD5] transition-colors duration-200 font-bold border-[2px] border-[#E2E6F0] rounded-xl flex items-center justify-center gap-x-2 p-3">
              <MessageCircleDashed size={18} />
              نظرات مسلمانان
            </button>

            <button className=" hover:bg-white hover:text-[#4C5FD5] transition-colors duration-200 font-bold border-[2px] border-[#E2E6F0] rounded-xl flex items-center justify-center gap-x-2 p-3">
              <UserRoundCheck size={18} />
              <h1 className="[@media(max-width:570px)]:hidden visible">
                ورود / عضویت
              </h1>
            </button>
            <button className="hover:bg-white hover:text-[#4C5FD5] transition-colors duration-200 font-bold border-[2px] border-[#E2E6F0] rounded-xl flex items-center justify-center gap-x-2 p-3">
              <Moon size={18} />
            </button>
            <div className="relative">
              <button
                onClick={() => {
                  setShowDialog(!showDialog);
                }}
                className="[@media(min-width:1495px)]:hidden visible hover:bg-white hover:text-[#4C5FD5] transition-colors duration-200 font-bold border-[2px] border-[#E2E6F0] rounded-xl flex items-center justify-center gap-x-2 p-3"
              >
                <Menu size={18} />
              </button>

              <MobileHeader
                showDialog={showDialog}
                setShowDialog={setShowDialog}
                navList={navItems}
              />
            </div>
          </div>
        </div>
        <div className="[@media(max-width:1495px)]:hidden visible w-[90%] mx-auto text-white py-3 bg-[#4c5ed5] backdrop-blur-lg h-auto flex border-b-[1px] border-t-white gap-x-1">
          {navItems.map((nav, _i) => {
            return (
              <div key={_i} className={`relative ${nav.subs ? "group" : ""}`}>
                <Link
                  href={nav.route}
                  className={`font-bold p-3 hover:bg-white hover:text-[#4C5FD5] rounded-lg transition-colors duration-200 text-lg flex items-center gap-x-2`}
                  aria-haspopup={nav.subs ? "menu" : undefined}
                >
                  {nav.icon}
                  {nav.title}
                  {nav.subs ? <ChevronDown size={18} /> : null}
                </Link>

                {nav.subs && (
                  <div
                    // حالت اولیه: نامرئی و غیر قابل کلیک؛ با hover یا focus-within ظاهر و کلیک‌پذیر می‌شود
                    className="absolute left-0 top-[50px] w-full bg-[#4C5FD5]
                 border-[0.5px] border-white rounded-lg p-3 z-10
                 opacity-0 translate-y-1 scale-95 pointer-events-none
                 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto
                 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100
                 transition-all duration-200 text-start flex flex-col"
                    role="menu"
                  >
                    <Link
                      href="/"
                      className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-[#4C5FD5] block"
                    >
                      ترجمه
                    </Link>
                    <Link
                      href="/"
                      className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-[#4C5FD5] block"
                    >
                      تفسیر
                    </Link>
                    <Link
                      href="/"
                      className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-[#4C5FD5] block"
                    >
                      حدیث
                    </Link>
                    <Link
                      href="/"
                      className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-[#4C5FD5] block"
                    >
                      اعلام و اسما
                    </Link>
                    <Link
                      href="/"
                      className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-[#4C5FD5] block"
                    >
                      اعراب قران
                    </Link>
                    <Link
                      href="/"
                      className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-[#4C5FD5] block"
                    >
                      موضوعات
                    </Link>
                    <Link
                      href="/"
                      className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-[#4C5FD5] block"
                    >
                      آیالت مرتبط
                    </Link>
                    <Link
                      href="/"
                      className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-[#4C5FD5] block"
                    >
                      آیات در کتاب
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
