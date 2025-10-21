import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function DesktopHeader({ navItems }: { navItems: Array<any> }) {
  return (
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
  );
}
