import convertToFarsiNumbers from "@/functions/EnToFnNumbers";
import {
  BarChart3,
  BookAIcon,
  BookOpen,
  Clock,
  FileText,
  Globe,
  GraduationCap,
  Library,
  LucideEdit,
  PartyPopperIcon,
  Search,
  Sparkles,
  Tag,
  Users,
} from "lucide-react";

export default function QuranContainerTypes() {
  const items = [
    {
      icon: <BookAIcon size={30} />,
      title: "153",
      subTitle: "عنوان ترجمه",
    },
    {
      icon: <LucideEdit size={30} />,
      title: "417",
      subTitle: "تفسیر در 1,605 جلد",
    },
    {
      icon: <PartyPopperIcon size={30} />,
      title: "2,020,510",
      subTitle: "برچسب صرفی",
    },
    {
      icon: <BookOpen size={30} />,
      title: "137,624",
      subTitle: "برچسب نحوی",
    },
    {
      icon: <Users size={30} />,
      title: "84",
      subTitle: "مفسران فعال",
    },
    {
      icon: <FileText size={30} />,
      title: "12,458",
      subTitle: "مقالت تحقیقاتی",
    },

    {
      icon: <Clock size={30} />,
      title: "24/7",
      subTitle: "دسترسی آنلاین",
    },
    {
      icon: <BarChart3 size={30} />,
      title: "98.7%",
      subTitle: "دقت تحلیلی",
    },
    {
      icon: <BookOpen size={30} />,
      title: "6,236",
      subTitle: "آیه‌های تحلیل شده",
    },
  ];
  return (
    <div className=" w-[90%] p-8 bg-primary-Light rounded-xl grid items-center justify-center mx-auto gap-5 2xl:grid-cols-9 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2">
      {items.map((item, _i) => {
        return (
          <div
            key={_i}
            className="bg-[#ffffff28] border-[1px] border-[#ffffff2c] hover:shadow-[0px_0px_20px_5px] hover:shadow-[#CBD6FD] transition-shadow duration-200  rounded-xl w-full text-white flex flex-col items-center gap-y-1"
          >
            <div className="mb-2 p-3 rounded-xl  flex flex-col gap-y-3 cursor-pointer  items-center justify-center">
              {item.icon}
              <div className="flex flex-col gap-y-2 items-center">
                <h1 className="font-thin text-sm">
                  {convertToFarsiNumbers(item.title)}
                </h1>
                <h2 className="font-thin text-xs">
                  {convertToFarsiNumbers(item.subTitle)}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
