import { BarChart3, BookAIcon, BookOpen, Clock, FileText, Globe, GraduationCap, Library, LucideEdit, PartyPopperIcon, Search, Sparkles, Tag, Users } from "lucide-react";

export default function QuranContainerTypes() {
  const items = [
   {
    icon: <BookAIcon size={50} />,
    title: "153",
    subTitle: "عنوان ترجمه",
  },
  {
    icon: <LucideEdit size={50} />,
    title: "417",
    subTitle: "تفسیر در 1,605 جلد",
  },
  {
    icon: <PartyPopperIcon size={50} />,
    title: "2,020,510",
    subTitle: "برچسب صرفی",
  },
  {
    icon: <BookOpen size={50} />,
    title: "137,624",
    subTitle: "برچسب نحوی",
  },
  {
    icon: <Users size={50} />,
    title: "84",
    subTitle: "مفسران فعال",
  },
  {
    icon: <FileText size={50} />,
    title: "12,458",
    subTitle: "مقالت تحقیقاتی",
  },

  {
    icon: <Clock size={50} />,
    title: "24/7",
    subTitle: "دسترسی آنلاین",
  },
  {
    icon: <BarChart3 size={50} />,
    title: "98.7%",
    subTitle: "دقت تحلیلی",
  },
  {
    icon: <BookOpen size={50} />,
    title: "6,236",
    subTitle: "آیه‌های تحلیل شده",
  },
  ];
  return (
    <div className="mt-[100px] [@media(min-width:1495px)]:w-[90%] w-[95%] p-8 bg-[#4C5FD5] rounded-xl flex items-center justify-center gap-x-[80px]  mx-auto">
      {items.map((item, _i) => {
        return <div key={_i} className="text-white flex flex-col items-center gap-y-1">
            <div className="mb-2 p-3 rounded-xl bg-[#ffffff28] border-[4px] border-white flex items-center justify-center">
                {item.icon}
            </div>
            <h1 className="font-thin text-sm">{item.title}</h1>
            <h2 className="font-thin text-sm">{item.subTitle}</h2>
        </div>
      })}
    </div>
  );
}
