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
            transition={{ duration: 0.05 }}
            variants={{
              visible: {
                scale: 1,
                opacity: 1,
                top: 60,
              },
              hidden: { opacity: 0, top: -30, scale: 0.8 },
            }}
            className=" [@media(max-width:1495px)]:pointer-events-auto pointer-events-none absolute left-0 top-[60px]"
          >
            <div className="text-start bg-white rounded-xl shadow-lg shdadow-[#DDE3F8] p-5 text-black border-[1px] border-[#E2E6F0] z-[9999999] w-[200px] flex flex-col">
              {navList.map((nav, index) => {
                return (
                  <div key={index} className="relative group z-100">
                    {index === 2 ? (
                      <button className="flex items-center gap-x-2 text-md p-3 rounded-lg transition-colors hover:bg-primary-Light hover:text-white w-full">
                        {nav.icon}
                        {nav.title}
                        {nav.subs ? <ChevronDown size={18} /> : null}
                      </button>
                    ) : (
                      <Link
                        onClick={() => {
                          setShowDialog(false);
                        }}
                        className="flex items-center gap-x-2 text-md p-3 rounded-lg transition-colors hover:bg-primary-Light hover:text-white"
                        href={nav.route}
                      >
                        {nav.icon}
                        {nav.title}
                        {nav.subs ? <ChevronDown size={18} /> : null}
                      </Link>
                    )}
                    {nav.subs && (
                      <div className="group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-focus-within:pointer-events-auto opacity-0 absolute top-0 left-[180px] text-start bg-white rounded-xl shadow-lg shadow-[#DDE3F8] p-3 text-black border-[1px] border-[#E2E6F0] w-[120px] flex flex-col transition-all duration-200">
                        <Link
                          onClick={() => {
                            setShowDialog(false);
                          }}
                          href="/"
                          className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-primarybg-primary-Light block"
                        >
                          ترجمه
                        </Link>
                        <Link
                          onClick={() => {
                            setShowDialog(false);
                          }}
                          href="/"
                          className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-primarybg-primary-Light block"
                        >
                          تفسیر
                        </Link>
                        <Link
                          onClick={() => {
                            setShowDialog(false);
                          }}
                          href="/"
                          className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-primarybg-primary-Light block"
                        >
                          حدیث
                        </Link>
                        <Link
                          onClick={() => {
                            setShowDialog(false);
                          }}
                          href="/"
                          className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-primarybg-primary-Light block"
                        >
                          اعلام و اسما
                        </Link>
                        <Link
                          onClick={() => {
                            setShowDialog(false);
                          }}
                          href="/"
                          className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-primarybg-primary-Light block"
                        >
                          اعراب قران
                        </Link>
                        <Link
                          onClick={() => {
                            setShowDialog(false);
                          }}
                          href="/"
                          className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-primarybg-primary-Light block"
                        >
                          موضوعات
                        </Link>
                        <Link
                          onClick={() => {
                            setShowDialog(false);
                          }}
                          href="/"
                          className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-primarybg-primary-Light block"
                        >
                          آیالت مرتبط
                        </Link>
                        <Link
                          onClick={() => {
                            setShowDialog(false);
                          }}
                          href="/"
                          className="transition-colors duration-200 hover:bg-white p-2 rounded-lg text-md w-full hover:text-primarybg-primary-Light block"
                        >
                          آیات در کتاب
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
              <Link
                className="flex items-center gap-x-2 text-md p-3 rounded-lg transition-colors hover:bg-primary-Light hover:text-white"
                href={"/comments"}
              >
                <Store size={18} />
                درباره‌ی تیم‌الواقعه
              </Link>
              <Link
                className="flex items-center gap-x-2 text-md p-3 rounded-lg transition-colors hover:bg-primary-Light hover:text-white"
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
