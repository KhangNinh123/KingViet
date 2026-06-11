import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils";

export const NewsCard = ({ image, title, className }) => {
  return (
    <div className={cn("group cursor-pointer rounded-2xl overflow-hidden bg-[#161D30] text-white flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 shadow-xl", className)}>
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5 flex flex-col flex-grow justify-between">
        <h3 className="font-semibold text-lg line-clamp-3 leading-snug">{title}</h3>
        <div className="flex justify-end mt-4">
          <div className="bg-white/10 p-2 rounded-full group-hover:bg-white group-hover:text-[#161D30] transition-colors">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
