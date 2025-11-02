import { Album, BookOpen, BookOpenText, Sparkles } from "lucide-react";
import Image from "next/image";
import ErabQuran from "@/../public/images/erab-quran.png";

export default function ErabQuranSection() {
  return (
    <div className="mt-[100px] w-[90%] mx-auto">
      <h1 className="text-black text-3xl font-[500] ">اعراب قران کریم</h1>
      <section className="mt-[50px] w-full flex [@media(max-width:1095px)]:flex-col items-center justify-start gap-10">
        <Image draggable={false} alt="اعراب قران" src={ErabQuran.src} width={800} height={800} className="md:w-[300px] md:h-[300px] w-[150px] h-[150px]"/>
        <div className="flex md:w-full w-[95%] md:flex-row flex-col items-center gap-3 h-full">
          <div
            style={{ boxShadow: "1px 0px 20px 3px #CBD6FD" }}
            className=" relative rounded-xl px-5 pb-5 pt-10 h-auto md:h-[300px]"
          >
            <div className="absolute top-[-20px] p-3 rounded-xl bg-primary-Light text-white">
              <Sparkles size={20} />
            </div>
            <h1 className="text-primary-Light text-xl">
              ترکیب نحوی و تحلیل صرفی آیات قرآن
            </h1>
            <p className="text-slate-500 text-md mt-2 font-thin md:w-[400px] text-justify">
              در دانشنامه قرآن کریم، برای هر آیه، این امکان فراهم شده است که
              کاربر روابط نحوی میان واژه‌ها را به‌صورت دقیق و ساختارمند مشاهده
              کند. علاوه بر آن، می‌توان برای هر کلمه به تحلیل صرفی و نحوی آن
              دسترسی داشت؛ از جمله نوع کلمه، ریشه، نقش دستوری، و تغییرات صرفی در
              قالب‌ها و ابواب مختلف. این بخش به پژوهشگران و علاقه‌مندان کمک
              می‌کند تا با دقتی علمی و دیدی زبان‌شناختی، ساختارهای زبانی قرآن را
              بهتر درک کرده و به بررسی ژرف‌تر معانی آیات بپردازند.
            </p>
          </div>
          <section className="flex flex-col w-full items-center gap-y-3">
            <MainContainersDetails icon={<Album />} title="ترکیب صرفی" />
            <MainContainersDetails
              icon={<BookOpenText />}
              title="تحلیل بلاغی"
            />
            <MainContainersDetails icon={<BookOpen />} title="تحلیل نحوی" />
          </section>
        </div>
      </section>
    </div>
  );
}

function MainContainersDetails({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      style={{ boxShadow: "1px 0px 20px 3px #CBD6FD" }}
      className="relative rounded-xl p-5 flex items-center gap-x-2 h-[92px] w-full"
    >
      <div className=" p-3 rounded-xl bg-primary-Light text-white">{icon}</div>
      <h1 className="text-primary-Light text-lg">{title}</h1>
    </div>
  );
}
