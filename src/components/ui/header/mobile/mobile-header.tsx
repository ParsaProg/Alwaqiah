"use client";

import { AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleDashed, Store } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function MobileHeader({
  showDialog,
  setShowDialog,
  navList,
  dialogRef,
}: {
  showDialog: boolean;
  setShowDialog: (value: boolean) => void;
  navList: Array<any>;
  dialogRef: any;
}) {
  return (
    <div className="[@media(max-width:1495px)]:opacity-[1] opacity-0 transition-opacity duration-200">
      <AnimatePresence>
        {showDialog && (
          <motion.div
            ref={dialogRef}
            key="dialog"
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ delay: 0.1, duration: 0.1 }}
            variants={{
              visible: {
                scale: 1,
                opacity: 1,
                top: 60,
              },
              hidden: { opacity: 0, top: -300, scale: 0.5 },
            }}
            className=" [@media(max-width:1495px)]:pointer-events-auto pointer-events-none absolute left-0 top-[60px]"
          >
            <div className="text-start bg-white rounded-xl shadow-lg shdadow-[#DDE3F8] p-5 text-black border-[1px] border-[#E2E6F0] z-[9999999] w-[200px] flex flex-col">
              {navList.map((nav, index) => {
                return (
                  <div key={index} className="relative group ">
                    {index === 2 ? (
                      <button className="flex items-center gap-x-2 text-md p-3 rounded-lg transition-colors hover:bg-[#4C5FD5] hover:text-white w-full">
                        {nav.icon}
                        {nav.title}
                        {nav.subs ? <ChevronDown size={18} /> : null}
                      </button>
                    ) : (
                      <Link
                        className="flex items-center gap-x-2 text-md p-3 rounded-lg transition-colors hover:bg-[#4C5FD5] hover:text-white"
                        href={nav.route}
                      >
                        {nav.icon}
                        {nav.title}
                        {nav.subs ? <ChevronDown size={18} /> : null}
                      </Link>
                    )}
                    {nav.subs && (
                      <div className="group-hover:opacity-[1] opacity-0 absolute top-0 left-[180px] text-start bg-white rounded-xl shadow-lg shdadow-[#DDE3F8] p-3 text-black border-[1px] border-[#E2E6F0] z-[9999999] w-[120px] flex flex-col transition-all duration-200">
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
              <Link
                className="flex items-center gap-x-2 text-md p-3 rounded-lg transition-colors hover:bg-[#4C5FD5] hover:text-white"
                href={"/comments"}
              >
                <Store size={18} />
                درباره‌ی تیم‌الواقعه
              </Link>
              <Link
                className="flex items-center gap-x-2 text-md p-3 rounded-lg transition-colors hover:bg-[#4C5FD5] hover:text-white"
                href={"/comments"}
              >
                <MessageCircleDashed size={18} />
                نظرات مسلمانان
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
