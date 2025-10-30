"use client";

import { motion, AnimatePresence } from "framer-motion";
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
import { useEffect, useRef, useState } from "react";
import MobileHeader from "./mobile/mobile-header";
import DesktopHeader from "./desktop/desktop-header";

export default function Header() {
  const dialogRef: any = useRef(null);
  const menuButtonRef: any = useRef(null);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [showBaseHeader, setShowBaseHeader] = useState<boolean>(true);
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
  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        menuButtonRef.current &&
        !dialogRef.current.contains(event.target as Node) &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setShowDialog(false);
      }
    };
    if (showDialog) {
      document.addEventListener("mousedown", handleClickOutSide);
    }

    return removeEventListener("mousedown", handleClickOutSide);
  }, [showDialog, setShowDialog]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      // Debounce scroll events for better performance
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY;
        const currentWidth = window.innerWidth;

        if (currentWidth >= 1495) {
          setShowBaseHeader(scrollPosition < 100);
        } else {
          setShowBaseHeader(true);
        }
      }, 10); // 10ms debounce
    };

    // Initial setup
    handleResize();
    handleScroll();

    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [setWindowWidth]);

  // useEffect(() => {

  //   return removeEventListener("scroll", scrollBaseHeaderCheck);
  // }, [showBaseHeader, setShowBaseHeader]);
  return (
    <>
      <div className="[@media(max-width:1495px)]:sticky text-white bg-primary-Light backdrop-blur-lg z-[10000] top-0 w-full h-auto flex flex-col items-center justify-center mx-auto">
        <div className="[@media(min-width:1495px)]:w-[90%] w-[95%] flex items-center justify-between border-b-[1px] border-b-[#E2E6F0] py-5">
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
            <button className="[@media(max-width:1495px)]:hidden visible hover:bg-white hover:text-primary-Light transition-colors duration-200 font-thin border-[2px] border-[#E2E6F0] rounded-xl flex items-center justify-center gap-x-2 p-3">
              <Store size={18} />
              درباره تیم‌توسعه
            </button>
            <button className="[@media(max-width:1495px)]:hidden visible hover:bg-white hover:text-primary-Light transition-colors duration-200 font-thin border-[2px] border-[#E2E6F0] rounded-xl flex items-center justify-center gap-x-2 p-3">
              <MessageCircleDashed size={18} />
              نظرات مسلمانان
            </button>

            <button className=" hover:bg-white hover:text-primary-Light transition-colors duration-200 font-thin border-[2px] border-[#E2E6F0] rounded-xl flex items-center justify-center gap-x-2 p-3">
              <UserRoundCheck size={18} />
              <h1 className="[@media(max-width:570px)]:hidden visible">
                ورود / عضویت
              </h1>
            </button>
            <button className="hover:bg-white hover:text-primary-Light transition-colors duration-200 font-bold border-[2px] border-[#E2E6F0] rounded-xl flex items-center justify-center gap-x-2 p-3">
              <Moon size={18} />
            </button>
            <div className="relative">
              <button
                ref={menuButtonRef}
                onClick={() => {
                  setShowDialog(!showDialog);
                }}
                className="[@media(min-width:1495px)]:hidden visible hover:bg-white hover:text-primary-Light transition-colors duration-200 font-bold border-[2px] border-[#E2E6F0] rounded-xl flex items-center justify-center gap-x-2 p-3"
              >
                <Menu size={18} />
              </button>

              <MobileHeader
                showDialog={showDialog}
                setShowDialog={setShowDialog}
                navList={navItems}
                dialogRef={dialogRef}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky text-white bg-[#4c5ed5] backdrop-blur-lg z-[10000] top-0 w-full h-auto flex flex-col items-center justify-center mx-auto">
        <DesktopHeader navItems={navItems} />
      </div>
    </>
  );
}
